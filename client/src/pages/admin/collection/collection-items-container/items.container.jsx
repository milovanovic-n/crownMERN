import React, { useState } from 'react';
import { useQuery } from "@apollo/client";
import {
  CollectionItemsWrapper,
  CollectionItemsBlock
} from "./items.container.styles";
import { GET_ITEMS_BY_COLLECTION } from "../../../../graphql/graphql";

import Spinner from "../../../../components/spinner/spinner.component";
import CustomButton from "../../../../components/custom-button/custom-button.component";
import CollectionItemAdmin from "./collection-item/admin-item.component";
import AddItem from "./collection-item/add-item";


const CollectionItemsContainer = ({ collectionId }) => {
  const {loading, data} = useQuery(GET_ITEMS_BY_COLLECTION, {variables: {collection: collectionId}})
  const [itemFormHidden, setItemFormHidden] = useState(true);

  if(loading || !data) return <Spinner />

  return (
  <CollectionItemsWrapper>
    <CustomButton onClick={() => setItemFormHidden(!itemFormHidden)}>Add Item</CustomButton>
    {
      itemFormHidden ? null : <AddItem />
    }
    <CollectionItemsBlock>
      {
        data.getItemsByCollection.map(item => <CollectionItemAdmin key={item.id} item={item}/>)
      }
    </CollectionItemsBlock>
  </CollectionItemsWrapper>
)};

export default CollectionItemsContainer;