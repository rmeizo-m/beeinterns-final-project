import React, { Component } from 'react';
import { User, Lesson } from '../../components';
import './MainPage.scss';

import persone from '../../assets/home/persone.svg';
import location from '../../assets/home/location.svg';
import vector from '../../assets/home/vector.svg';

export default class MainPage extends Component {
  render() {
    return (
      <section className="inner">
        <User />
        <div className="lesson">
          <div className="calendar">Calendar</div>
          <div className="lesson-inner">
            <form className="lesson-form" action="">
              <select className="lesson-select" name="" id="">
                <option value="Все">Все</option>
                <option value="Сданы">Сданы</option>
                <option value="Не сданы">Не сданы</option>
              </select>
              <select className="lesson-select" name="" id="">
                <option value="Все">Месяц</option>
                <option value="Сданы">Январь</option>
                <option value="Не сданы">Февраль</option>
                <option value="Не сданы">Март</option>
                <option value="Не сданы">Апрель</option>
                <option value="Не сданы">Май</option>
                <option value="Не сданы">Июнь</option>
              </select>
            </form>
            <Lesson />
          </div>
        </div>
      </section>
    );
  }
}
