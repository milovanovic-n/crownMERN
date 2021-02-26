import React, {useState} from "react";
import { useMutation} from "@apollo/client";
import {
 ADD_COLLECTION,
 GET_COLLECTIONS
} from "../../../../graphql/graphql";
import {  
  AddCollectionForm,
  AddCollectionButton
} from "./add-collection.styles";

import FormInput from "../../../../components/form-input/form-input.component";


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
      <AddCollectionForm onSubmit={handleSubmit}>
        <FormInput 
          name='title'
          type='text'
          handleChange={handleChange}
          value={title}
          label='Collection title'
          required
        />
        <AddCollectionButton>+</AddCollectionButton>
      </AddCollectionForm>
    </div>
  )
};

export default AddCollection;