import React from 'react';
import {Carousel} from 'react-responsive-carousel';

//load css file
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Banner.css';

const Banner = props => {
  return (
    <div className="sliderWrapper">
      <div className="sliderSubWrapper">
      <Carousel 
        showArrows={false} 
        dynamicHeight={true} 
        showStatus={false} 
        showThumbs={false} 
        autoPlay={true}
        infiniteLoop={true}
        stopOnHover={true}
      >
          {
            props.sliderData.map((item, index) => (
              <div key={index + +new Date()}>
                <img src={item.url} />
                {
                  item.text ? <p className="legend">{item.text}</p> : ""
                }
              </div>
            ))
          }
        </Carousel>
      </div>
    </div>
  );
}

export default Banner;