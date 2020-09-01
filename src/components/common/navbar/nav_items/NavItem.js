import React from "react";
import { NavLink, withRouter } from "react-router-dom";

//load helpers
import Utility from "../../../../helpers/Utility";

const NavItem = (props) => {
  let pageURL = window.location.pathname;
  let mediaLinks = Utility.getMediaLinks(pageURL);

  function hideNavBar() {
    if (document.getElementById("mySidenav").style.width === "260px") {
      document.getElementById("mySidenav").style.width = "0px";
    }
    document.getElementById("all-product-nav-item").classList.remove("active");
  }

  function handleSubMenuItemClick(e) {
    e.preventDefault();
    document
      .getElementById("navbarDropdown")
      .nextSibling.classList.remove("show");
    props.history.push(e.target.getAttribute("href"));
    props.history.location.test = e.target.dataset.item_name;
    if (
      !document
        .getElementById("all-product-nav-item")
        .classList.contains("active")
    ) {
      document.getElementById("all-product-nav-item").classList.add("active");
    }
  }

  function handleOnClickEvent(event) {
    event.preventDefault();
    let nextDropDownEle = event.target.nextSibling;
    let nextDropDownEleClasses = nextDropDownEle.classList;
    if (nextDropDownEleClasses.contains("show")) {
      nextDropDownEleClasses.remove("show");
    } else {
      nextDropDownEleClasses.add("show");
    }
  }

  return (
    <React.Fragment>
      {props.categories ? (
        <li className="nav-item dropdown" id="all-product-nav-item">
          <a
            href="/"
            className="nav-link dropdown-toggle cursor-pointer"
            role="menuitem"
            id="navbarDropdown"
            data-toggle="dropdown"
            onClick={handleOnClickEvent}
          >
            {props.name}
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <div className="navBarAllProductsDesktopRowWrapper">
              <ul>
                <li>
                  <div className="navBarDesktopProductContentWrapper">
                    <a href={props.link} onClick={handleSubMenuItemClick}>
                      All
                    </a>
                  </div>
                </li>
                {props.categories.map((subItem, index) => (
                  <li key={index + +new Date()}>
                    <div className="navBarDesktopProductContentWrapper">
                      <a
                        href={props.link + "?category=" + subItem}
                        onClick={handleSubMenuItemClick}
                        data-item_name={subItem}
                      >
                        {subItem}
                      </a>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </li>
      ) : (
        <li
          className={
            "nav-item " +
            (props.icon ? "menuBtnWrapper menuShareBtnWrapper" : "")
          }
        >
          {props.icon ? (
            <a
              target="_blank"
              href={
                props.icon.match(/whatsapp/g) !== null
                  ? mediaLinks.whatsappShareLinkShop
                  : mediaLinks.shareLinkShop
              }
            >
              <img src={props.icon} alt={props.name} />
            </a>
          ) : (
            <NavLink
              exact
              to={props.link}
              className="nav-link"
              onClick={() => hideNavBar()}
            >
              {props.name}
            </NavLink>
          )}
        </li>
      )}
    </React.Fragment>
  );
};

export default withRouter(NavItem);
