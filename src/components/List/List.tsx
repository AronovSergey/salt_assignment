import React from 'react';

import {
  IListColumnInfo,
  IListGroupedColumnInfo,
} from '../../declarations/interfaces';
import Divider from '../UI/Divider';
import GroupedRowView from './GroupedRowView';
import HeaderView from './HeaderView';
import RowView from './RowView';

import styles from './List.module.scss';

interface IProps<T> {
  data?: T[] | { [key: string]: T[] };
  loading: boolean;
  error?: string;
  columnsInfo: IListColumnInfo<T>[] | IListGroupedColumnInfo<T>;
  collapseAll?: number;
  onRowClick?: (item: T) => void;
}

const List = <T,>({
  data,
  loading,
  error,
  columnsInfo,
  collapseAll,
  onRowClick,
}: IProps<T>) => {
  return (
    <div className={styles.list}>
      <HeaderView columnsInfo={columnsInfo} />
      <Divider />
      {loading && (
        <div className="flex-center">
          <div className="spinner"></div>
        </div>
      )}
      {error && <div className="flex-center">{error}</div>}
      {data && (
        <>
          {Array.isArray(data) &&
            Array.isArray(columnsInfo) &&
            data.map((item, index) => (
              <div key={index}>
                <RowView
                  item={item}
                  columnsInfo={columnsInfo}
                  onRowClick={onRowClick}
                />
              </div>
            ))}
          {!Array.isArray(data) && !Array.isArray(columnsInfo) && (
            <div>
              {columnsInfo.groupNames.map(({ label, dataPropertyKey }) => (
                <GroupedRowView
                  key={dataPropertyKey}
                  groupedColumnName={label}
                  groupedColumnWidth={columnsInfo.width}
                  data={data[dataPropertyKey]}
                  columnsInfo={columnsInfo.columns}
                  collapseAll={collapseAll}
                />
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default List;
