import React, {useState} from "react";
import {gql, useQuery, useMutation} from "@apollo/client";

import AddItem from "./add-item";
import Spinner from "../../../components/spinner/spinner.component";
import CustomButton from "../../../components/custom-button/custom-button.component";

import "./items.styles.scss";


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

const DELETE_ITEM = gql`
  mutation DeleteItem($id: ID!) {
    deleteItem(id: $id) {
      id
    }
  }
`;

const Items = ({history, match}) => {
  const [state, setState] = useState({
    formHidden: true
  });
  const {formHidden} = state;
  const {loading, data} = useQuery(GET_ITEMS);
  const [deleteItem] = useMutation(DELETE_ITEM);

  if(loading || !data) return <Spinner />

  const deleteMe = (itemId) => {
    const answer = prompt("type \"delete\" to delete");
    if(!!answer && answer.toLowerCase() === "delete") {
      deleteItem({
        variables: {
          id: itemId
        },
        refetchQueries: [{query: GET_ITEMS}]
      });
    } else {
      return;
    }
  };

  return (
    <div className="items">
      <CustomButton onClick={() => setState({formHidden: !formHidden})}>Add Item</CustomButton>
      {
        formHidden ? null : <AddItem />
      }
      <table className="items__table">
        <thead>
          <tr>
            <th>#id</th>
            <th>Name</th>
            <th>Price</th>
            <th>imageUrl</th>
            <th>Collection</th>
          </tr>
        </thead>
        <tbody>
          {
            data.items.map(item => (
              <tr key={item.id}>
                <td className="item__id">{item.id}</td>
                <td className="item__name">{item.name}</td>
                <td className="item__price">{item.price}</td>
                <td className="item__image"><img className="img" alt={item.name} src={item.imageUrl} style={{width: "55px", height: "55px"}} /> {item.imageUrl}</td>
                <td className="item__title">{item.collection.title}</td>
                <td className="edit" onClick={() => history.push(`${match.path}/edit/${item.id}`)}>Edit <i class="far fa-edit"></i></td>
                <td className="delete" onClick={() => deleteMe(item.id)}>Delete <i class="far fa-trash-alt"></i></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
};

export default Items;