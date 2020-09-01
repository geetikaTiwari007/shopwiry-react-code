import React from "react";
import { Link } from "react-router-dom";

//load css
import "./404.css";

const NotFound = (props) => {
  return (
    <div className="errorPageWrapper">
      <div className="errorPageSubWrapper">
        <div className="errorPageContentWrapper">
          <div className="errorPageSubContentWrapper">
            <h1>
              4<span>0</span>
              <b>4</b>!
            </h1>
            <h3>Oops! Shop not published</h3>
            <p>If you are shop owner, Please publish shop from Shopwiry app.</p>
            <p>If you are customer, Please contact to shop owner.</p>
            {/* <div className="errorPageHomePageBtnWrapper">
              <Link to=".">Return Home Page</Link>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
