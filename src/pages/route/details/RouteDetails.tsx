import React, { FunctionComponent, useEffect, useMemo, useState } from 'react';

import { routes } from '../../../apis/data';
import useMock from '../../../apis/useMock';
import Header from '../../../components/Header/Header';
import List from '../../../components/List/List';
import TabsPanel from '../../../components/TabsPanel/TabsPanel';
import {
  IBreadcrumb,
  IFilters,
  IRoute,
  IRouteItem,
} from '../../../declarations/interfaces';
import FilterPanel from './FilterPanel/FilterPanel';
import { getRequestResponseGroupedColumnsInfo } from './RequestResponseListColumnsInfo';

export type RouteTab = 'Request' | 'Response';
type DataType = IRoute['request'] | IRoute['response'] | undefined;

interface IProps {}

const RouteDetails: FunctionComponent<IProps> = () => {
  const [activeTab, setActiveTab] = useState<RouteTab>('Request');
  const [filters, setFilters] = useState<IFilters>({
    search: '',
    showPiiOnly: false,
  });
  const [collapseAll, setCollapseAll] = useState<number>(0);

  const { loading, error, result, executeRequest } = useMock<IRoute>(routes[0]);

  const breadcrumbs = useMemo<IBreadcrumb[]>(
    () => [
      { label: 'All APIs', url: '/apis' },
      { label: 'news', url: '/api-details/1' },
      { label: 'v1/news', url: '/path-details/1' },
      { label: 'Endpoints Details', url: '', disableClick: true },
    ],
    [],
  );

  const tabs = useMemo<RouteTab[]>(() => ['Request', 'Response'], []);

  const tableData = useMemo(() => {
    let data: DataType =
      activeTab === 'Request' ? result?.request : result?.response;

    if (!data) {
      return undefined;
    }

    const filterCallback = (item: IRouteItem): boolean => {
      return (
        (item.name.toLowerCase().includes(filters.search.toLowerCase()) ||
          item.type.toLowerCase().includes(filters.search.toLowerCase())) &&
        (filters.showPiiOnly ? item.pii : true)
      );
    };

    if (
      'urlParams' in data &&
      'queryParams' in data &&
      Array.isArray(data.urlParams) &&
      Array.isArray(data.queryParams)
    ) {
      data = {
        ...data,
        urlParams: data?.urlParams?.filter(filterCallback) || [],
        queryParams: data?.queryParams?.filter(filterCallback) || [],
      };
    }

    data = {
      ...data,
      headers: data?.headers?.filter(filterCallback) || [],
      body: data?.body?.filter(filterCallback) || [],
    };

    return data;
  }, [activeTab, filters, result]);

  useEffect(() => {
    executeRequest();
  }, []);

  useEffect(() => {
    setCollapseAll((prev) => prev + 1);
  }, [activeTab]);

  return (
    <>
      <Header
        title={`${result?.method.toUpperCase()} ${result?.path}`}
        previousPage="/path-details/1"
        breadcrumbs={breadcrumbs}
      />
      <TabsPanel tabs={tabs} activeTab={activeTab} onTabChange={setActiveTab} />

      <div className="page">
        <FilterPanel filters={filters} setFilters={setFilters} />

        <div className="section">
          <List
            columnsInfo={getRequestResponseGroupedColumnsInfo(activeTab)}
            data={tableData}
            loading={loading}
            error={error}
            collapseAll={collapseAll}
          />
        </div>
      </div>
    </>
  );
};

export default RouteDetails;
