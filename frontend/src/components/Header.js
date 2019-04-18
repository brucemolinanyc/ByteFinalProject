import React from 'react';
// import { NavLink } from 'react-router-dom';

const Header = () => (
  <div className="ui huge menu">
    <a className="red item" href="/"  exact="true">Login Placeholder </a>
    <a className="yellow item" href="/home"  exact="true">Home</a>
    <a className="olive item" href="/profile" exact="true" >Profile</a>
    <a className="green item" href="/vote" exact="true">Check Voter Registration</a>

    <div className="right menu item">
        <div className="ui primary button">Sign Out</div>
    </div>
    
  </div>
);
export default Header;

