import React, { FunctionComponent, useMemo } from 'react';

import Header from '../../components/Header/Header';
import { IBreadcrumb } from '../../declarations/interfaces';
import Routes from '../route/list/Routes';

interface IProps {}

const PathDetails: FunctionComponent<IProps> = () => {
  const breadcrumbs = useMemo<IBreadcrumb[]>(
    () => [
      { label: 'All APIs', url: '/apis' },
      { label: 'news', url: '/api-details/1' },
      { label: 'v1/news', url: '', disableClick: true },
    ],
    [],
  );

  return (
    <>
      <Header
        title="Path: v1/news"
        previousPage="/api-details/1"
        breadcrumbs={breadcrumbs}
      />
      <div className="page">
        <div className="section padding">
          <h2>Details:</h2>
          <div>Path Name: v1/news</div>
          <div>{`Path: v1/news/{category}`}</div>
        </div>

        <h2 className="padding">Routes:</h2>
        <div className="section">
          <Routes />
        </div>
      </div>
    </>
  );
};

export default PathDetails;
