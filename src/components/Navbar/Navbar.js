import React from 'react';

import './Navbar.css';
import SearchInput from './SearchInput/SearchInput';
import TempUnit from './TempUnit/TempUnit';

const Navbar = props => (
  <nav>
    <ul className="navbar-container">
      <li className="navbar-list-item">
        <SearchInput searchSubmit={props.searchSubmit} />
      </li>
      <li className="navbar-list-item city-name">
        <span className="">{props.data.city}</span>
      </li>
      <li className="navbar-list-item">
        <TempUnit unit={props.unit} onUnitChange={props.changeUnit} />
      </li>
    </ul>
  </nav>
);

export default Navbar;
