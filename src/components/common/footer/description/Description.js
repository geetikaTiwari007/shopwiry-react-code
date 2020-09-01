import React from 'react';
import {NavLink} from 'react-router-dom';

import Logo from '../../assets/images/logo.png';

const Description = props => {
	return (
		<div className="col-xl-4 col-lg-4 col-md-5 col-sm-12 col-12">
			<div className="">
				<div className="footLogoWrapper">
					{
						props.logo
							? (
								<NavLink to="/">
									<img src={Logo} className="img-responsive" alt="logo" />
								</NavLink>
							) : (
								<span>
									{props.logoText}
								</span>
							)
					}
				</div>
				<div className="footerSmallText">
					{props.description}
				</div>
			</div>

		</div>
	);
}

export default Description;