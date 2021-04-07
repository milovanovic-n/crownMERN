import React from 'react';
import { withRouter } from 'react-router-dom';

import CollectionItem from '../collection-item/collection-item.component';

import './collection-preview.styles.scss';


const CollectionPreview = ({ title, items, history, match }) => (
  <div className='collection-preview'>
    <div className="title__container">
      <h1
        className='title'
        title="View Collection"
        onClick={() => history.push(`${match.path}/${title.toLowerCase()}`)}
      >
        {title}
        <i className="fas fa-long-arrow-alt-right"></i>
      </h1>
    </div>
    <div className='preview'>
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default withRouter(CollectionPreview);
