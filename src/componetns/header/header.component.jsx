import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import './header.style.scss';
import {auth} from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/card-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {createStructuredSelector} from 'reselect';
import {selectCurrentUser} from '../../redux/user/user.selectors';
import {selectCartHidden} from '../../redux/cart/cart.selectors';

const Header = ({currentUser ,hidden}) => (
<div className="header">
  <Link className="logo-container" to="/">
    <Logo  className="logo"/>
  </Link>
  <div className="options">
  <Link className="option" to="/shop">
      SHOP
  </Link>
  <Link className="option" to="/contact">
      CONTACT
  </Link>
   {
     currentUser ? (
     <Link className= "option" onClick={() => auth.signOut()}>
     SIGN OUT
     </Link>
     
     ) : (
     
     <Link className="option" to='/signin'>
     SIGN IN</Link>
     )};

     <CartIcon/>
  </div>
  {
    hidden ? null :
    <CartDropdown />
  }
  
</div>

);
const mapStateToProps = createStructuredSelector({
 currentUser: selectCurrentUser,
 hidden : selectCartHidden
});



export default connect(mapStateToProps) (Header);
