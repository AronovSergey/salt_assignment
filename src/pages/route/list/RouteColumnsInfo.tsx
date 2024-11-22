import React from 'react';

import { IListColumnInfo, IRoute } from '../../../declarations/interfaces';

export const RouteColumnsInfo: IListColumnInfo<IRoute>[] = [
  {
    width: 200,
    title: 'API',
    view: (item) => <>{item.api}</>,
  },
  {
    width: 200,
    title: 'Method',
    view: (item) => <>{item.method}</>,
  },
  {
    width: 200,
    title: 'Path',
    view: (item) => <>{item.path}</>,
  },
];
