import React, { useCallback, useEffect, useState } from 'react';

import ArrowDownIcon from '../../assets/icons/arrow-down-icon.svg';
import ArrowRightIcon from '../../assets/icons/arrow-right-big-icon.svg';
import { IListColumnInfo } from '../../declarations/interfaces';
import RowView from './RowView';

import styles from './List.module.scss';

interface IProps<T> {
  groupedColumnName: string;
  groupedColumnWidth: number;
  data: T[];
  columnsInfo: IListColumnInfo<T>[];
  collapseAll?: number;
}

const GroupedRowView = <T,>({
  groupedColumnName,
  groupedColumnWidth,
  data,
  columnsInfo,
  collapseAll,
}: IProps<T>) => {
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

  const toggleCollapse = useCallback(() => {
    setIsCollapsed((prev) => !prev);
  }, []);

  useEffect(() => {
    setIsCollapsed(true);
  }, [collapseAll]);

  return (
    <>
      <div className={styles.main_row} onClick={toggleCollapse}>
        <img
          className={styles.toggle_button}
          src={isCollapsed ? ArrowRightIcon : ArrowDownIcon}
          alt={isCollapsed ? '>' : 'v'}
        />
        <div className={`${styles.row} ${styles.row_view}`}>
          {groupedColumnName}
        </div>
      </div>

      {!isCollapsed &&
        data.map((row, index) => (
          <div key={index}>
            <RowView
              item={row}
              columnsInfo={columnsInfo}
              groupedColumnWidth={groupedColumnWidth}
            />
          </div>
        ))}
    </>
  );
};

export default GroupedRowView;
