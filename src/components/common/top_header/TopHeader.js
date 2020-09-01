import React from 'react';

import './TopHeader.css';

const TopHeader = props => {
	return (
		<div className={props.data.description ? "headerTopInfoWrapper" : "headerTopInfoWrapper d-none"}>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="headerAboveInfo">
							{props.data.description}
						</div>
					</div>

				</div>
			</div>
		</div>
	);

}

export default TopHeader;