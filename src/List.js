import React from 'react';

const ListVertical = ({ children, horizontal }) => {
  return (
    <ul className={`List ${horizontal ? 'horizontal' : ''}`}>
      {children.map(element => {
        return <li>{element}</li>;
      })}
    </ul>
  );
};

const List = ({ children, horizontal }) => {
  const chain = children.join(', ');

  return ` ${chain}.`;
};

export default List;
