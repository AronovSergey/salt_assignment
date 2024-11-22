import React from 'react';

import { IListColumnInfo } from '../../declarations/interfaces';

import styles from './List.module.scss';

interface IProps<T> {
  item: T;
  columnsInfo: IListColumnInfo<T>[];
  groupedColumnWidth?: number;
  onRowClick?: (item: T) => void;
}

const RowView = <T,>({
  item,
  columnsInfo,
  groupedColumnWidth,
  onRowClick,
}: IProps<T>) => {
  return (
    <div
      className={`${styles.row} ${styles.row_view}`}
      onClick={() => onRowClick?.(item)}
    >
      {groupedColumnWidth && (
        <div style={{ width: `${groupedColumnWidth}px` }} />
      )}

      {columnsInfo.map((column, index) => (
        <div key={index} style={{ width: `${column.width}px` }}>
          {column.view(item)}
        </div>
      ))}
    </div>
  );
};

export default RowView;
