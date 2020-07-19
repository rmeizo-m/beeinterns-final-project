import React, { Component } from 'react';
import './Members.scss';
import enot from '../../assets/enot/enot1.png';
import MemberTable from '../../components/Members/MemberTable';


export default class Members extends Component {
  render() {
    return (<>
      <div class="table-area">

        <MemberTable></MemberTable>

        <div class="member-enot-wrapper">
          <img class ="member-enot" id="enot1" src={enot} alt="" />
        </div>
      </div>
    </>);
  }
}
