import React, {useState} from "react";
import {gql, useMutation} from "@apollo/client";

import FormInput from "../../../components/form-input/form-input.component";

import "./add-collection.styles.scss";


const ADD_COLLECTION = gql`
  mutation AddCollection($title: String!) {
    addCollection(title: $title) {
      id
      title
    }
  }
`;

const GET_COLLECTIONS = gql`
  {
    collections {
      id
      title
    }
  }
`;

const AddCollection = () => {
  const [state, setState] = useState({
    title: ""
  });
  const [addCollection] = useMutation(ADD_COLLECTION);

  const handleSubmit = e => {
    e.preventDefault();
    const {title} = state;
    addCollection({
      variables: {
        title
      },
      refetchQueries: [{query: GET_COLLECTIONS}]
    })
    setState({
      title: ""
    });
  }

  const handleChange = e => {
    const {name, value} = e.target;
    setState({[name]: value});
  }

  const {title} = state;

  return(
    <div>
      <form className="add__form" onSubmit={handleSubmit}>
        <FormInput 
          name='title'
          type='text'
          handleChange={handleChange}
          value={title}
          label='Collection title'
          required
        />
        <button className="add__collection__btn">+</button>
      </form>
    </div>
  )
};

export default AddCollection;