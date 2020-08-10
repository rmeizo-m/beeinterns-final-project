import React, { Component } from 'react';
import './NewsPage2.css';

import NewsForm2 from '../../components/News2/NewsForm2';
import NewsList2 from '../../components/News2/NewsList2';
import enot from '../../assets/enot/enot2.png';

export default class NewsPage2 extends Component {
  render() {
    return (

      <section className="news-content-wrapper">

        <div className="news-area">

    

        </div>

        <div className="enot-wrapper">
          <img className="enot" id="enot" src={enot} alt="" />
        </div>

      </section>

    );
  }
}
