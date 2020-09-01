import React from 'react';

//load components
import QuickLinkItem from "./quick_link_items/QuickLinkItem";

const QuickLink = props => {
	return (
		<div className="col-xl-8 col-lg-7 col-md-5 col-sm-6 col-12">
			<div className="footerMenuWrapper">
				<div className="footerQuickLinkText">
					Quick Links
					<div className="footerQuickLinkBdr"></div>
				</div>
				<div className="footerMenuUlWrapper">
					<ul>
						{
							props.data.map((item, index) => <QuickLinkItem key={item.name + index} link={item.link} name={item.name} />)
						}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default QuickLink;