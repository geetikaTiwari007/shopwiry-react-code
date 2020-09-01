import React from 'react';
import Loader from 'react-loader-spinner';

//load helpers
import Utility from '../../../helpers/Utility';

//load components
import ProductContainer from '../../common/products/Product';

class Products extends React.Component {

	state = {
		loading: true,
		productData: [],
		categoryData: [],
		filteredProductData: [],
	}

	handleSearch = (e) => {
		e.preventDefault();

		let value = unescape(escape(e.target.value.trim()));

		let valueRegex = new RegExp(value, 'i');

		let updatedProductData = JSON.parse(JSON.stringify(this.state.categoryData));

		updatedProductData = updatedProductData.filter(row => row.name.match(valueRegex));

		this.setState({
			filteredProductData: updatedProductData
		})
	}

	handleSort = (e) => {
		e.preventDefault();
		let value = escape(e.target.value).trim();

		let updatedFilteredProductData = this.state.filteredProductData;

		if (value === "") {
			updatedFilteredProductData = JSON.parse(JSON.stringify(this.state.categoryData));
		} else {
			let sortKeysArr = value.split('_');

			let sortKey = sortKeysArr[0];
			let sortType = sortKeysArr[1];

			if (sortKey && Object.keys(this.state.productData[0]).includes(sortKey)) {
				updatedFilteredProductData.sort((a, b) => {
					let keyA, keyB;

					if (sortKey === 'date') {
						keyA = new Date(a[sortKey]);
						keyB = new Date(b[sortKey]);
					} else {
						keyA = +a[sortKey];
						keyB = +b[sortKey];
					}
					if (sortType === 'asc') {
						if (keyA < keyB) return -1;
						if (keyA > keyB) return 1;
					} else {
						if (keyA < keyB) return 1;
						if (keyA > keyB) return -1;
					}
					return 0;
				});
			}
		}

		this.setState({
			filteredProductData: updatedFilteredProductData
		});
	}

	async componentDidMount() {
		document.getElementsByClassName('carousel-slider')[0].style.zIndex = 1;

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

			let updatedData = JSON.parse(JSON.stringify(data));

			let queryString = this.props.location.search;
			if (queryString.trim()) {
				queryString = queryString.slice(1);

				let queryStringObject = new URLSearchParams(queryString);
				if (queryStringObject.get('category')) {
					updatedData = updatedData.filter(item => queryStringObject.get('category') === item.category);
				}
			}

			this.setState({
				loading: false,
				productData: data,
				categoryData: updatedData,
				filteredProductData: updatedData,
			});
		} else {
			this.props.history.push('/404')
		}
	}

	componentDidUpdate(prevProps) {
		let newQueryString = this.props.location.search;
		let prevQueryString = prevProps.location.search;
		if (prevQueryString.trim() !== newQueryString.trim()) {
			newQueryString = newQueryString.slice(1);

			let updatedData = JSON.parse(JSON.stringify(this.state.productData));

			let queryStringObject = new URLSearchParams(newQueryString);
			if (queryStringObject.get('category')) {
				updatedData = updatedData.filter(item => queryStringObject.get('category') === item.category);
			}

			this.setState({
				categoryData: updatedData,
				filteredProductData: updatedData,
			});
		}
	}

	render() {
		return (
			<React.Fragment>
				{
					this.state.loading
						? <Loader className='loaderBox' type="TailSpin" color="#00BFFF" />
						: (
							<ProductContainer
								data={this.state.filteredProductData}
								handleSortEvent={this.handleSort}
								handleSearchEvent={this.handleSearch}
							/>
						)
				}
			</React.Fragment>
		);
	}
}

export default Products;