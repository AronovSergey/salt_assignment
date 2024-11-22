import React, { FunctionComponent, useCallback, useState } from 'react';

import Badge from '../../../components/UI/Badge';
import { IRouteItem } from '../../../declarations/interfaces';

interface IProps {
  item: IRouteItem;
}

const MaskedBadge: FunctionComponent<IProps> = ({ item }) => {
  const [masked, setMasked] = useState(item.masked);

  const toggleMasked = useCallback(() => {
    setMasked((prev) => !prev);
  }, [masked]);

  return (
    <Badge
      text={masked ? 'Yes' : 'No'}
      textColor={masked ? 'white' : '#5D94A0'}
      backgroundColor="#5D94A0"
      hasBorder={!masked}
      onClick={toggleMasked}
    />
  );
};

export default MaskedBadge;
