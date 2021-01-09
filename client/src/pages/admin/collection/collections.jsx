import React, {useState} from "react";
import {gql, useQuery, useMutation} from "@apollo/client";

import AddCollection from "./add-collection";
import Spinner from "../../../components/spinner/spinner.component";
import CustomButton from "../../../components/custom-button/custom-button.component";

import "./collections.styles.scss";


// GET COLLECTIONS QUERY
const GET_COLLECTIONS = gql`
  {
    collections {
      id
      title
    }
  }
`;

const DELETE_COLLECTION = gql`
  mutation DeleteCollection($id: ID!) {
    deleteCollection(id: $id) {
      id
    }
  }
`;

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
    <div className="collections">
      <CustomButton onClick={() => setState({formHidden: !formHidden})}>Add Collection</CustomButton>
      {
        state.formHidden ? null : <AddCollection />
      }
      <table className="collections__table">
        <thead>
          <tr>
            <th>#id</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {
            data.collections.map(collection => (
              <tr key={collection.id}>
                <td>{collection.id}</td>
                <td>{collection.title}</td>
                <td className="edit" onClick={() => history.push(`${match.path}/edit/${collection.id}`)}>Edit <i class="far fa-edit"></i></td>
                <td className="delete" onClick={() => deleteMe(collection.id)}>Delete <i class="far fa-trash-alt"></i></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
};

export default Collections;





// <td className="delete" onClick={() => deleteCollection({
//                   variables: {
//                     id: collection.id
//                   },
//                   refetchQueries: [{query: GET_COLLECTIONS}]
//                 })}>Delete</td>