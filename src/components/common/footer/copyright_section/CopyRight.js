import React from 'react';

const CopyRight = props => {
	return (
		<div className="footerCopyText"> 
			<span dangerouslySetInnerHTML={{__html: props.copyrightText}}></span>
		</div>
	);
}

export default CopyRight;