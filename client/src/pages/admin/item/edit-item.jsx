import React, {useState} from "react";
import {gql, useQuery, useMutation} from "@apollo/client";

import Spinner from "../../../components/spinner/spinner.component";
import FormInput from "../../../components/form-input/form-input.component";

import "./edit-item.styles.scss";


const GET_ITEM_BY_ID = gql`
  query Item($id: ID!) {
    item(id: $id) {
      id
      name
      price
      imageUrl
      collection {
        id
        title
      }
    }
  }
`;

const UPDATE_ITEM = gql`
  mutation UpdateItem(
    $id: ID!
    $name: String!
    $imageUrl: String!
    $price: Int!
    $collectionId: ID!
  ) {
    updateItem(
      id: $id
      name: $name
      imageUrl: $imageUrl
      price: $price
      collectionId: $collectionId
    ) {
      id name imageUrl price collection {
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

const UpdateItem = ({match}) => {
  const itemId = match.params.itemId;
  const {loading, data} = useQuery(GET_ITEM_BY_ID, {variables: {id: itemId}});
  const collections = useQuery(GET_COLLECTIONS);
  const [state, setState] = useState({
    name: undefined,
    imageUrl: undefined,
    price: undefined,
    collectionId: undefined
  });
  let {name, imageUrl, price, collectionId} = state;
  const [updateItem] = useMutation(UPDATE_ITEM);

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
        collectionId: collectionId ? collectionId : data.item.collection.id
      },
      refetchQueries: [{query: GET_ITEMS}]
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

  const {item} = data;

  return (
    <div className="update__item">
      <h4>Update - <span className="item__name">{item.name}</span> - Product</h4>
      <form className="update__form" onSubmit={handleSubmit}>
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
        
        <select className="select__collection" name="collectionId" value={initialData(collectionId, item.collection.id)} onChange={handleChange} required>
          <option>Collections</option>
          {
            displayCollections()
          }
        </select>
        
        <button className="update__item__btn" type="submit"><i class="far fa-edit"></i></button>
      </form>
    </div>
  );
};

export default UpdateItem;