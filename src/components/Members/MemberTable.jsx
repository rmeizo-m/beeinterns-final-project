import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { fab, faTelegram, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function MemberTable(){
    return <table class="members-table" >
        <th>ФИО</th>
        <th class="second-th"><p>Git</p></th>
        <th class="second-th"><p>Mail</p></th>
        <th class="second-th"><p>Telegram</p></th>
        <MembersTableRow username="Екатарина Козловцева" gitlink="https://github.com/KateKozlovtseva" maillink="ea.kozlovtseva@physics.msu.ru" telink="@Ko-cat" ></MembersTableRow>
        <MembersTableRow username="Екатарина Козловцева" gitlink="https://github.com/KateKozlovtseva" maillink="ea.kozlovtseva@physics.msu.ru" telink="@Ko-cat" ></MembersTableRow>
        <MembersTableRow username="Екатарина Козловцева" gitlink="https://github.com/KateKozlovtseva" maillink="ea.kozlovtseva@physics.msu.ru" telink="@Ko-cat" ></MembersTableRow>
        <MembersTableRow username="Екатарина Козловцева" gitlink="https://github.com/KateKozlovtseva" maillink="ea.kozlovtseva@physics.msu.ru" telink="@Ko-cat" ></MembersTableRow>
        <MembersTableRow username="Екатарина Козловцева" gitlink="https://github.com/KateKozlovtseva" maillink="ea.kozlovtseva@physics.msu.ru" telink="@Ko-cat" ></MembersTableRow>
        <MembersTableRow username="Екатарина Козловцева" gitlink="https://github.com/KateKozlovtseva" maillink="ea.kozlovtseva@physics.msu.ru" telink="@Ko-cat" ></MembersTableRow>
        </table>;
}

function MembersTableRow(props){
    return <tr class="member-row">
    <td>{props.username}</td>
    <td><a href="#" ><FontAwesomeIcon class="contacts-img" id="git" icon={faGithub} /><p class="member-link">{props.gitlink}</p></a></td>
    <td><a href="#" ><FontAwesomeIcon class="contacts-img" id="mail" icon={faEnvelope} /><p class="member-link">{props.maillink}</p></a></td>
    <td><a href="#" ><FontAwesomeIcon class="contacts-img" id="telegram" icon={fab, faTelegram} /><p class="member-link">{props.telink}</p></a></td>
  </tr>;
}