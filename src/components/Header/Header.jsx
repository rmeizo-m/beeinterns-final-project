import React from 'react';
import './header.css';
import logo from '../../assets/header/logo1.png';
import bar from '../../assets/header/hotdog.svg';
// 
const Header = () => {
	return (
	
	// 	<header>
	// 	<div>Logo</div>
	// 	<nav className="">
	// 		<ul className="site-nav">
	// 			<li><a href="news">Новости</a></li>
	// 			<li><a href="members">Участники</a></li>
	// 			<li><a href="teachers">Преподователи</a></li>
	// 			<li><a href="profile">Профиль</a></li>
	// 		</ul>
	// 	</nav>
	// </header>

	// <div class = "header">
		<div class="header">
            <div class="container">
				
					<div class="logo-wrap">
						<img class="bar" src={bar} />
						<img class="logo" src={logo} />
					</div>

					<div class="title-menu">
						Beeinterns Level1
					</div>

					<ul class="header-menu">
						<li><a class="header-menu-item" href="news"> Новости</a></li>
						<li><a class="header-menu-item" href="members"> Участники</a></li>
						<li><a class="header-menu-item" href="teachers"> Менторы</a></li>
						<li><a class="header-menu-item" href="profile"> Профиль</a></li>
					</ul>

				
            </div>
		</div>
        // </div>


	);
}
export default Header;


