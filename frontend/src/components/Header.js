import React from 'react';
// import { NavLink } from 'react-router-dom';

const Header = () => (
  <div className="ui inverted menu huge black">
    <a className="red item" href="/home"  exact="true">Home</a>
    <a className="red item" href="/vote" exact="true">Check Voter Registration</a>
    <a className="red item" href="/profile" exact="true">Profile</a>

    <div className="right menu">
      <div className="item">
        Welcome!
      </div>

    <div className="right menu item">
      <div className="ui primary button">
        Sign Out
      </div>
    </div>
  </div>
    
    
  </div>
);
export default Header;

// <a className="item" href="/"  exact="true">Login Placeholder </a>
