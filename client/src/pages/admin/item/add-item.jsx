import React, {useState} from "react";
import {gql, useQuery, useMutation} from "@apollo/client";

import FormInput from "../../../components/form-input/form-input.component";

import "./add-item.styles.scss";

// ADD ITEM MUTATION
const ADD_ITEM = gql`
  mutation AddItem(
    $name: String! 
    $imageUrl: String! 
    $price: Int! 
    $collectionId: ID!
  ) {
    addItem(
      name: $name 
      imageUrl: $imageUrl 
      price: $price 
      collectionId: $collectionId
    ) {
      id
      name
      imageUrl
      price
      collection {
        id
        title
      }
    }
  }
`;
// GET ITEMS QUERY
const GET_ITEMS = gql`
  {
    items {
      id
      name
      imageUrl
      price
      collection {
        id
        title
      }
    }
  }
`;
// GET COLLECTIONS QUERY
const GET_COLLECTIONS = gql`
  {
    collections {
      id
      title
    }
  }
`;


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
        refetchQueries: [{query: GET_ITEMS}]
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
      <form className="add__form" onSubmit={handleSubmit}>
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

        <select className="select__collection" multiple={false} name="collectionId" value={collectionId} onChange={handleChange} required>
          <option>Select Collection</option>
          {
            displayCollections()
          }
        </select>

        <button className="add__item__btn">+</button>
      </form>
    </div>
  )
};

export default AddItem;