import React from 'react';
import "./shipping-info.styles.scss";


const ShippingInfo = () => (
  <div className="shippingInfo">
    <div className="info">
      <div className="info__icon">
        <i className="far fa-paper-plane"></i>
      </div>
      <p className="info__text">Free shipping all</p>
    </div>
    <div className="info">
      <div className="info__icon">
        <i className="far fa-clock"></i>
      </div>
      <p className="info__text">Online support 24/7</p>
    </div>
    <div className="info">
      <div className="info__icon">
        <i className="fas fa-sync-alt"></i>
      </div>
      <p className="info__text">Money back guarante</p>
    </div>
  </div>
);

export default ShippingInfo;