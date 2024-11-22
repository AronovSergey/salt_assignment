import React from 'react';

import Badge from '../../../components/UI/Badge';
import {
  IListColumnInfo,
  IListGroupedColumnInfo,
  IRouteItem,
} from '../../../declarations/interfaces';
import MaskedBadge from './MaskedBadge';
import PiiBadge from './PiiBadge';
import { RouteTab } from './RouteDetails';

export const RequestResponseListColumnsInfo: IListColumnInfo<IRouteItem>[] = [
  {
    width: 200,
    title: 'Name',
    view: (item) => <>{item.name}</>,
  },
  {
    width: 200,
    title: 'PII',
    view: (item) => <PiiBadge item={item} />,
  },
  {
    width: 200,
    title: 'Masking',
    view: (item) => <MaskedBadge item={item} />,
  },
  {
    width: 200,
    title: 'Type',
    view: (item) => (
      <Badge
        text={item.type}
        textColor="black"
        backgroundColor="#CCF3FC"
        hasBorder={false}
      />
    ),
  },
];

export const getRequestResponseGroupedColumnsInfo = (
  tab: RouteTab,
): IListGroupedColumnInfo<IRouteItem> => {
  const columnsInfo = {
    width: 200,
    groupNames: [
      { label: 'Headers', dataPropertyKey: 'headers' },
      { label: 'Body', dataPropertyKey: 'body' },
    ],
    columns: RequestResponseListColumnsInfo,
  };

  if (tab === 'Request') {
    columnsInfo.groupNames.push(
      { label: 'URL Params', dataPropertyKey: 'urlParams' },
      { label: 'Query Params', dataPropertyKey: 'queryParams' },
    );
  }

  return columnsInfo;
};
