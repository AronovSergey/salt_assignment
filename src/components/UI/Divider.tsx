import React, { FunctionComponent } from 'react';

interface IProps {
  className?: string;
}

const Divider: FunctionComponent<IProps> = ({ className }) => {
  return <div className={`divider ${className}`} />;
};

export default Divider;
