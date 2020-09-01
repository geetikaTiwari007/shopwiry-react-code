import React from 'react';
import Loader from 'react-loader-spinner';

//load helpers
import Utility from '../../../helpers/Utility';

//load components
import AllProducts from './all_products/AllProducts';
import NewArrivals from './new_arrivals/NewArrivals';
import OffersContainer from './offer_section/Offers';

//load css
import './Home.css';
import '../../common/assets/css/product_item.css';

class Home extends React.Component {

	state = {
		allProducts: [],
		onSaleProducts: [],
		newArrivalProducts: [],
		loading: true,
	}

	async componentDidMount() {
		document.getElementsByClassName('carousel-slider')[0].style.zIndex = -1;

		let requestBodyData = {
			type: 'post',
			url: 'sellerapi/product/list',
			data: {
				// url: 'myshop.shopwiry.com',
				url: 'shop6.eprepguru.com',
			}
		};

		let result = await Utility.sendRequest(requestBodyData);
		if (result.success === Utility.STATUS_SUCCESS) {

			let data = result.data;
			
			let allProducts = [];
			let onSaleProducts = [];
			let newArrivalProducts = [];

			allProducts = data.filter(product => product.section === '-' || product.section === '');
			onSaleProducts = data.filter(product => product.section === 'on-sale');
			newArrivalProducts = data.filter(product => product.section === 'new-arrival');

			this.setState({
				allProducts,
				onSaleProducts,
				newArrivalProducts,
				loading: false,
			});
		} else {
			this.props.history.push('/404')
		}
	}

	render() {
		return (
			<React.Fragment>
				{
					this.state.loading
						? <Loader className='loaderBox' type="TailSpin" color="#00BFFF" />
						: (
							<div className="homeWrapper">
								<div className="homeSubWrapper">
									<div className="container">

										<OffersContainer data={this.state.onSaleProducts} />

										<NewArrivals data={this.state.newArrivalProducts} />

										<AllProducts data={this.state.allProducts} />

									</div>
								</div>
							</div>
						)
				}
			</React.Fragment>
		);
	}
}

export default Home;