import React from "react";
import { gql, useQuery } from "@apollo/client";

import CollectionPage from "./collection.component";
import Spinner from "../../components/spinner/spinner.component";


const GET_COLLECTION_BY_TITLE = gql`
  query GetCollectionByTitle($title: String!) {
    getCollectionByTitle(title: $title){
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

const CollectionPageContainer = ({match}) => {
  const {loading, data} = useQuery(GET_COLLECTION_BY_TITLE, {variables: {title: match.params.collectionId}});
  if(loading) return <Spinner />
  return <CollectionPage collection={data.getCollectionByTitle} />
};

export default CollectionPageContainer;