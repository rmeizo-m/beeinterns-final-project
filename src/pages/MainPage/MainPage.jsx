import React, { Component } from 'react';
import { User } from '../../components';

export default class MainPage extends Component {
  render() {
    return (
      <div class="inner" >
        <User />
        <div className="lesson">

          <form className="lesson-form" action="">
            <input className="lesson-input" type="text" name="" id="" />
            <input className="lesson-input" type="text" name="" id="" />
          </form>

          <div className="lesson-card">
            <div className="leson-card__information" />
          </div>

        </div>
      </div>
    );
  }
}
