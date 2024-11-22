import React, { FunctionComponent } from 'react';

interface IProps {
  text: string;
  textColor: string;
  backgroundColor?: string;
  hasBorder?: boolean;
  onClick?: () => void;
}

const Badge: FunctionComponent<IProps> = ({
  text,
  textColor,
  backgroundColor,
  hasBorder,
  onClick,
}) => {
  return (
    <span
      style={{
        padding: '4px 8px',
        borderRadius: '8px',
        color: textColor,
        backgroundColor: hasBorder ? 'unset' : backgroundColor,
        border: hasBorder ? `1px solid ${textColor}` : 'none',
      }}
      onClick={onClick}
    >
      {text}
    </span>
  );
};

export default Badge;
