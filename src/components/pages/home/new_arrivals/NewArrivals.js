import React from "react";

import ProductItem from "../../../common/products/ProductItems/ProductItem";

const NewArrivals = (props) => {
  return (
    props.data.length > 0 && (
      <div className="homeNewArrivalSecWrapper">
        <div className="homeNewArrivalRowWrapper">
          <div className="row">
            <div className="col-12">
              <div className="homeSecTitleWrapper">
                <div className="homeTitleText">
                  New Arrival
                  <div className="homeTitleBdr"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="homeNewArrivalProductWrapper">
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

export default NewArrivals;
