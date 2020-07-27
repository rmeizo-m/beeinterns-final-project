import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { fab, faTelegram, faGithub } from '@fortawesome/free-brands-svg-icons';

export default function MemberTable() {
  return (
    <table className="members-table">
      <th className="empty-th" />
      <th>ФИО</th>
      <th className="second-th"><p>Git</p></th>
      <th className="second-th"><p>Mail</p></th>
      <th className="second-th"><p>Telegram</p></th>
      <MembersTableRow photoUrl="#" username="Екатарина Козловцева" gitlink="https://github.com/KateKozlovtseva" maillink="ea.kozlovtseva@physics.msu.ru" telink="@Ko-cat" />
      <MembersTableRow photoUrl="#" username="Екатарина Козловцева" gitlink="https://github.com/KateKozlovtseva" maillink="ea.kozlovtseva@physics.msu.ru" telink="@Ko-cat" />
      <MembersTableRow photoUrl="#" username="Екатарина Козловцева" gitlink="https://github.com/KateKozlovtseva" maillink="ea.kozlovtseva@physics.msu.ru" telink="@Ko-cat" />
      <MembersTableRow photoUrl="#" username="Екатарина Козловцева" gitlink="https://github.com/KateKozlovtseva" maillink="ea.kozlovtseva@physics.msu.ru" telink="@Ko-cat" />
      <MembersTableRow photoUrl="#" username="Екатарина Козловцева" gitlink="https://github.com/KateKozlovtseva" maillink="ea.kozlovtseva@physics.msu.ru" telink="@Ko-cat" />
      <MembersTableRow photoUrl="#" username="Екатарина Козловцева" gitlink="https://github.com/KateKozlovtseva" maillink="ea.kozlovtseva@physics.msu.ru" telink="@Ko-cat" />
      <MembersTableRow photoUrl="#" username="Екатарина Козловцева" gitlink="https://github.com/KateKozlovtseva" maillink="ea.kozlovtseva@physics.msu.ru" telink="@Ko-cat" />
      <MembersTableRow photoUrl="#" username="Екатарина Козловцева" gitlink="https://github.com/KateKozlovtseva" maillink="ea.kozlovtseva@physics.msu.ru" telink="@Ko-cat" />
      <MembersTableRow photoUrl="#" username="Екатарина Козловцева" gitlink="https://github.com/KateKozlovtseva" maillink="ea.kozlovtseva@physics.msu.ru" telink="@Ko-cat" />
      <MembersTableRow photoUrl="#" username="Екатарина Козловцева" gitlink="https://github.com/KateKozlovtseva" maillink="ea.kozlovtseva@physics.msu.ru" telink="@Ko-cat" />
      <MembersTableRow photoUrl="#" username="Екатарина Козловцева" gitlink="https://github.com/KateKozlovtseva" maillink="ea.kozlovtseva@physics.msu.ru" telink="@Ko-cat" />
      <MembersTableRow photoUrl="#" username="Екатарина Козловцева" gitlink="https://github.com/KateKozlovtseva" maillink="ea.kozlovtseva@physics.msu.ru" telink="@Ko-cat" />
    </table>
  );
}

function MembersTableRow(props) {
  return (
    <tr className="member-row">
      <td className="avatar-td">
        <div className="member-avatar-wrapper">
          <img className="member-avatar-image" src={props.photoUrl} alt="" />
        </div>
      </td>
      <td>{props.username}</td>
      <td>
        <a href="#">
          <FontAwesomeIcon class="contacts-img" id="git" icon={faGithub} />
          <p className="member-link">{props.gitlink}</p>
        </a>
      </td>
      <td>
        <a href="#">
          <FontAwesomeIcon class="contacts-img" id="mail" icon={faEnvelope} />
          <p className="member-link">{props.maillink}</p>
        </a>
      </td>
      <td>
        <a href="#">
          <FontAwesomeIcon class="contacts-img" id="telegram" icon={fab, faTelegram} />
          <p className="member-link">{props.telink}</p>
        </a>
      </td>
    </tr>
  );
}
