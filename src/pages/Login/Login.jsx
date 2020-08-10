import React, { Component } from 'react';

import './Login.scss';
import LoginForm from '../../components/LoginForm/LoginForm';
import enot from '../../assets/enot/enot3.png'

export default class Login extends Component {
  render() {
    return (
      <div className="login-content">
            <div className="img-wrapper">
            <img className="login-img" src={enot} alt="Крутая картинка"/>
        </div>
        <LoginForm></LoginForm>
      </div>
    );
  }

}
