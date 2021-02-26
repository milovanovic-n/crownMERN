import React, {useState} from "react";
import { useMutation, useQuery} from "@apollo/client";
import {
  UpdateCollectionContainer,
  UpdateCollectionTitle,
  UpdateCollectionForm,
  UpdateCollectionFormButton
} from "./edit-collection.styles";
import { 
  GET_COLLECTIONS, 
  GET_COLLECTION_BY_ID, 
  UPDATE_COLLECTION 
} from "../../../../graphql/graphql";

import Spinner from "../../../../components/spinner/spinner.component";
import FormInput from "../../../../components/form-input/form-input.component";
import CollectionItemsContainer from "../collection-items-container/items.container";



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
  <UpdateCollectionContainer>
    <UpdateCollectionTitle>Update <span className="collection__title">{data.collection.title}</span> Collection</UpdateCollectionTitle>
    <UpdateCollectionForm onSubmit={handleSubmit}>
      <FormInput
        name="title"
        type="text"
        value={initialData(title, data.collection.title)}
        handleChange={handleChange}
        required
      />
      <UpdateCollectionFormButton title="Update Collection" className="update__collection__btn" type="submit">
        <i className="far fa-edit"></i>
      </UpdateCollectionFormButton>
    </UpdateCollectionForm>
    <CollectionItemsContainer collectionId={collectionId} items={data.collection.items} />
  </UpdateCollectionContainer>
)};

export default UpdateCollection;