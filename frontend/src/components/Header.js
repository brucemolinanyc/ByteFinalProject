import React from 'react';
import {withRouter} from 'react-router-dom';
import './Header.css';
// import { NavLink } from 'react-router-dom';
// import {Link} from 'react-router-dom';
import jwt_decode from 'jwt-decode';

class Header extends React.Component{
 
  state = {
    username: ''
  }

  componentDidMount = () => {
    const token = localStorage.getItem('token')
    var decoded = jwt_decode(token)

    fetch(`http://localhost:5000/user/${decoded.user}`,{
            method: 'get',
            mode: 'cors',
            headers: {"Content-Type": "application/json"},
        })
        .then(response => response.json())
        .then(data => this.setState({username: data.user.toUpperCase()}))
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
      <div className="item" width={4}>
        <p>Welcome! &nbsp;&nbsp;<strong className="strong">{this.state.username }</strong></p>
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
