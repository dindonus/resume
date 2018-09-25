import React from 'react';

const Block = ({ title, children }) => {
  return (
    <div className="Block">
      <h3>
        <span className="primary">{'< '}</span>
        {title}
        <span className="primary">{' />'}</span>
      </h3>
      {children}
    </div>
  );
};

export default Block;
