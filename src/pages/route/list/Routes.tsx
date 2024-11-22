import React, { FunctionComponent, useCallback, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { routes } from '../../../apis/data';
import useMock from '../../../apis/useMock';
import List from '../../../components/List/List';
import { IRoute } from '../../../declarations/interfaces';
import { RouteColumnsInfo } from './RouteColumnsInfo';

interface IProps {}

const Routes: FunctionComponent<IProps> = () => {
  const navigate = useNavigate();
  const { loading, error, result, executeRequest } = useMock<IRoute[]>(routes);

  const onRowClick = useCallback((item: IRoute) => {
    navigate('/route-details/1');
  }, []);

  useEffect(() => {
    executeRequest();
  }, []);

  return (
    <List
      loading={loading}
      error={error}
      data={result}
      columnsInfo={RouteColumnsInfo}
      onRowClick={onRowClick}
    />
  );
};

export default Routes;
