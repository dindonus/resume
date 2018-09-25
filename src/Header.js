import React from 'react';
import Picture from './nicolas.jpg';

const Header = () => {
  return (
    <div className="Header">
      <div className="picture">
        <img src={Picture} />
      </div>
      <div className="informations">
        <div className="top">
          <h1 className="name">
            <span className="thin light">Nicolas</span>
            <br />
            <span className="primary">Cordin</span>
          </h1>
          <div className="details lighter">
            • nicolas@dindon.us &nbsp; • 06 65 78 68 02
          </div>
        </div>
        <h2>Front-end Developer</h2>
      </div>
    </div>
  );
};

export default Header;
