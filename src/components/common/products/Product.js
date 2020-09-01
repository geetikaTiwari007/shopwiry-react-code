import React from 'react';

//load components
import ProductItem from './ProductItems/ProductItem';
import ProductHeader from './product_header/ProductHeader';

//load css file
import './Product.css';
import '../assets/css/product_item.css';

const ProductContainer = props => {
  return (
    <div className="productsWrapper">
      <div className="container">
        <ProductHeader 
          handleSortEvent={props.handleSortEvent} 
          handleSearchEvent={props.handleSearchEvent} 
        />
        <div className="productsPart2">
          <div className="row">
            {
              props.data.map(
                (row, index) => 
                  <ProductItem 
                    key={index + row.name} 
                    {...row}
                  />)
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductContainer;