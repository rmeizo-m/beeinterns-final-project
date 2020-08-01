import React, { Component } from 'react';
import UserCard from '../UserCard/UserCard';

export default class User extends Component {
  render() {
    return (
      <div className="user">
        <UserCard />
          <div className="work">
              <div className="work-info">
                  Тесты
                  <div className="work-caren"><span>2</span> / 2</div>
              </div>
              <div className="work-info">
                  Домашняя работа
                  <div className="work-caren"><span>12</span> / 42</div>
              </div>
          </div>
      </div>
    );
  }
}
