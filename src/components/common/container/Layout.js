import React from 'react';

//load components
import Loader from 'react-loader-spinner';
import TopHeader from '../top_header/TopHeader';

import NavBar from '../navbar/NavBar';

import Sidebar from '../navbar/sidebar/Sidebar';

import Banner from '../banner/Banner';

import Footer from '../footer/Footer';

class Layout extends React.Component {
	render() {
		return (
			<React.Fragment>
				{
					this.props.data.loading
						? <Loader className='loaderBox' type="TailSpin" color="#00BFFF" />
						: (
							<div className="containerMain" id="wrapper">
								<div className="headerMainWrapper">
									<TopHeader data={this.props.data.topHeader} />
									<div className="headerSubWrapper">
										<div className="">
											<NavBar data={this.props.data.menu} />
										</div>
										<Sidebar navItems={this.props.data.menu.navBarItems} />
									</div>
								</div>
								<section className="content">
									<div className={"content-body " + this.props.bgClass}>
										{
											this.props.showBanner ? <Banner sliderData={this.props.data.footer.banners} /> : ""
										}
										{this.props.children}
									</div>
								</section>
								<Footer data={this.props.data.footer} />
							</div>
						)
				}
			</React.Fragment>
		);
	}
}

export default Layout;