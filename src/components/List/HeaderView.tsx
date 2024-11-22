import React, { useMemo } from 'react';

import {
  IListColumnInfo,
  IListGroupedColumnInfo,
} from '../../declarations/interfaces';
import { getGroupedColumnInfo } from '../../declarations/typeGuards';

import styles from './List.module.scss';

interface IProps<T> {
  columnsInfo: IListColumnInfo<T>[] | IListGroupedColumnInfo<T>;
}

const HeaderView = <T,>({ columnsInfo }: IProps<T>) => {
  const groupColumnInfo = useMemo(() => {
    return getGroupedColumnInfo(columnsInfo);
  }, [columnsInfo]);

  const columns = useMemo(() => {
    return Array.isArray(columnsInfo) ? columnsInfo : columnsInfo.columns;
  }, [columnsInfo]);

  return (
    <div className={`${styles.row} ${styles.header}`}>
      {groupColumnInfo && (
        <div style={{ width: `${groupColumnInfo.width}px` }} />
      )}

      {columns.map((column, index) => (
        <div key={index} style={{ width: `${column.width}px` }}>
          {column.title}
        </div>
      ))}
    </div>
  );
};

export default HeaderView;
