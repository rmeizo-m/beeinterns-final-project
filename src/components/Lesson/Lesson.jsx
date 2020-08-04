import React from 'react';
import './Lesson.scss';
import persone from '../../assets/home/persone.svg';
import location from '../../assets/home/location.svg';
import vector from '../../assets/home/vector.svg';

const Lesson = () => (
  <div className="lesson-card">
    <div className="lesson-info">
      <div className="lesson-info__name">
        <div>
          <span>1</span>
          Введение в автосесты
        </div>
        <div>09.10.2020</div>
      </div>
      <div className="lesson-info__worck">
        <div className="lesson-info__teacher">
          <div>
            <div><img src={persone} alt="" /></div>
            Павел Уколов
          </div>
          <div>
            <div><img src={location} alt="" /></div>
            Zoom/shdgc/sdjhbcjdsc
          </div>
        </div>
        <div className="lesson-info__teacher">
          <button className="btn btn-lesson">Сдать</button>
          <div className="btn btn-vector">
            <img src={vector} alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default Lesson;