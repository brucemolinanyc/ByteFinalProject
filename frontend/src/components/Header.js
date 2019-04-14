import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>TBD Site name here</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>Login Placeholder </NavLink>
    <NavLink to="/home" activeClassName="is-active" exact={true}>Home</NavLink>
    <NavLink to="/profile" activeClassName="is-active">Profile</NavLink>
  </header>
);

export default Header;
