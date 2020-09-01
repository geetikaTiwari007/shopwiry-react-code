//load dependencies
import React, { Suspense } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Loader from "react-loader-spinner";

//load helper files
import Utility from "./helpers/Utility";

//Load Packages css
import "bootstrap/dist/css/bootstrap.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./components/pages/assets/css/common.css";

//Load Components
const Layout = React.lazy(() =>
  import(
    /* webpackChunkName: "layout" */ "./components/common/container/Layout"
  )
);

const Home = React.lazy(() =>
  import(/* webpackChunkName: "home" */ "./components/pages/home/Home")
);

const Products = React.lazy(() =>
  import(
    /* webpackChunkName: "product" */ "./components/pages/products/Products"
  )
);

const AboutUs = React.lazy(() =>
  import(
    /* webpackChunkName: "about-us" */ "./components/pages/about_us/AboutUs"
  )
);

const FAQ = React.lazy(() =>
  import(/* webpackChunkName: "faq" */ "./components/pages/faq/FAQ")
);

const ContactUs = React.lazy(() =>
  import(
    /* webpackChunkName: "contact-us" */ "./components/pages/contact_us/ContactUs"
  )
);

const Checkout = React.lazy(() =>
  import(
    /* webpackChunkName: "checkout" */ "./components/pages/checkout/Checkout"
  )
);

const ProductDetails = React.lazy(() =>
  import(
    /* webpackChunkName: "product-details" */ "./components/pages/products/product_details/ProductDetails"
  )
);

const NotFoundPage = React.lazy(() =>
  import(
    /* webpackChunkName: "product-details" */ "./components/pages/error_pages/not_found/404"
  )
);

class App extends React.Component {
  state = {
    layoutData: { loading: true },
  };

  async componentDidMount() {
    let requestBodyData = {
      type: "post",
      url: "sellerapi/layout/get",
      
      data: {
        //url: 'myshop.shopwiry.com',
        url: 'shop6.eprepguru.com',
      },
    };

    let result = await Utility.sendRequest(requestBodyData);
    console.log("result::",result)
    if (result.success === Utility.STATUS_SUCCESS) {
      let data = result.data;
      let layoutData = JSON.parse(data.layoutData);
      layoutData["loading"] = false;

      document.title = layoutData.menu.logoText;
      document
        .querySelector('meta[name="description"]')
        .setAttribute("content", layoutData.footer.description.description);

      localStorage.setItem(
        "seller_contact_number",
        layoutData.footer.contactInfo[1].value
      );

      this.setState({
        layoutData,
      });
    } else {
      console.log("inside Else");
      this.props.history.push("/404");
    }
  }

  componentDidCatch(error, info) {
    console.log("From Error log:");
    console.log(error, info);

    // alert('Something went wrong. Please try again.');
  }

  render() {
    return (
      <Suspense
        fallback={
          <Loader className="loaderBox" type="TailSpin" color="#00BFFF" />
        }
      >
        <Switch>
          <Route
            exact={true}
            path="/"
            render={(props) => (
              <Layout
                sliderImg="slider1.png"
                data={this.state.layoutData}
                showBanner={true}
              >
                <Home {...props} />
              </Layout>
            )}
          />
          <Route
            exact={true}
            path="/all-products"
            render={(props) => (
              <Layout data={this.state.layoutData} showBanner={true}>
                <Products {...props} />
              </Layout>
            )}
          />
          <Route
            exact={true}
            path="/about-us"
            render={(props) => (
              <Layout data={this.state.layoutData} showBanner={false}>
                <AboutUs {...props} />
              </Layout>
            )}
          />
          <Route
            exact={true}
            path="/faq"
            render={(props) => (
              <Layout data={this.state.layoutData} showBanner={false}>
                <FAQ {...props} />
              </Layout>
            )}
          />
          <Route
            exact={true}
            path="/contact-us"
            render={(props) => (
              <Layout data={this.state.layoutData} showBanner={false}>
                <ContactUs {...props} data={this.state.layoutData} />
              </Layout>
            )}
          />
          <Route
            exact={true}
            path="/checkout"
            render={(props) => (
              <Layout
                bgClass="checkoutBg "
                data={this.state.layoutData}
                showBanner={false}
              >
                <Checkout {...props} />
              </Layout>
            )}
          />
          <Route
            exact={true}
            path="/product-details/:id"
            render={(props) => (
              <Layout data={this.state.layoutData} showBanner={false}>
                <ProductDetails {...props} />
              </Layout>
            )}
          />
          <Route exact={true} path="/404" component={NotFoundPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Suspense>
    );
  }
}

export default withRouter(App);
