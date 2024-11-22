import React, { FunctionComponent, useCallback, useEffect } from 'react';

import { useNavigate } from 'react-router-dom';

import { paths } from '../../../apis/data';
import useMock from '../../../apis/useMock';
import List from '../../../components/List/List';
import { IPath } from '../../../declarations/interfaces';
import { PathColumnsInfo } from './PathColumnsInfo';

interface IProps {}

const Paths: FunctionComponent<IProps> = () => {
  const navigate = useNavigate();
  const { loading, error, result, executeRequest } = useMock<IPath[]>(paths);

  const onRowClick = useCallback((item: IPath) => {
    navigate(`/path-details/${item.id}`);
  }, []);

  useEffect(() => {
    executeRequest();
  }, []);

  return (
    <List
      loading={loading}
      error={error}
      data={result}
      columnsInfo={PathColumnsInfo}
      onRowClick={onRowClick}
    />
  );
};

export default Paths;
