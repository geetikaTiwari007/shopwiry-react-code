import React, { useEffect } from 'react';

//load components
import SidebarItem from './sidebar_items/SidebarItem';

const Sidebar = props => {

  function handleCloseSideBarClickAction(e) {
    e.preventDefault();
    document.getElementById("mySidenav").style.width = "0";
  }

  useEffect(() => {
    document.getElementById("mySidenav").style.width = "0";
  });

  return (
    <div style={{
      zIndex: "999"
    }} className="sidemenuMainWrapper">

      <div id="mySidenav" className="sidenav">

        <div className="sideMenuCrossWrapper">
          <a href="/" className="closebtn" onClick={(e) => handleCloseSideBarClickAction(e)}>×</a>
        </div>

        <div className="sideMenuWrapper">
          <ul>
            {
              props.navItems.map((item, index) => <SidebarItem key={index + item.name} {...item} />)
            }
          </ul>
        </div>

      </div>

    </div>
  );
}

export default Sidebar;