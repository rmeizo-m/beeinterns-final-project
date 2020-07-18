import * as React from 'react';
import "../../assets/messageButton/Path1.png";
import "../../assets/messageButton/Path.png";



export default function NewsForm() {
    return <form class="news-message" id="message-form">
          <div class="left-content">
            <input class="input-text" id="input" type="text" placeholder="Write a message..."/>                    
          </div>
          <div class = "text-load">
            <div id="indicator"></div>
          </div>
          <div class="right-content">
            <input id="button" class="button" type="submit" value="" disabled="true"/>
          </div>                
        </form>;
}