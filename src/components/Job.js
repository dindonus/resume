import React from 'react';

const Job = ({ title, compagny, from, to, description }) => {
  return (
    <div className="Job">
      <div className="date lighter">
        {from} - {to}
      </div>
      <h3>
        {title} <span className="primary">@{compagny}</span>
      </h3>
      <div className="description">{description}</div>
    </div>
  );
};

export default Job;
