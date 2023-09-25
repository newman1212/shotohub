import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import CartIcon from '../../Components/Cart-Icon/cart-icon';
import CartDropdown from '../../Components/Cart-Dropdown/cart-dropdown';

import { selectCurrentUser } from '../../Store/User/user.selector';
import { selectIsCartOpen } from '../../Store/Cart/cart.selector';

import { ReactComponent as CrwnLogo } from '../../Assets/crown.svg';
import { signOutUser } from '../../Utils/Firebase/firebase';

import {
  NavigationContainer,
  NavLinks,
  NavLink,
  LogoContainer,
} from './Navigation.styles';

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrwnLogo className='logo' />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>SHOP</NavLink>

          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to='/auth'>SIGN IN</NavLink>
          )}
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;