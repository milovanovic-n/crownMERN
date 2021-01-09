import React, {useState, useContext} from 'react';
import {gql, useMutation} from "@apollo/client";
import {withRouter} from "react-router-dom";

import {AuthContext} from "../../context/auth";

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import ErrMessage from "../err-message/err-message.component";

import './sign-up.styles.scss'; 


const REGISTER_USER = gql`
  mutation register(
    $displayName: String!
    $email: String!
    $password: ID!
    $confirmPassword: ID!
  ) {
    register(
      displayName: $displayName
      email: $email
      password: $password
      confirmPassword: $confirmPassword
    ) {
      id displayName email token isAdmin
    }
  }
`;

const SignUp = ({history}) => {
  const [values, setValues] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const context = useContext(AuthContext);
  const [errors, setErrors] = useState(null);

  const handleChange = e => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const {displayName, email, password, confirmPassword} = values;

  const [addUser] = useMutation(REGISTER_USER, {
    update(proxy, result){
      context.login(result.data.register);
      history.push("/");
    },
    onError(err){
      setErrors(err);
    },
    variables: {
      displayName,
      email,
      password,
      confirmPassword
    }
  });

  const handleSubmit = async e => {
    e.preventDefault();
    addUser();
  };

  return (
    <div className='sign-up'>
      <h2 className='title'>I do not have an account</h2>
      <span className="subtitle">Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={handleSubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={handleChange}
          label='Full Name'
          required
        />
        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={handleChange}
          label='Email'
          required
        />
        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={handleChange}
          label='Password'
          required
        />
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={handleChange}
          label='Confirm Password'
          required
        />
        <div className="buttons">
          <CustomButton type='submit'>SIGN UP</CustomButton>
          <div className="login"><p>Have an account?</p> <span className="btn" onClick={() => {history.push("/signin")}}>Log in</span></div>
        </div>
      </form>
      {
        errors ? <ErrMessage err={errors} /> : null
      }
    </div>
  )
};

export default withRouter(SignUp);


