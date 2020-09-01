import React from "react";

//load components
import ProductItem from "../../../common/products/ProductItems/ProductItem";

const OffersSection = (props) => {
  return (
    props.data && (
      <div className="homeOfferProductWrapper">
        <div className="homeOfferProductSubWrapper">
          <div className="row">
            {props.data.map((product, index) => (
              <ProductItem
                key={index + product.name}
                showOffersBox={true}
                {...product}
              />
            ))}
          </div>
        </div>
      </div>
    )
  );
};

export default OffersSection;
