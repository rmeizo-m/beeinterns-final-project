import React, { Component } from 'react';
import './NewsPage.css';
import enot from '../../assets/enot/telegram-online-enot-beeline-12.png';

export default class NewsPage extends Component {
  render() {
    return (
      
      <section class="news-content-wrapper">

      <div class="news-area">
        
        <form class="news-message" id="message-form">
          <div class="left-content">
            <input class="input-text" id="input" type="text" placeholder="Write a message..."/>                    
          </div>
          {/* <div style="width: 5%;">
            <div id="indicator"></div>
          </div> */}
          <div class="right-content">
            <input id="button" class="button" type="submit" value="" disabled="true"/>
          </div>                
        </form>


        <ul class="news-list" id="news">

          <li class="news-list-item">
            <div class="info">

              <div class="avatar-wrapper">
                <img class="avatar-image" src=""/>
              </div>

              <div class="text-info">
                <div class="username">Ivanov Ivan</div>
                <div class="time">20.07.2019 17:34</div>
              </div>
            </div>

            <div class="text-area">
              <span class="news-text">Что такое Lorem Ipsum?
                Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.</span>
            </div>
          </li>

          <li class="news-list-item">
            <div class="info">

              <div class="avatar-wrapper">
                <img class="avatar-image" src=""/>
              </div>

              <div class="text-info">
                <div class="username">Ivanov Ivan</div>
                <div class="time">20.07.2019 17:34</div>
              </div>
            </div>

            <div class="text-area">
              <span class="news-text">Что такое Lorem Ipsum?
                Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus PageMaker, в шаблонах которых используется Lorem Ipsum.</span>
            </div>
          </li>

        </ul>
  
        
      </div>

       <div class="enot-wrapper">
    <img class ="enot" id="enot" src={enot} />
    </div>

  </section>


  
    );
  }
}
