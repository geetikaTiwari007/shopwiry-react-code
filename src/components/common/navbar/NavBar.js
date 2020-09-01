import React from 'react';
import { NavLink } from 'react-router-dom';

//load components
import NavItem from "./nav_items/NavItem";

//load images
import LogoImg from '../assets/images/logo.png';

import './NavBar.css';

const NavBar = props => {

	function handleSideBarClickAction() {
		document.getElementById("mySidenav").style.width = "260px";
	}

	return (
		<nav className="navbar navbar-expand-lg navbar-light header">
			<div className="container">

				<div className="headerRowWrapper headerFullWidth">
					<div className="row">
						<div className="col-xl-2 col-lg-2 col-md-3 col-sm-8 col-8">

							<div className="logoWrapper">
								{
									props.data.logo
										? (
											<NavLink className="navbar-brand" to="/">
												<img src={LogoImg} className="img-responsive" alt="logo" />
											</NavLink>
										) : (
											<span className='navbar-brand'>
												{props.data.logoText}
											</span>
										)
								}
							</div>

						</div>

						<div className="col-xl-10 col-lg-10 col-md-9 col-sm-4 col-4">

							<button 
								className="navbar-toggler navBarToggler" 
								type="button" 
								data-toggle="collapse" 
								aria-controls="navbarResponsive" 
								aria-expanded="false" 
								aria-label="Toggle navigation"
								onClick={() => handleSideBarClickAction()} 
							>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
							</button>

							<div className="collapse navbar-collapse" id="navbarResponsive">
								<ul className="navbar-nav ml-auto headerUlWrapper">
									{
										props.data.navBarItems.map((item, index) => <NavItem {...item} key={index+item.name} />)
									}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default NavBar;