import React from 'react';

//Load Components
import Description from './description/Description';

import QuickLink from './quick_links/QuickLink';

import ContactInfo from './contact_info/ContactInfo';

import CopyRight from './copyright_section/CopyRight';

//load css files
import './Footer.css';

const Footer = props => {
	return (
		<div className="footerMainDiv">
			<div className="footerSubDiv">
				<div className="container">
					<div className="row">
						<Description {...props.data.description} />
						<div className="col-xl-8 col-lg-8 col-md-7 col-sm-12 col-12">
							<div className="footerRightContentWrapper">
								<div className="row">
									<QuickLink data={props.data.quickLinks} />
									<ContactInfo data={props.data.contactInfo} />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<CopyRight copyrightText={props.data.copyrightText} />
		</div>
	);
}

export default Footer;