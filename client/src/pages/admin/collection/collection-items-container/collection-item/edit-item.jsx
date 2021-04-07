import React, {useState} from "react";
import { useQuery, useMutation} from "@apollo/client";
import {
  EditItemContainer,
  EditItemTitle,
  EditItemForm,
  EditCollectionContainer,
  EditItemButton,
  EditFeaturedValueContainer,
  EditFeaturedValue,
  EditFeaturedValueIcon,
  EditFeaturedValueText
} from "./item.styles";
import { 
  GET_ITEM_BY_ID,
  UPDATE_ITEM,
  GET_COLLECTIONS 
} from "../../../../../graphql/graphql";

import Spinner from "../../../../../components/spinner/spinner.component";
import FormInput from "../../../../../components/form-input/form-input.component";


const UpdateItem = ({match}) => {
  const itemId = match.params.itemId;
  const {loading, data} = useQuery(GET_ITEM_BY_ID, {variables: {id: itemId}});
  const collections = useQuery(GET_COLLECTIONS);
  const [updateItem] = useMutation(UPDATE_ITEM);
  const [state, setState] = useState({
    name: undefined,
    imageUrl: undefined,
    price: undefined,
    collectionId: undefined
  });
  let {name, imageUrl, price, collectionId} = state;

  if(loading || !data) return <Spinner />

  const handleSubmit = e => {
    e.preventDefault();

    const newPrice = parseInt(price);

    updateItem({
      variables: {
        id: itemId,
        name: name ? name : data.item.name,
        imageUrl: imageUrl ? imageUrl : data.item.imageUrl,
        price: price ? newPrice : data.item.price,
        featured: data.item.featured,
        isOnWishlist: data.item.inOnWishlist,
        collectionId: collectionId ? collectionId : data.item.collection.id
      },
      refetchQueries: [{query: GET_ITEM_BY_ID, variables: {id: data.item.id}}]
    });
  };

  const handleChange = e => {
    const {name, value} = e.target;
    setState({...state, [name]: value});
  };

  const initialData = (data, initData) => {
    if(data || data === ""){
      return data;
    }
    return data = initData;
  };

  const displayCollections = () => {
    if(collections) {
      const {loading, data} = collections;

      if(loading) return <option key="loading">loading..</option>

      return data.collections.map(coll => {
        return (<option key={coll.id} value={coll.id}>{coll.title}</option>)
      });
    } else {
      return (
        <option key="collError">error loading collections</option>
      )
    }
  };

  const toggleFeturedValue = (item) => {
    updateItem({
      variables: {
        id: item.id,
        name: item.name,
        imageUrl: item.imageUrl,
        price: item.price,
        featured: !item.featured,
        isOnWishlist: item.isOnWishlist,
        collectionId: item.collection.id
      },
      refetchQueries: [{query: GET_ITEM_BY_ID, variables: {id: item.id}}]
    });
  };

  const { item } = data;

  return (
    <EditItemContainer>
      <EditItemTitle>Update - <span className="item__name">{item.name}</span> - Product</EditItemTitle>
      <EditItemForm onSubmit={handleSubmit}>
        <FormInput
          name="name"
          type="text"
          value={initialData(name, item.name)}
          handleChange={handleChange}
          required
        />
        <FormInput
          name="imageUrl"
          type="text"
          value={initialData(imageUrl, item.imageUrl)}
          handleChange={handleChange}
          required
        />
        <FormInput 
          name="price"
          type="number"
          value={initialData(price, item.price)}
          handleChange={handleChange}
          required
        />

        <EditCollectionContainer name="collectionId" value={initialData(collectionId, item.collection.id)} onChange={handleChange} required>
          <option>Collections</option>
          {
            displayCollections()
          }
        </EditCollectionContainer>
        <EditItemButton type="submit"><i className="far fa-edit"></i></EditItemButton>
      </EditItemForm>
      <EditFeaturedValueContainer>
        {
          item.featured ? (
            <EditFeaturedValue> 
              <EditFeaturedValueIcon isOn={true} onClick={() => toggleFeturedValue(item)} title="Click To Remove">
                <i className="fas fa-toggle-on"></i>
              </EditFeaturedValueIcon>
              <EditFeaturedValueText>click to remove from featured items</EditFeaturedValueText>
            </EditFeaturedValue>
          ) : (
            <EditFeaturedValue>
              <EditFeaturedValueIcon isOn={false} onClick={() => toggleFeturedValue(item)} title="Click To Add">
                <i className="fas fa-toggle-off"></i>
              </EditFeaturedValueIcon>
              <EditFeaturedValueText>click to add to featured items</EditFeaturedValueText>
            </EditFeaturedValue>
          )
        }
      </EditFeaturedValueContainer>
    </EditItemContainer>
  );
};

export default UpdateItem;