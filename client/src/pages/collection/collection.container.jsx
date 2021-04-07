import React from "react";
import { useQuery } from "@apollo/client";
import { GET_COLLECTION_BY_TITLE } from "../../graphql/graphql";

import CollectionPage from "./collection.component";
import Spinner from "../../components/spinner/spinner.component";


const CollectionPageContainer = ({match}) => {
  const {loading, data} = useQuery(GET_COLLECTION_BY_TITLE, {variables: {title: match.params.collectionId}});
  if(loading) return <Spinner />
  return <CollectionPage collection={data.getCollectionByTitle} />
};

export default CollectionPageContainer;