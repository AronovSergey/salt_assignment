import React, { FunctionComponent, useCallback, useState } from 'react';

import Badge from '../../../components/UI/Badge';
import { IRouteItem } from '../../../declarations/interfaces';

interface IProps {
  item: IRouteItem;
}

const PiiBadge: FunctionComponent<IProps> = ({ item }) => {
  const [pii, setPii] = useState(item.pii);

  const togglePii = useCallback(() => {
    setPii((prev) => !prev);
  }, [pii]);

  return (
    <Badge
      text={pii ? 'Yes' : 'No'}
      textColor={pii ? 'white' : '#7D3CE9'}
      backgroundColor="#7D3CE9"
      hasBorder={!pii}
      onClick={togglePii}
    />
  );
};

export default PiiBadge;
