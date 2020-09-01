import React from "react";

import ProductItem from "../../../common/products/ProductItems/ProductItem";

const AllProducts = (props) => {
  return (
    props.data.length > 0 && (
      <div className="homeAllProductsSecWrapper">
        <div className="homeAllProductsRowWrapper">
          <div className="row">
            <div className="col-12">
              <div className="homeSecTitleWrapper">
                <div className="homeTitleText">
                  All Products
                  <div className="homeTitleBdr"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="homeAllProductsWrapper">
          <div className="row">
            {props.data.map((product, index) => (
              <ProductItem key={index + +new Date()} {...product} />
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default AllProducts;
