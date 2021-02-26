import React, {useState} from "react";
import { useQuery, useMutation} from "@apollo/client";
import { GET_COLLECTIONS, DELETE_COLLECTION } from "../../../graphql/graphql";
import {
  CollectionsContainer,
  CollectionItemsContainer,
  CollectionItemContainer,
  CollectionItemTitle,
  CollectionOptions,
  CollectionOption
} from "./collections.styles";

import AddCollection from "./add-collection/add-collection";
import Spinner from "../../../components/spinner/spinner.component";
import CustomButton from "../../../components/custom-button/custom-button.component";



const Collections = ({history, match}) => {
  const [state, setState] = useState({
    formHidden: true
  });
  const {formHidden} = state;
  const {loading, data} = useQuery(GET_COLLECTIONS);
  const [deleteCollection] = useMutation(DELETE_COLLECTION);

  if(loading || !data) return <Spinner />

  const deleteMe = (collId) => {
    const answer = prompt("type \"delete\" to delete");
    if(!!answer && answer.toLowerCase() === "delete") {
      deleteCollection({
        variables: {
          id: collId
        },
        refetchQueries: [{query: GET_COLLECTIONS}]
      });
    } else {
      return;
    }
  };

  return (
    <CollectionsContainer>
      <CustomButton onClick={() => setState({formHidden: !formHidden})}>Add Collection</CustomButton>
      {
        state.formHidden ? null : <AddCollection />
      }
      <CollectionItemsContainer>
        {
          data.collections.map(collection => (
            <CollectionItemContainer key={collection.id}>
              <CollectionItemTitle>{collection.title}</CollectionItemTitle>
              <CollectionOptions>
                <CollectionOption optionEdit onClick={() => history.push(`${match.path}/edit/${collection.id}`)}>
                  Edit <i className="far fa-edit"></i>
                </CollectionOption>
                <CollectionOption onClick={() => deleteMe(collection.id)}>
                  Delete <i className="far fa-trash-alt"></i>
                </CollectionOption>
              </CollectionOptions>
            </CollectionItemContainer>
            ))
          }
      </CollectionItemsContainer>
    </CollectionsContainer>
  )
};

export default Collections;