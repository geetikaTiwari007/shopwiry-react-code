import React from 'react';

const ContactInfoItem = props => {
  return (
    <li>
      <div className="footerContactInfoContetnWrapper">
        <span>
          <i className={props.icon} aria-hidden="true"></i>
        </span>
        <span>{props.value}</span>
      </div>
    </li>
  );
}

export default ContactInfoItem;