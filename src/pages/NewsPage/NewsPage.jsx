import React, { Component } from 'react';
import './NewsPage.css';

import NewsForm from '../../components/News/NewsForm';
import NewsList from '../../components/News/NewsList';
import enot from '../../assets/enot/enot7.png';

// function NewsForm(props) {
//   return <div>
//     <p>Привет, {props.foo}</p>
//     {props.children}
//   </div>
// }

export default class NewsPage extends Component {
  render() {
    return (

      <section className="news-content-wrapper">

        <div className="news-area">

          <NewsForm />

          <NewsList />

        </div>

        <div className="enot-wrapper">
          <img className="enot" id="enot" src={enot} alt="" />
        </div>

      </section>

    );
  }
}
