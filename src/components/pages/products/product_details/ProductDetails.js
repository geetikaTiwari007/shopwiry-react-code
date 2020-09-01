import React from 'react';
import Loader from 'react-loader-spinner';

//load helpers
import Utility from '../../../../helpers/Utility';

//load components
import ProductDetailsContainer from '../../../common/products/product_details/ProductDetails';

class ProductDetails extends React.Component {

  state = {
    sliderImages: [],
    similarProducts: [],
    productDescription: {},
    loading: true,
  }

  getData = async (_) => {
    let requestBodyData = {
      type: 'post',
      url: 'sellerapi/product/detail',
      data: {
        // url: 'myshop.shopwiry.com',
        url: 'shop6.eprepguru.com',
        id: this.props.match.params.id,
      }
    };
    console.log("Inside product Details");
    let result = await Utility.sendRequest(requestBodyData);
    console.log("Result in product details",result);
    if (result.success === Utility.STATUS_SUCCESS) {

      let data = result.data;

      let sliderImages = data.slider_images;
      let similarProducts = data.similar_products;
      let productDescription = {
        name: data.name,
        link: data.link,
        price: data.price,
        description: data.description,
        discountedPrice: data.discountedPrice,
      };

      document.title = data.name; 
      if(document.querySelectorAll('meta[name="description"]').length > 1) {
        document.querySelectorAll('meta[name="description"]')[0].remove();
      }
      document.querySelector('meta[name="description"]').setAttribute("content", data.description);

      this.setState({
        sliderImages,
        similarProducts,
        productDescription,
        loading: false,
      });
    } else {
      this.setState({
        loading: false,
      });
      this.props.history.push('/404')
    }
  }

  async componentDidMount() {
    await this.getData();
  }

  async componentDidUpdate(prevProps) {
    if(prevProps.match.params.id !== this.props.match.params.id){
      this.setState({
        loading: true
      });
      await this.getData();  
    }
  }

  render() {
    return (
      <React.Fragment>
        {
          this.state.loading
            ? <Loader className='loaderBox' type="TailSpin" color="#00BFFF" timeout={10000} />
            : (
              <ProductDetailsContainer {...this.state} />
            )
        }
      </React.Fragment>
    );
  }
}

export default ProductDetails;