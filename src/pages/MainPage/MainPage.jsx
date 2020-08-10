import React from 'react';
import { Worck, Lesson, Select } from '../../components';

import './MainPage.scss';

const MainPage = () => {
  { /* Перенести в redux и json файл */ }
  const lessonItem = [
    {
      id: 1, nameLesson: 'Введение в автотесты', mentor: 'Павел Уколов', date: '21.11.17',
    },
    {
      id: 2, nameLesson: 'Введение в автотесты 2', mentor: 'Павел Уколов', date: '21.11.17',
    },
    {
      id: 3, nameLesson: 'Введение в автотесты 3', mentor: 'Павел Уколов', date: '21.11.17',
    },
    {
      id: 4, nameLesson: 'Введение в автотесты 4', mentor: 'Павел Уколов', date: '21.11.17',
    },
    {
      id: 5, nameLesson: 'Введение в автотесты 5', mentor: 'Павел Уколов', date: '21.11.17',
    },
    {
      id: 6, nameLesson: 'Введение в автотесты 6', mentor: 'Павел Уколов', date: '21.11.17',
    },
    {
      id: 7, nameLesson: 'Введение в автотесты 7', mentor: 'Павел Уколов', date: '21.11.17',
    },
    {
      id: 8, nameLesson: 'Введение в автотесты 8', mentor: 'Павел Уколов', date: '21.11.17',
    },
    {
      id: 9, nameLesson: 'Введение в автотесты 9', mentor: 'Павел Уколов', date: '21.11.17',
    },
    {
      id: 10, nameLesson: 'Введение в автотесты 10', mentor: 'Павел Уколов', date: '21.11.17',
    },
    {
      id: 11, nameLesson: 'Введение в автотесты 11', mentor: 'Павел Уколов', date: '21.11.17',
    },
    {
      id: 12, nameLesson: 'Введение в автотесты', mentor: 'Павел Уколов', date: '21.11.17',
    },
    {
      id: 13, nameLesson: 'Введение в автотесты', mentor: 'Павел Уколов', date: '21.11.17',
    },
    {
      id: 14, nameLesson: 'Введение в автотесты', mentor: 'Павел Уколов', date: '21.11.17',
    },
    {
      id: 15, nameLesson: 'Введение в автотесты', mentor: 'Павел Уколов', date: '21.11.17',
    },
    {
      id: 16, nameLesson: 'Введение в автотесты', mentor: 'Павел Уколов', date: '21.11.17',
    },
    {
      id: 17, nameLesson: 'Введение в автотесты', mentor: 'Павел Уколов', date: '21.11.17',
    },
    {
      id: 18, nameLesson: 'Введение в автотесты', mentor: 'Павел Уколов', date: '21.11.17',
    },
    {
      id: 19, nameLesson: 'Введение в автотесты', mentor: 'Павел Уколов', date: '21.11.17',
    },
    {
      id: 20, nameLesson: 'Введение в автотесты', mentor: 'Павел Уколов', date: '21.11.17',
    },
    {
      id: 21, nameLesson: 'Введение в автотесты', mentor: 'Павел Уколов', date: '21.11.17',
    },
    {
      id: 22, nameLesson: 'Введение в автотесты', mentor: 'Павел Уколов', date: '21.11.17',
    },
    {
      id: 23, nameLesson: 'Введение в автотесты', mentor: 'Павел Уколов', date: '21.11.17',
    },
    {
      id: 24, nameLesson: 'Введение в автотесты', mentor: 'Павел Уколов', date: '21.11.17',
    },
    {
      id: 25, nameLesson: 'Введение в автотесты', mentor: 'Павел Уколов', date: '21.11.17',
    },
    {
      id: 26, nameLesson: 'Введение в автотесты', mentor: 'Павел Уколов', date: '21.11.17',
    },
    {
      id: 27, nameLesson: 'Введение в автотесты', mentor: 'Павел Уколов', date: '21.11.17',
    },
    {
      id: 28, nameLesson: 'Введение в автотесты', mentor: 'Павел Уколов', date: '21.11.17',
    },
    {
      id: 29, nameLesson: 'Введение в автотесты', mentor: 'Павел Уколов', date: '21.11.17',
    },
    {
      id: 30, nameLesson: 'Введение в автотесты', mentor: 'Павел Уколов', date: '21.11.17',
    },
    {
      id: 31, nameLesson: 'Введение в автотесты', mentor: 'Павел Уколов', date: '21.11.17',
    },
    {
      id: 32, nameLesson: 'Введение в автотесты', mentor: 'Павел Уколов', date: '21.11.17',
    },
    {
      id: 33, nameLesson: 'Введение в автотесты', mentor: 'Павел Уколов', date: '21.11.17',
    },
    {
      id: 34, nameLesson: 'Введение в автотесты', mentor: 'Павел Уколов', date: '21.11.17',
    },
    {
      id: 35, nameLesson: 'Введение в автотесты', mentor: 'Павел Уколов', date: '21.11.17',
    },
  ];
  const lessons = lessonItem.map((lesson) => <Lesson key={lesson.id} id={lesson.id} nameLesson={lesson.nameLesson} mentor={lesson.mentor} date={lesson.date} />);

  return (
    <section className="inner">
      <Worck />
      <div className="lesson">
        <div className="calendar">Calendar</div>
        <div className="lesson-inner">
          <form className="lesson-form" action="">
            <Select />
            <Select />
          </form>
          <div className="lesson-card">
            {lessons}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainPage;
