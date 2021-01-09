import React, {useState} from "react";
import {gql, useMutation, useQuery} from "@apollo/client";

import Spinner from "../../../components/spinner/spinner.component";
import FormInput from "../../../components/form-input/form-input.component";

import "./edit-collection.styles.scss";


// GET COLLECTIONS QUERY
const GET_COLLECTIONS = gql`
  {
    collections {
      id
      title
    }
  }
`;

// GET ONE COLLECTION QUERY
const GET_COLLECTION_BY_ID = gql`
  query Collection($id: ID!) {
    collection(id: $id) {
      id
      title
      items {
        id
        name
        imageUrl
        price
      }
    }
  }
`;

// UPDATE COLLECTION MUTATION
const UPDATE_COLLECTION = gql`
  mutation UpdateCollection(
    $id: ID!
    $title: String!
  ) {
    updateCollection(
      id: $id
      title: $title
    ) {
      id
      title
    }
  }
`;


const UpdateCollection = ({match}) => {
  const collectionId = match.params.collectionId;
  const [state, setState] = useState({title: null});
  const {loading, data} = useQuery(GET_COLLECTION_BY_ID, {variables: {id: collectionId}});
  const [updateCollection] = useMutation(UPDATE_COLLECTION);

  if(loading || !data) return <Spinner />

  const {title} = state;

  const handleSubmit = e => {
    e.preventDefault();

    updateCollection({
      variables: {
        id: collectionId,
        title: title ? title : data.collection.title
      },
      refetchQueries: [{query: GET_COLLECTIONS}]
    });
  };

  const handleChange = e => {
    const {name, value} = e.target;
    setState({[name]: value});
  };

  const initialData = (title, initData) => {
    if(title || title === "") {
      return title;
    }
    return initData;
  }

  return (
  <div className="update__collection">
    <h4>Update <span className="collection__title">{data.collection.title}</span> Collection</h4>
    <form className="update__form" onSubmit={handleSubmit}>
      <FormInput
        name="title"
        type="text"
        value={initialData(title, data.collection.title)}
        handleChange={handleChange}
        required
      />
      <button title="Update Collection" className="update__collection__btn" type="submit"><i class="far fa-edit"></i></button>
    </form>
  </div>
)};

export default UpdateCollection;