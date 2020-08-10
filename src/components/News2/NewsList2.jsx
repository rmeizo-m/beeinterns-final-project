import * as React from 'react';

export default function NewsList(){
    return <ul class="news-list" id="news">
        <NewsListItem photoUrl="#" username="Hamidov Halim" date="08.08.2020 17:34">
        Что такое Lorem Ipsum?
        Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной
        "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию
        размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum не только успешно пережил без
        заметных изменений пять веков, но и перешагнул в электронный дизайн. Его популяризации в новое время послужили публикация 
        листов Letraset с образцами Lorem Ipsum в 60-х годах и, в более недавнее время, программы электронной вёрстки типа Aldus 
        PageMaker, в шаблонах которых используется Lorem Ipsum.
        </NewsListItem>
  </ul>;
}


function NewsListItem(props) {
    return <li class="news-list-item"> 
              <div class="info">

                <div class="avatar-wrapper">
                  <img class="avatar-image" src={props.photoUrl} alt=""/>
                </div>

                <div class="text-info">
                  <div class="username">{props.username}</div>
                  <div class="date">{props.date}</div>
                </div>

              </div>

              <div class="news-content">
                  {props.children}
              </div>

           </li> ;     
}