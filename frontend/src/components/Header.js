import React from 'react';
import {withRouter} from 'react-router-dom';
import './Header.css';
// import { NavLink } from 'react-router-dom';
// import {Link} from 'react-router-dom';
import jwt_decode from 'jwt-decode';

class Header extends React.Component{
 

  componentDidMount = () => {
    const token = localStorage.getItem('token')
    console.log(token)
  }

  onClick = () => {
    localStorage.clear()
    this.props.history.push('/')
  }

  render(){
    return(
      <div className="ui inverted menu huge black">
    <a className="red item" href="/home"  exact="true">Home</a>
    <a className="red item" href="/vote" exact="true">Check Voter Registration</a>
    <a className="red item" href="/profile" exact="true">Profile</a>

    <div className="right menu">
      <div className="item">
        Welcome!
      </div>

    <div className="right menu item">
      <div className="ui primary button" onClick={this.onClick}>
        Sign Out
      </div>
    </div>
  </div>
  </div>
    )
  }
}

export default withRouter(Header);

// <a className="item" href="/"  exact="true">Login Placeholder </a>
