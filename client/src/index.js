import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import {setContext} from "apollo-link-context";
import {AuthProvider} from "./context/auth";
import {CartProvider} from "./context/cart/cart.reducer";
import App from './App/App';
import * as serviceWorker from "./serviceWorkerRegistration";

import './index.css';


const httpLink = createHttpLink({
  uri: "https://crown-store110.herokuapp.com/graphql"
});

const authLink = setContext(() => {
  const token = localStorage.getItem("jwtToken");
  return {
    headers: {
      Authorization: token ? `Bearer ${token}` : ""
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


ReactDOM.render(
  <ApolloProvider client={client}>
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>
  </ApolloProvider>,
  document.getElementById('root')
);

serviceWorker.register();