import React from 'react';

import { IListColumnInfo, IPath } from '../../../declarations/interfaces';

export const PathColumnsInfo: IListColumnInfo<IPath>[] = [
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
    title: 'Path',
    view: (item) => <>{item.path}</>,
  },
];
