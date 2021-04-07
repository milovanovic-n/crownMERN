import React from 'react';

import {
  CollectionPageContainer,
  CollectionPageTitle,
  CollectionPageItemsContainer
} from "./collection.styles";
import CollectionItem from '../../components/collection-item/collection-item.component';


const CollectionPage = ({ collection, match }) => {
  const { title, items } = collection;
  return (
    <CollectionPageContainer>
      <CollectionPageTitle>{title}</CollectionPageTitle>
      <CollectionPageItemsContainer>
        {items.map(item => (
          <CollectionItem key={item.id} item={item} />
        ))}
      </CollectionPageItemsContainer>
    </CollectionPageContainer>
  );
};

export default CollectionPage;
