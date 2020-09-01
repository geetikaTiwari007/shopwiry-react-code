import React from 'react';

//load helpers
import Utility from '../../../../../helpers/Utility';

//load css
import '../../../assets/css/product_item.css';

const ProductDescription = props => {
  let mediaLinks = Utility.getMediaLinks(props.data.link);

  return (
    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
      <div className="productDetailContentWrapper">
        <div className="productDetailTitleText">
          {props.data.name}
        </div>
        <div className="productDetailPriceText">
          <i className="fa fa-inr" aria-hidden="true"></i>
          {
            +props.data.discount > 0
              ? (
                <React.Fragment>
                  <strike>{props.data.price}</strike> {props.data.discountedPrice}
                </React.Fragment>
              ) : props.data.price
          }
        </div>
        <div className="productDetailDescText">
          {props.data.description}
        </div>

        <div className="productDetailSellerAndShareBtnWrapper">
          <div className="connectToSellerBtnWrapper">
            <a href={mediaLinks.whatsappShareLink} target="_blank">Connect to Seller</a>
          </div>

          <div className="productDetailShareBtnWrapper">
            <a href={mediaLinks.shareLink}>
              <span><img src="/images/share.png" alt="share" /></span>
              <span>Share</span>
            </a>
          </div>
        </div>

      </div>

    </div>
  );
}

export default ProductDescription;