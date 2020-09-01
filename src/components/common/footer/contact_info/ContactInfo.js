import React from 'react';

import CopyrightItem from './contact_info_items/CopyrightItem';

const ContactInfo = props => {
	return (
		<div className="col-xl-4 col-lg-5 col-md-7 col-sm-6 col-12">
			<div className="footerContactInfo">
				<ul>
					{
						props.data.map((item, index) => <CopyrightItem key={index+item.value} {...item} />)
					}
				</ul>
			</div>
		</div>
	);
}

export default ContactInfo;