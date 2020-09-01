import React from 'react';
import { NavLink } from 'react-router-dom';

const QuickLinkItem = props => {
  return (
    <li>
      <NavLink exact to={props.link}>{props.name}</NavLink>
    </li>
  );
}

export default QuickLinkItem;