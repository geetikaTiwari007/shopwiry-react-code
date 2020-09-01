import React from 'react';

import ProductItem from '../../ProductItems/ProductItem';

const SimilarProducts = props => {
  return (
    <div className="productDetailYouMayAlsoLikeSecWrapper">

      <div className="productDetailYouMayAlsoLikeRowWrapper">
        <div className="row">
          <div className="col-12">

            <div className="productDetailYouMayAlsoLikeText">
              You May Also like
            </div>

          </div>
        </div>
      </div>

      <div className="productDetailYouMayAlsoLikeProductRowWrapper">
        <div className="row">
          {
            props.data.map((product, index) => <ProductItem key={index + +new Date()} {...product} />)
          }
        </div>
      </div>

    </div>
  );
}

export default SimilarProducts;