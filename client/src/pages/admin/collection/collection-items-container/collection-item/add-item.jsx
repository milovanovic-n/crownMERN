import React, { useState } from "react";
import { useQuery, useMutation} from "@apollo/client";
import {
  AddItemForm,
  AddItemSelectCollection,
  AddItemButton
} from "./item.styles";
import {
  ADD_ITEM,
  GET_ITEMS_BY_COLLECTION,
  GET_COLLECTIONS
} from "../../../../../graphql/graphql";

import FormInput from "../../../../../components/form-input/form-input.component";


const AddItem = () => {
  const [state, setState] = useState({
    name: "",
    imageUrl: "",
    price: "",
    collectionId: ""
  });

  const {name, imageUrl, price, collectionId} = state;
  const {loading, data} = useQuery(GET_COLLECTIONS);
  const [addItem] = useMutation(ADD_ITEM);

  const handleChange = e => {
    const {name, value} = e.target;
    setState({...state, [name]: value});
  };

  const handleSubmit = e => {
    e.preventDefault();

    const newPrice = parseInt(price);

    if(collectionId) {
      addItem({
        variables: {
          name,
          imageUrl,
          price: newPrice,
          collectionId
        },
        refetchQueries: [{query: GET_ITEMS_BY_COLLECTION, variables: {collection: collectionId}}]
      });
      setState({
        name: "",
        imageUrl: "",
        price: "",
        collectionId: ""
      });
    } else {
      alert("You need to select a collection");
    }
  };

  const displayCollections = () => {
    if(loading) return <option key="loading">loading..</option>
    
    return data.collections.map(coll => {
      return (<option key={coll.id} value={coll.id}>{coll.title}</option>)
    })
  };

  return (
    <div>
      <AddItemForm onSubmit={handleSubmit}>
        <FormInput 
          name="name"
          type="text"
          value={name}
          handleChange={handleChange}
          label="Product title"
          required
        />
        <FormInput 
          name="imageUrl"
          type="text"
          value={imageUrl}
          handleChange={handleChange}
          label="Image url"
          required
        />
        <FormInput
          name="price"
          type="number"
          value={price}
          handleChange={handleChange}
          label="Price"
          required
        />
        <AddItemSelectCollection multiple={false} name="collectionId" value={collectionId} onChange={handleChange} required>
          <option>Select Collection</option>
          {
            displayCollections()
          }
        </AddItemSelectCollection>
        <AddItemButton>+</AddItemButton>
      </AddItemForm>
    </div>
  )
};

export default AddItem;