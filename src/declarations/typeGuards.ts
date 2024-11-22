import { IListColumnInfo, IListGroupedColumnInfo } from './interfaces';

export const getGroupedColumnInfo = <T>(
  columns: IListColumnInfo<T>[] | IListGroupedColumnInfo<T>,
): IListGroupedColumnInfo<T> | undefined => {
  return Array.isArray(columns) ? undefined : columns;
};
