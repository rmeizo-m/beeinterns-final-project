import React, { Component } from 'react';
import './NotFound.scss';

import error from '../../assets/404/NotFound.png';
import error1 from '../../assets/404/NotFoundsmall.png';

export default class NotFound extends Component {
  render() {
    return (
<>
      <div className="background"></div>
      <section className="notFound-content">
          <div className="notFound-img-wrapper">
          <img className="notFound-img" id="notFound-img" src={error} alt="Page Not Found" />
          <img className="notFoundsmall-img" id="notFoundsmall-img" src={error1} alt="Page Not Found" />
        </div>

        <a href ="/" className="notFound-button" id="notFound-button">Вернуться на главную</a>

      </section>
      </>

    );
  }
}
