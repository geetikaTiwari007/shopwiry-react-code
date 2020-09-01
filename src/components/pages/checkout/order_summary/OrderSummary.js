import React from 'react';

const OrderSummary = props => {
  return (
    <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 col-12">
      <div className="checkoutOrderSummaryWrapper checkoutBgWhite">
        <div className="checkoutOrderSummaryContentWrapper">
          
          <div className="checkoutOrderSummarTextWrapper">
            <span>
              Order Summary
            </span>
            <span>1 item in cart</span>
          </div>

          <div className="checkoutAllProductWrapper">
            <div className="checkoutProductDetailWrapper checkoutProDetialDisplayTable">
              <span className="checkoutProDetialDisplayTableCell">
                <div className="checkoutProductImgWrapper">
                  <img src="https://via.placeholder.com/106x108.png" className="img-fluid" alt="product" />
                </div>
              </span>
              <span className="checkoutProDetialDisplayTableCell">
                <div className="checkoutProductTitle">
                  <span title="MEN'S ADIDAS SHOES">MEN'S ADIDAS SHOES</span>
                  <span><i className="fa fa-trash-o" aria-hidden="true"></i></span>
                </div>
                <div className="checkoutProductPrice">
                  <span><i className="fa fa-usd" aria-hidden="true"></i></span><span>3500</span>
                </div>
                <div className="checkoutProductQtyWrapper">
                  <select className="form-control checkoutProductQty" name="checkoutProductQty" id="checkoutProductQty">
                    <option value="">1</option>
                  </select>
                </div>
              </span>
            </div>
          </div>

          <div className="checkoutPaymentSummaryWrapper">
            
            <div className="checkoutSubTotalWrapper checkoutPaymentSummaryDisplayTable">
              <span>
                Subtotal
              </span>
              <span>
                <i className="fa fa-usd" aria-hidden="true"></i>3500
              </span>
            </div>
            
            <div className="checkoutTaxTotalWrapper checkoutPaymentSummaryDisplayTable">
              <span>
                Taxes
              </span>
              <span>
                <i className="fa fa-usd" aria-hidden="true"></i>250
              </span>
            </div>

            <div className="checkoutTotalAmtWrapper checkoutPaymentSummaryDisplayTable">
              <span>
                Total
              </span>
              <span>
                <i className="fa fa-usd" aria-hidden="true"></i>3750
              </span>
            </div>

          </div>

          <div className="checkoutPromoCodeWrapper">
            <div className="checkoutPromoCodeText">
              Have a Promocode?
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default OrderSummary;