import React from 'react';

const Job = ({ title, compagny, from, to, description, stack = [] }) => {
  return (
    <div className="Job">
      <div className="date lighter">
        {from} - {to}
      </div>
      <h3>
        {title} <span className="primary">@{compagny}</span>
      </h3>
      <div className="description">{description}</div>
      {stack.length ? (
        <div className="Stack">
          {stack.map(techno => (
            <span key={techno}>{techno}</span>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Job;
