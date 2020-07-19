import React, { Component } from 'react';
import './Members.scss';
import enot from '../../assets/enot/enot1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { fab, faTelegram, faGithub } from '@fortawesome/free-brands-svg-icons';


export default class Members extends Component {
  render() {
    return (<>
      <div class="table-area">
      <table class="members-table" >
        <th>ФИО</th>
        <th class="second-th"><p>Git</p></th>
        <th class="second-th"><p>Mail</p></th>
        <th class="second-th"><p>Telegram</p></th>

        <tr class="member-row">
          <td>Козловцева Екатерина</td>
          <td><a href="#" ><FontAwesomeIcon class="contacts-img" id="git" icon={faGithub} /><p class="member-link">https://github.com/KateKozlovtseva</p></a></td>
          <td><a href="#" ><FontAwesomeIcon class="contacts-img" id="mail" icon={faEnvelope} /><p class="member-link">ea.kozlovtseva@physics.msu.ru</p></a></td>
          <td><a href="#" ><FontAwesomeIcon class="contacts-img" id="telegram" icon={fab, faTelegram} /><p class="member-link">@Ko-cat</p></a></td>
        </tr>

        <tr class="member-row">
          <td>Козловцева Екатерина</td>
          <td><a href="#" ><FontAwesomeIcon class="contacts-img" id="git" icon={faGithub} /><p class="member-link">https://github.com/KateKozlovtseva</p></a></td>
          <td><a href="#" ><FontAwesomeIcon class="contacts-img" id="mail" icon={faEnvelope} /><p class="member-link">ea.kozlovtseva@physics.msu.ru</p></a></td>
          <td><a href="#" ><FontAwesomeIcon class="contacts-img" id="telegram" icon={fab, faTelegram} /><p class="member-link">@Ko-cat</p></a></td>
        </tr>


        <tr class="member-row">
          <td>Козловцева Екатерина</td>
          <td><a href="#" ><FontAwesomeIcon class="contacts-img" id="git" icon={faGithub} /><p class="member-link">https://github.com/KateKozlovtseva</p></a></td>
          <td><a href="#" ><FontAwesomeIcon class="contacts-img" id="mail" icon={faEnvelope} /><p class="member-link">ea.kozlovtseva@physics.msu.ru</p></a></td>
          <td><a href="#" ><FontAwesomeIcon class="contacts-img" id="telegram" icon={fab, faTelegram} /><p class="member-link">@Ko-cat</p></a></td>
        </tr>


        <tr class="member-row">
          <td>Козловцева Екатерина</td>
          <td><a href="#" ><FontAwesomeIcon class="contacts-img" id="git" icon={faGithub} /><p class="member-link">https://github.com/KateKozlovtseva</p></a></td>
          <td><a href="#" ><FontAwesomeIcon class="contacts-img" id="mail" icon={faEnvelope} /><p class="member-link">ea.kozlovtseva@physics.msu.ru</p></a></td>
          <td><a href="#" ><FontAwesomeIcon class="contacts-img" id="telegram" icon={fab, faTelegram} /><p class="member-link">@Ko-cat</p></a></td>
        </tr>

        <tr class="member-row">
          <td>Козловцева Екатерина</td>
          <td><a href="#" ><FontAwesomeIcon class="contacts-img" id="git" icon={faGithub} /><p class="member-link">https://github.com/KateKozlovtseva</p></a></td>
          <td><a href="#" ><FontAwesomeIcon class="contacts-img" id="mail" icon={faEnvelope} /><p class="member-link">ea.kozlovtseva@physics.msu.ru</p></a></td>
          <td><a href="#" ><FontAwesomeIcon class="contacts-img" id="telegram" icon={fab, faTelegram} /><p class="member-link">@Ko-cat</p></a></td>
        </tr>

        <tr class="member-row">
          <td>Козловцева Екатерина</td>
          <td><a href="#" ><FontAwesomeIcon class="contacts-img" id="git" icon={faGithub} /><p class="member-link">https://github.com/KateKozlovtseva</p></a></td>
          <td><a href="#" ><FontAwesomeIcon class="contacts-img" id="mail" icon={faEnvelope} /><p class="member-link">ea.kozlovtseva@physics.msu.ru</p></a></td>
          <td><a href="#" ><FontAwesomeIcon class="contacts-img" id="telegram" icon={fab, faTelegram} /><p class="member-link">@Ko-cat</p></a></td>
        </tr>

        </table>

      <div class="member-enot-wrapper">
        <img class ="member-enot" id="enot1" src={enot} alt="" />
      </div>
      </div>


    </>);
  }
}
