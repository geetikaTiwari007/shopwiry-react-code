import React from "react";
import { NavLink } from "react-router-dom";

import Utility from "../../../../helpers/Utility";

const ProductItem = (props) => {
  let mediaLinks = Utility.getMediaLinks(props.link);

  return (
    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-6 col-12">
      <div className="productContentWrapper">
        <div className="productContentSubWrapper">
          {+props.discount > 0 ? (
            <div className="productOfferTagWrapper">
              <div className="productOfferTagSubWrapper">
                <div className="productOfferPriceTextWrapper">
                  <div className="productOfferPriceText">
                    <div className="productPercentageText">
                      {props.discount}%
                    </div>
                    <div className="productOffText"> Off</div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}

          <div className="productImgWrapper">
            <NavLink to={props.link}>
              <img src={props.image} className="img-fluid" alt="product" />
            </NavLink>
          </div>
          <div className="productTitle">
            <NavLink to={props.link} title={props.name}>
              {props.name}
            </NavLink>
          </div>

          <div className="productPriceWithIconsWrapper">
            <div className="productPriceSec">
              <div className="productPrice">
                <span>
                  <i className="fa fa-inr" aria-hidden="true"></i>
                </span>
                {+props.discount > 0 ? (
                  <span>
                    {props.discountedPrice}(<strike>{props.price}</strike>)
                  </span>
                ) : (
                  <span>{props.price}</span>
                )}
              </div>
            </div>

            <div className="productIconSec">
              <span className="badge badge-pill badge-light">
                <a href={mediaLinks.whatsappShareLink} target="_blank">
                  <img
                    src="/images/whatsapp.png"
                    className="img-fluid"
                    alt="whatsapp"
                  />
                  <span>Seller</span>
                </a>
              </span>
              <span>
                <a href={mediaLinks.shareLink} target="_blank">
                  <img
                    src="/images/share.png"
                    className="img-fluid"
                    alt="share"
                  />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
