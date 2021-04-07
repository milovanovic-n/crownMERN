import React, {useContext} from 'react';
import { withRouter, Link } from 'react-router-dom';
import { AuthContext } from "../../context/auth";
import { CartContext } from "../../context/cart/cart.reducer";

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { ReactComponent as Logo } from '../../assets/crown.svg';

import './header.styles.scss'; 


const Header = ({history}) => {
  const { user, logout } = useContext(AuthContext);
  const { hidden } = useContext(CartContext);
  
  return(
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      {
        user && user.isAdmin ? (
          <div className='option' onClick={() => history.push("/admin")}>
            ADMIN
          </div>
        ) : null
      }
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      {
        user ? (
          <div className='option' onClick={logout}>
            SIGN OUT
          </div>
        ) : (
          <Link className='option' to='/signin'>
            SIGN IN
          </Link>
        )
      }
      <Link className="option last" to="/wishlist">
        WISHLIST
      </Link>
      <CartIcon />
    </div>
    {hidden ? null : <CartDropdown />}
  </div>
)};

export default withRouter(Header);
