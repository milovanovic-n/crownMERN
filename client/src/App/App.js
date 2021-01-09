import React, {useContext} from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';

import HomePage from '../pages/homepage/homepage.component';
import ShopPage from '../pages/shop/shop.component';
import CheckoutPage from '../pages/checkout/checkout.component';
import Header from '../components/header/header.component';
import AdminPage from "../pages/admin/admin.component";
import SignIn from "../components/sign-in/sign-in.component";
import SignUp from "../components/sign-up/sign-up.component";

import {AuthContext} from "../context/auth";
import {CartContext} from "../context/cart/cart.reducer";

import './App.css';


const App = () => {
  const {user} = useContext(AuthContext);
  const {cartItems} = useContext(CartContext);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  return(
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckoutPage} />
        <Route exact path='/signin' render={() => user ? <Redirect to="/"/> : <SignIn />}/>
        <Route exact path='/signup' render={() => user ? <Redirect to="/"/> : <SignUp />}/>
        <Route path="/admin" render={() => user && user.isAdmin ? <AdminPage /> : <Redirect to="/" />} />
      </Switch>
    </div>
  )
};

export default App;
