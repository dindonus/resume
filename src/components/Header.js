import React from 'react';
import Picture from '../images/nicolas.jpg';

const Header = ({ firstname, lastname, title, phone, mail }) => {
  return (
    <div className="Header">
      <div className="picture">
        <img src={Picture} />
      </div>
      <div className="informations">
        <div className="top">
          <h1 className="name">
            <span className="thin light">{firstname}</span>
            <br />
            <span className="primary">{lastname}</span>
          </h1>
          <div className="details lighter">
            • {mail} &nbsp; • {phone}
          </div>
        </div>
        <h2>{title}</h2>
      </div>
    </div>
  );
};

export default Header;
