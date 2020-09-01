import React from 'react';

const ProductHeader = props => {
  return (
    <div className="productsPart1">
      <div className="row">
        <div className="col-xl-8 col-lg-8 col-md-7 col-sm-5 col-12">
          <div className="allProductsText">
            All Products
          </div>
        </div>

        <div className="col-xl-4 col-lg-4 col-md-5 col-sm-7 col-12">
          <div className="productSearchSortWrapper">
            <div className="searchProductsWrapper">
              <form name="browseproduct" className="searchProducts" >
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="Search Product" 
                  name="search"
                  onChange={props.handleSearchEvent}
                />
              </form>
            </div>
            <div className="sortProductsWrapper">
              <select 
                className="form-control" 
                name="sortProduct" 
                id="sortProduct"
                onChange={props.handleSortEvent}
              >
                <option value="">Sort by</option>
                <option value="price_asc">Price low to high</option>
                <option value="price_desc">Price high to low</option>
                <option value="date_asc">By asc date</option>
                <option value="date_desc">By desc date</option>
              </select>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default ProductHeader;