import React, { Component } from 'react';
import UserCard from './components/Usercard';
import HomeWork from './components/HomeWork';
import './User.scss';

export default class User extends Component {
  render() {
    return (
      <div className="user">
        <UserCard />
        <HomeWork />
      </div>
    );
  }
}
