import React, { Component } from 'react';
import { User } from '../../components';
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
            <div className="lesson-card">
              <div className="lesson-info">
                <div className="lesson-info__name">
                  <div><span>1</span>Введение в автосесты</div>
                  <div>09.10.2020</div>
                </div>
                <div className="lesson-info__worck">
                  <div className="lesson-info__teacher">
                    <div><div><img src="" alt=""/></div>Павел Уколов</div>
                    <div><div><img src="" alt=""/></div>Zoom/shdgc/sdjhbcjdsc</div>
                  </div>
                  <div className="lesson-info__teacher">
                    <button className="btn btn-lesson">Сдать</button>
                    <div>Га</div>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div>
      </section>
    );
  }
}
