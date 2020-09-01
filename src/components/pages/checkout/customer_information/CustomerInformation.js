import React from 'react';
import { NavLink } from 'react-router-dom';
import ValidForm from 'react-valid-form-component';

const CustomerInformation = props => {

  const onSubmit = (form, data, valid) => {
    console.log(form, data, valid)
    const requestOptions = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    };

    fetch("https://httpbin.org/post", requestOptions)
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error(`Response Error, Status Code : ${response.status}`);
        }
      })
      .then(json => {
        console.log(json);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  return (
    <div className="col-xl-8 col-lg-8 col-md-6 col-sm-12 col-12">
      <div className="checkoutFrmMainWrapper checkoutBgWhite">

        <div className="checkoutCustomerInfoText">
          Customer Information
        </div>

        <div className="checkoutFrmContentWrapper">
          <ValidForm
            className="checkoutFrm"
            onSubmit={(form, data, valid) => onSubmit(form, data, valid)}
          >
            <div className="checkoutFrmRowWrapper">
              <div className="row">

                <div className="col-12">
                  <div className="form-group">
                    <label htmlFor="user_email">Email</label>
                    <input
                      className="form-control"
                      type="email"
                      placeholder="Email Address"
                      id="user_email"
                      name="user_email"
                      defaultValue=""
                      autoComplete="off"
                      required
                    />
                    <div className="customInfoMsg">
                      <span>Already have an account? </span>
                      <span><NavLink to="/">Sign in here</NavLink></span>
                    </div>
                  </div>
                </div>

                <div className="col-6">
                  <div className="form-group">
                    <label htmlFor="user_first_name">First Name</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="First Name"
                      id="user_first_name"
                      name="user_first_name"
                      defaultValue=""
                      autoComplete="off"
                      required
                    />
                  </div>
                </div>

                <div className="col-6">
                  <div className="form-group">
                    <label htmlFor="user_last_name">Last Name</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Last Name"
                      id="user_last_name"
                      name="user_last_name"
                      defaultValue=""
                      autoComplete="off"
                      required
                    />
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-group">
                    <label htmlFor="user_city">City</label>
                    <select 
                      className="form-control"
                      name="user_city" 
                      id="user_city"
                      required
                    >
                      <option value="">Select City</option>
                    </select>
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-group">
                    <label htmlFor="user_phone_number">Phone Number</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Phone Number"
                      id="user_phone_number"
                      name="user_phone_number"
                      defaultValue=""
                      autoComplete="off"
                      required
                    />
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-group">
                    <label htmlFor="user_address">Address</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Address"
                      id="user_address"
                      name="user_address"
                      defaultValue=""
                      autoComplete="off"
                      required
                    />
                  </div>
                </div>

                <div className="col-12">
                  <div className="form-group">
                    <label htmlFor="user_post_code">Post Code</label>
                    <input
                      className="form-control"
                      type="text"
                      placeholder="Post Code"
                      id="user_post_code"
                      name="user_post_code"
                      defaultValue=""
                      autoComplete="off"
                      required
                    />
                  </div>
                </div>

                <div className="col-12">
                  <div className="checkoutSaveAndContinueBtnWrapper">
                    <button type="submit">Save &amp; Continue</button>
                  </div>
                </div>

              </div>
            </div>
          </ValidForm>
        </div>
      </div>
    </div>
  )
}

export default CustomerInformation;