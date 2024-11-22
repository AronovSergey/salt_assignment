import React from 'react';

import { IApi, IListColumnInfo } from '../../../declarations/interfaces';

export const ApiColumnsInfo: IListColumnInfo<IApi>[] = [
  {
    width: 200,
    title: 'ID',
    view: (item) => <>{item.id}</>,
  },
  {
    width: 200,
    title: 'Name',
    view: (item) => <>{item.name}</>,
  },
  {
    width: 200,
    title: 'API',
    view: (item) => <>{item.api}</>,
  },
];
