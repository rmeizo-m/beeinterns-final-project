import React, { Component } from 'react';
import { User, Lesson, Select } from '../../components';

import './MainPage.scss';

export default class MainPage extends Component {
  render() {
    return (
      <section className="inner">
        <User />
        <div className="lesson">
          <div className="calendar">Calendar</div>
          <div className="lesson-inner">
            <form className="lesson-form" action="">
              <Select/>
              <Select/>
            </form>
            <div className="lesson-card">
            <Lesson />
            <Lesson />
            <Lesson />
            <Lesson />
            <Lesson />
            <Lesson />
            <Lesson />
            <Lesson />
            <Lesson />
            <Lesson />
            <Lesson />
            <Lesson />
            <Lesson />
            <Lesson />
            <Lesson />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
