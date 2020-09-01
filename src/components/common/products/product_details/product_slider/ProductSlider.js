import React from 'react';

import ImageGallery from 'react-image-gallery';

let isMobile = window.outerWidth <= 576;

const ProductSlider = props => {
  
  return (
    <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
      <div className="productDetailSliderWrapper">
        {
          props.data
            ? <ImageGallery
            items={props.data}
            showNav={false}
            showBullets={true}
            showPlayButton={false}
            thumbnailPosition="left"
            showThumbnails={isMobile ? false : true}
            slideOnThumbnailOver={true}
            showFullscreenButton={true}
            disableThumbnailScroll={false}
          /> : ""
        }
      </div>
    </div>
  );
}

export default ProductSlider;