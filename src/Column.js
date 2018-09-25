import React from 'react';

const Column = ({ children, large }) => {
  return <div className={`Column ${large ? 'large' : ''}`}>{children}</div>;
};

export default Column;
