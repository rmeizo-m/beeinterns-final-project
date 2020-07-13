import React from 'react';
import './header.modules.scss';

const Header = () => (
  <header>
    <div>Logo</div>
    <nav className="">
      <ul className="site-nav">
        <li>
          <a href="/news">Новости</a>
        </li>
        <li>
          <a href="/members">Участники</a>
        </li>
        <li>
          <a href="/teachers">Преподователи</a>
        </li>
        <li>
          <a href="/profile">Профиль</a>
        </li>
      </ul>
    </nav>
  </header>
);
export default Header;
