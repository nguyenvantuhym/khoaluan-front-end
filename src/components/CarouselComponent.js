import React from 'react';
import { Carousel } from 'antd';

const contentStyle = {
  height: '460px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const MyCarousel = () => {
    return (
    <Carousel autoplay>
        <div>
            <img src="https://phongnhakebang.vn/uploads/banner/2016_10/slide_1.jpg" width="100%" height="100%"/>
        </div>
        <div>
        <img src="https://phongnhakebang.vn/uploads/banner/2017_02/thu-nghiem1.jpg" width="100%" height="100%"/>
        </div>
        <div>
        <img src="https://phongnhakebang.vn/uploads/banner/2016_10/slider_2.jpg" width="100%" height="100%"/>
        </div>
        <div>
        <img src="https://phongnhakebang.vn/uploads/banner/2019_01/hamada.jpg" width="100%" height="100%"/>
        </div>
      </Carousel>
    )
}

export default MyCarousel;