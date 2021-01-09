import React, {useState, useContext} from 'react';
import {gql, useMutation} from "@apollo/client";
import {withRouter} from "react-router-dom";

import {AuthContext} from "../../context/auth";

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import ErrMessage from "../err-message/err-message.component";

import './sign-in.styles.scss';


const LOGIN_USER = gql`
  mutation Login(
    $email: String!
    $password: ID!
  ) {
    login(
      email: $email
      password: $password
    ) {
      id displayName email isAdmin token
    }
  }
`;

const SignIn = ({history}) => {
  const context = useContext(AuthContext);
  const [errors, setErrors] = useState(null);
  const [values, setValues] = useState({
    email: "",
    password: ""
  });

  const {email, password} = values;

  const [loginUser] = useMutation(LOGIN_USER, {
    update(proxy, result) {
      context.login(result.data.login);
      history.push("/");
    },
    onError(err){
      setErrors(err);
    },
    variables: {
      email,
      password
    }
  });

  const handleSubmit = async e => {
    e.preventDefault();
    loginUser()
  };

  const handleChange = e => {
    const { value, name } = e.target;
    setValues({...values, [name]: value });
  };

  return (
    <div className='sign-in'>
      <h2 className="title">I already have an account</h2>
      <span className="subtitle">Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name='email'
          type='email'
          handleChange={handleChange}
          value={email}
          label='email'
          required
        />
        <FormInput
          name='password'
          type='password'
          handleChange={handleChange}
          value={password}
          label='password'
          required
        />
        <div className='buttons'>
          <CustomButton type='submit'> Sign in </CustomButton>
          <div className="register"><p>Don&#39;t have an account?</p> <span className="btn" onClick={() => {history.push("/signup")}}>Sign Up</span></div>
        </div>
      </form>
      {
        errors ? <ErrMessage err={errors} /> : null
      }
    </div>
  );
};

export default withRouter(SignIn);