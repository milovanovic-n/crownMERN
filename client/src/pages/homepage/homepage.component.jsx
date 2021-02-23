import React from 'react';
import './homepage.styles.scss';

import Directory from '../../components/directory/directory.component';
import Carousel from "../../components/carousel/carousel.component";
import ShippingInfo from "../../components/shipping-info/shipping-info.component";

const HomePage = () => (
  <div className='homepage'>
    <Carousel />
    <ShippingInfo />
    <Directory />
  </div>
);

export default HomePage;
