import React from "react";
import {flowRight as compose} from "lodash";
import {graphql} from "react-apollo";

import UpdateCollection from "./update-collection";
import DeleteCollection from "./delete-collection";
import {getCollectionDetails} from "../../../queries/queries";

const CollectionDetails = (props) => {
  const displayCollectionDetails = () => {
    const {collection} = props.data;

    if(collection) {
      return(
        <div>
          <h2>Name: {collection.title}</h2>
          <p>ID: {collection.id}</p>
          <DeleteCollection collectionId={collection.id} />
          <p>Items:</p>
          <ul>
            {
              collection.items.map(item => {
                return (<li key={item.id}>{item.name}</li>)
              })
            }
          </ul>

          <div>
            <UpdateCollection collection={collection} />
          </div>
        </div>
      )
    } else {
      return (<p>Click on collection to display details</p>)
    }
  }

  return (
    <div className="collection-details">
      {
        displayCollectionDetails()
      }
    </div>
  )
};

export default compose(
  graphql(getCollectionDetails, {
    options: (props) => {
      return {
        variables: {
          id: props.collectionId
        }
      }
    }
  }),
)(CollectionDetails);
