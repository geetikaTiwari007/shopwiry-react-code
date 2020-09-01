import React from "react";
import { Link, withRouter } from "react-router-dom";

//load helpers
import Utility from "../../../../../helpers/Utility";

const SidebarItem = (props) => {
  let pageURL = window.location.pathname;
  let mediaLinks = Utility.getMediaLinks(pageURL);

  function handleToggleSubMenu(e) {
    e.preventDefault();
    e.target.childNodes[1].childNodes[0].classList.toggle("fa-angle-right");
    e.target.childNodes[1].childNodes[0].classList.toggle("fa-angle-down");
    document
      .getElementById("sideBarProductDp")
      .classList.toggle("small_show_product_dp");
  }

  function handleSubMenuItemClick(e) {
    e.preventDefault();
    localStorage.setItem("product_category", e.target.dataset.item_name);
    props.history.push(e.target.getAttribute("href"));
  }

  return (
    <React.Fragment>
      {props.categories ? (
        <li>
          <a
            href="/"
            role="menuitem"
            className="sideBarProductDpText cursor-pointer"
            onClick={(e) => handleToggleSubMenu(e)}
          >
            {props.name}
            <span className="pull-right">
              <i className="fa fa-angle-right" aria-hidden="true"></i>
            </span>
          </a>
          <div
            id="sideBarProductDp"
            className="product-dropdown-menu dropdown-content"
          >
            <ul>
              <li>
                <a href={props.link} onClick={handleSubMenuItemClick}>
                  All
                </a>
              </li>
              {props.categories.map((subItem, index) => (
                <li key={index + +new Date()}>
                  <a
                    href={props.link + "?category=" + subItem}
                    onClick={handleSubMenuItemClick}
                    data-item_name={subItem}
                  >
                    {subItem}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </li>
      ) : (
        <li className="sidebarMenuBtnWrapper">
          <span>
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
              <Link to={props.link}>{props.name}</Link>
            )}
          </span>
        </li>
      )}
    </React.Fragment>
  );
};

export default withRouter(SidebarItem);
