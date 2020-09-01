import React from 'react';

//load components
import ProductSlider from './product_slider/ProductSlider';
import SimilarProducts from './similar_products/SimilarProducts';
import ProductDescription from './product_description/ProductDescription';

//load css
import './ProductDetails.css';

import "react-image-gallery/styles/css/image-gallery.css";

const ProductDetails = props => {
  return (
    <div className="productDetailWrapper">
      <div className="productDetailSubWrapper">
        <div className="container">
          <div className="productDetailContentWrapper">
            <div className="row">
              <ProductSlider data={props.sliderImages} />
              <ProductDescription data={props.productDescription} />
            </div>
          </div>
          <SimilarProducts data={props.similarProducts} />
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;