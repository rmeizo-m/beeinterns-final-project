import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { fab, faTelegram, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function MemberTable(){
    return <table class="members-table" >
        <th class="empty-th"></th>
        <th>ФИО</th>
        <th class="second-th"><p>Git</p></th>
        <th class="second-th"><p>Mail</p></th>
        <th class="second-th"><p>Telegram</p></th>
        <MembersTableRow  photoUrl="#" username="Екатарина Козловцева" gitlink="https://github.com/KateKozlovtseva" maillink="ea.kozlovtseva@physics.msu.ru" telink="@Ko-cat" ></MembersTableRow>
        <MembersTableRow  photoUrl="#" username="Екатарина Козловцева" gitlink="https://github.com/KateKozlovtseva" maillink="ea.kozlovtseva@physics.msu.ru" telink="@Ko-cat" ></MembersTableRow>
        <MembersTableRow  photoUrl="#" username="Екатарина Козловцева" gitlink="https://github.com/KateKozlovtseva" maillink="ea.kozlovtseva@physics.msu.ru" telink="@Ko-cat" ></MembersTableRow>
        <MembersTableRow  photoUrl="#" username="Екатарина Козловцева" gitlink="https://github.com/KateKozlovtseva" maillink="ea.kozlovtseva@physics.msu.ru" telink="@Ko-cat" ></MembersTableRow>
        <MembersTableRow  photoUrl="#" username="Екатарина Козловцева" gitlink="https://github.com/KateKozlovtseva" maillink="ea.kozlovtseva@physics.msu.ru" telink="@Ko-cat" ></MembersTableRow>
        <MembersTableRow  photoUrl="#" username="Екатарина Козловцева" gitlink="https://github.com/KateKozlovtseva" maillink="ea.kozlovtseva@physics.msu.ru" telink="@Ko-cat" ></MembersTableRow>
        </table>;
}

function MembersTableRow(props){
    return <tr class="member-row">
    <td class="avatar-td">
      <div class="member-avatar-wrapper">
        <img class="member-avatar-image" src={props.photoUrl} alt=""/>
      </div>
    </td>
    <td>{props.username}</td>
    <td><a href="#" ><FontAwesomeIcon class="contacts-img" id="git" icon={faGithub} /><p class="member-link">{props.gitlink}</p></a></td>
    <td><a href="#" ><FontAwesomeIcon class="contacts-img" id="mail" icon={faEnvelope} /><p class="member-link">{props.maillink}</p></a></td>
    <td><a href="#" ><FontAwesomeIcon class="contacts-img" id="telegram" icon={fab, faTelegram} /><p class="member-link">{props.telink}</p></a></td>
  </tr>;
}