import React from 'react';
import {
  HomepageContainer
} from "./homepage.styles"

import Directory from '../../components/directory/directory.component';
import Carousel from "../../components/carousel/carousel.component";
import ShippingInfo from "../../components/shipping-info/shipping-info.component";
import FeaturedProducts from "../../components/featured-products/featured-products.component";
import Footer from "../../components/footer/footer.component";

const HomePage = () => (
  <HomepageContainer>
    <Carousel />
    <ShippingInfo />
    <Directory />
    <FeaturedProducts />
    <Footer />
  </HomepageContainer>
);

export default HomePage;
