import React from 'react';

import './header.css';

const Header = () => {
  return (
    <div className="header d-flex">
      <h3>
        <a href="#">
          Naruto DB
        </a>
      </h3>
      <ul className="d-flex">
        <li>
          <a href="#">Characters</a>
        </li>
        <li>
          <a href="#">Villages</a>
        </li>
        <li>
          <a href="#">Clans</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;