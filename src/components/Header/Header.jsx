import React from 'react';
import { useRouteMatch, useLocation } from 'react-router-dom';
import './header.css';
import logo from '../../assets/header/logo1.png';
import bar from '../../assets/header/hotdog.svg';
import cross from '../../assets/header/cross.svg';

const menuItems = [
  {link: "/news", title: "Новости"},
  {link: "/members", title: "Участники"},
  {link: "/teachers", title: "Менторы"},
  {link: "/profile", title: "Профиль"}
];

const Header = () => {
  const [menuVisible, setMenuVisible] = React.useState(false);
  const loc = useLocation();

  function toggleMenu() {
    setMenuVisible(!menuVisible);
  }

  function MenuItem(item) {
      const className = item.link == loc.pathname? "header-menu-selection":"header-menu-itom";
      return <li class="header-menu-link"><a className= {className} active={item.link == loc.pat} href={item.link}>{item.title}</a></li>
  }

  return (
  <div className="header">
    <div className="container">

      <div className="logo-wrap">
        <a class= "bar-cross" onClick={toggleMenu}>
          {menuVisible?
            <img className="cross" src={cross} alt="cross" />:
            <img className="bar" src={bar} alt="bar" />
          }
        </a>
        <img className="logo" src={logo} alt="logo" />
      </div>

      <div className="title-menu">
        {(menuItems.find(t => t.link == loc.pathname) || {title: 'Unknown page'}).title}
      </div>
      <ul className={menuVisible? "header-menu header-menu-open": "header-menu"}>
        {menuItems.map(MenuItem)}
      </ul>

      </div>
  </div>)
};
export default Header;
