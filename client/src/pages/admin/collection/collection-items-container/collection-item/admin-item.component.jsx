import React from 'react';
import { withRouter } from "react-router-dom";
import { useMutation} from "@apollo/client";
import {
  CollectionItemAdminContainer,
  CollectionItemAdminImage,
  CollectionItemAdminOptions,
  CollectionItemAdminOption,
  CollectionItemAdminFooter
} from "./admin-item.styles";
import { 
  GET_ITEMS_BY_COLLECTION,
  DELETE_ITEM
} from "../../../../../graphql/graphql";



const CollectionItemAdmin = ({item, history}) => {
  const [deleteItem] = useMutation(DELETE_ITEM);

  const deleteMe = (itemId) => {
    const answer = prompt("type \"delete\" to delete");
    if(!!answer && answer.toLowerCase() === "delete") {
      deleteItem({
        variables: {
          id: itemId
        },
        refetchQueries: [{query: GET_ITEMS_BY_COLLECTION, variables: {collection: item.collection.id}}]
      });
    } else {
      return;
    }
  };

  return (
  <CollectionItemAdminContainer>
    <CollectionItemAdminImage imageUrl={item.imageUrl}/>
    <CollectionItemAdminOptions>
      <CollectionItemAdminOption className="edit" onClick={() => history.push(`/admin/items/edit/${item.id}`)}>
        Edit <i className="far fa-edit"></i>
      </CollectionItemAdminOption>
      <CollectionItemAdminOption className="delete" onClick={() => deleteMe(item.id)}>
        Delete <i className="far fa-trash-alt"></i>
      </CollectionItemAdminOption>
    </CollectionItemAdminOptions>
    <CollectionItemAdminFooter>
      <span className="name">{item.name}</span>
      <span className="price">{item.price}</span>
    </CollectionItemAdminFooter>
  </CollectionItemAdminContainer>
)};

export default withRouter(CollectionItemAdmin);