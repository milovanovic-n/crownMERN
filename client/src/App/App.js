import React, {useContext, lazy, Suspense} from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';

import {AuthContext} from "../context/auth";
import {CartContext} from "../context/cart/cart.reducer";

import Header from "../components/header/header.component";
import Spinner from "../components/spinner/spinner.component";
import ErrorBoundary from "../components/error-boundary/error-boundary.component";

import './App.css';

const HomePage = lazy(() => import("../pages/homepage/homepage.component"));
const ShopPage = lazy(() => import("../pages/shop/shop.component"));
const CheckoutPage = lazy(() => import("../pages/checkout/checkout.component"));
const SignIn = lazy(() => import("../components/sign-in/sign-in.component"));
const SignUp = lazy(() => import("../components/sign-up/sign-up.component"));
const AdminPage = lazy(() => import("../pages/admin/admin.component"));


const App = () => {
  const {user} = useContext(AuthContext);
  const {cartItems} = useContext(CartContext);
  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  return(
    <div>
      <Header />
      <Switch>
        <ErrorBoundary>
          <Suspense fallback={<Spinner />}>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route exact path='/checkout' component={CheckoutPage} />
            <Route exact path='/signin' render={() => user ? <Redirect to="/"/> : <SignIn />}/>
            <Route exact path='/signup' render={() => user ? <Redirect to="/"/> : <SignUp />}/>
            <Route path="/admin" render={() => user && user.isAdmin ? <AdminPage /> : <Redirect to="/" />} />
          </Suspense>
        </ErrorBoundary>
      </Switch>
    </div>
  )
};

export default App;
