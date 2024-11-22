import React, { FunctionComponent, useCallback, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { apis } from '../../../apis/data';
import useMock from '../../../apis/useMock';
import Header from '../../../components/Header/Header';
import List from '../../../components/List/List';
import { IApi } from '../../../declarations/interfaces';
import { ApiColumnsInfo } from './ApiColumnsInfo';

interface IProps {}

const Apis: FunctionComponent<IProps> = () => {
  const navigate = useNavigate();
  const { loading, error, result, executeRequest } = useMock<IApi[]>(apis);

  const onRowClick = useCallback((item: IApi) => {
    navigate(`/api-details/${item.id}`);
  }, []);

  useEffect(() => {
    executeRequest();
  }, []);

  return (
    <>
      <Header title="All APIs" />
      <div className="page">
        <div className="section">
          <List
            loading={loading}
            error={error}
            data={result}
            columnsInfo={ApiColumnsInfo}
            onRowClick={onRowClick}
          />
        </div>
      </div>
    </>
  );
};

export default Apis;
