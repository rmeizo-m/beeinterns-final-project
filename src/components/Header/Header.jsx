import React from 'react';
import './header.css';
import logo from '../../assets/header/logo1.png';
import bar from '../../assets/header/hotdog.svg';
// 
const Header = () => {
	return (
		<div className="header">
            <div className="container">
				
					<div className="logo-wrap">
						<img class="bar" src={bar} alt="bar"/>
						<img class="logo" src={logo} alt="logo"/>
					</div>

					<div className="title-menu">
						Beeinterns Level1
					</div>

					<ul className="header-menu">
						<li><a className="header-menu-item" href="news"> Новости</a></li>
						<li><a className="header-menu-item" href="members"> Участники</a></li>
						<li><a className="header-menu-item" href="teachers"> Менторы</a></li>
						<li><a className="header-menu-item" href="profile"> Профиль</a></li>
					</ul>

				
            </div>
		</div>


	);
}
export default Header;


