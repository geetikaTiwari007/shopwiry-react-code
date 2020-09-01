import React from 'react';
import {Link} from 'react-router-dom';

const OfferITem = props => {
  return (
    <div className="col-xl-4 col-lg-4 col-md-4 col-sm-4 col-12">
      <div className="productContentWrapper">
        <a href="javascript:void(0)">
          <div className="productContentSubWrapper">

            <div className="productOfferTagWrapper">
              <div className="productOfferTagSubWrapper">
                <div className="productOfferPriceTextWrapper">
                  <div className="productOfferPriceText"><div className="productPercentageText">20%</div><div className="productOffText"> Off</div></div>
                </div>
              </div>
            </div>

            <div className="productImgWrapper">
              <img src="https://via.placeholder.com/337x225.png" className="img-fluid" alt="product" />
                                            </div>

              <div className="productTitle">
                Sofa Set Pair
                                            </div>

              <div className="productPriceWithIconsWrapper">
                <div className="productPriceSec">

                  <div className="productPrice">
                    <span><i className="fa fa-usd" aria-hidden="true"></i></span><span>120.00</span>
                  </div>

                </div>
                <div className="productIconSec">

                  <span><img src="./images/whatsapp.png" className="img-fluid" alt="whatsapp" /></span>
                    <span><img src="./images/share.png" className="img-fluid" alt="share" /></span>

                                                </div>
                                            </div>



                </div>
                                    </a>
            </div>


          </div>
  );
}

export default OfferITem;