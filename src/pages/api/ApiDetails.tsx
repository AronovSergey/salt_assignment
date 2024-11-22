import React, { FunctionComponent, useMemo } from 'react';

import Header from '../../components/Header/Header';
import { IBreadcrumb } from '../../declarations/interfaces';
import Paths from '../path/list/Paths';

interface IProps {}

const ApiDetails: FunctionComponent<IProps> = () => {
  const breadcrumbs = useMemo<IBreadcrumb[]>(
    () => [
      { label: 'All APIs', url: '/apis' },
      { label: 'news', url: '', disableClick: true },
    ],
    [],
  );

  return (
    <>
      <Header
        title="Api: news"
        previousPage="/apis"
        breadcrumbs={breadcrumbs}
      />
      <div className="page">
        <div className="section padding">
          <h2>Details:</h2>
          <div>API Name: news</div>
          <div>API URL: https://api.news.com</div>
        </div>

        <h2 className="padding">Paths:</h2>
        <div className="section">
          <Paths />
        </div>
      </div>
    </>
  );
};

export default ApiDetails;
