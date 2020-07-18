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
      
      <section class="news-content-wrapper">

      <div class="news-area">

        <NewsForm></NewsForm>

        <NewsList></NewsList>
         
      </div>

       <div class="enot-wrapper">
    <img class ="enot" id="enot" src={enot} alt=""/>
    </div>

  </section>


  
    );
  }
}
