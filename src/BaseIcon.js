import { memo } from 'react';
import './BaseIcon.css';

export const BaseIcon = memo((props) => {
  const { className = '', name } = props;
  return (
    <svg className={`icon-wrapper ${className}`} aria-hidden="true">
      <use xlinkHref={`#${name}`}></use>
    </svg>
  );
});

BaseIcon.displayName = 'BaseIcon';
