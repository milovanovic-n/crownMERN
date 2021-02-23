import React from 'react'
import "./directory.styles.scss";
import {DIRECTORY_DATA_1, DIRECTORY_DATA_2} from "./directory.data";


const Directory = () => (
  <div className="directory">
    {/* FIRST PART */}
    <div className="directory1">
      {
        DIRECTORY_DATA_1.map(item => (
          <div key={item.id} className="directory1__item">
            <div className="item1__img" style={{backgroundImage: `url(${item.imageUrl})`}} />
            <div className="item1__overlay" />
            <div className="item1__description">
              <h3 className="item1__title">{item.title}</h3>
              <h4 className="item1__subtitle">collection</h4>
              <div className="item1__subtitle-line" />
              <p className="item1__btn">shop now</p>
            </div>
          </div>
        ))
      }
    </div>
    {/* DIVIDER */}
    <div className="directory__divider" />
    {/* SECOND PART */}
    <div className="directory2">
      {
        DIRECTORY_DATA_2.map((item, index) => (
          <div key={item.id} className="directory2__item">
            <div className={`item2__content ${index % 2 === 0 ? "content-right" : "content-left"}`}>
              <h3 className="item2__title">{item.title} collection</h3>
              <div className="item2__divider" />
              <p className="item2__description">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
                Integer interdum sem ac magna.
              </p>
              <p className="item2__btn">check it out</p>
            </div>
            <div className="item2__img-container">
              <img className="item2__img" src={item.imageUrl} alt={item.title} />
            </div>
          </div>
        ))
      }
    </div>
    {/* DIVIDER */}
    <div className="directory__divider" />
  </div>
);

export default Directory;