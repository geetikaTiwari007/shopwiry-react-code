import React from 'react';
import { NavLink } from 'react-router-dom';

import OrderSummary from './order_summary/OrderSummary';
import CustomerInformation from './customer_information/CustomerInformation';

import './Checkout.css';

const Checkout = props => {
  return (
    <div className="checkoutWrapper">
      <div className="checkoutSubWrapper">
        <div className="container">

          <div className="checkoutContinueShopRowWrapper">
            <div className="row">
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
                <div className="checkoutContinueShopBtnWrapper">
                  <NavLink to="all-products">
                    <span><i className="fa fa-angle-left" aria-hidden="true"></i></span>
                    <span>Continue shopping</span>
                  </NavLink>
                </div>
              </div>
            </div>
          </div>

          <div className="checkoutFormRowWrapper">
            <div className="row">
              <OrderSummary />
              <CustomerInformation />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout;