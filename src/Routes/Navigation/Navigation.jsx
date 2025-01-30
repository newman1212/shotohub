import { Fragment, useState } from 'react';
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
  SearchBarContainer,
  SearchInput,
  HamburgerIcon,
  CloseIcon,
} from './Navigation.styles';

const Navigation = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrwnLogo className='logo' />
        </LogoContainer>

        <SearchBarContainer>
          <SearchInput 
            type='text' 
            placeholder='Search products...' 
            value={searchQuery} 
            onChange={handleSearchChange} 
          />
        </SearchBarContainer>

        {/* Hamburger Menu */}
        {menuOpen ? (
          <CloseIcon onClick={() => setMenuOpen(false)} />
        ) : (
          <HamburgerIcon onClick={() => setMenuOpen(true)} />
        )}

        <NavLinks isOpen={menuOpen}>
          <NavLink to='/shop' onClick={() => setMenuOpen(false)}>SHOP</NavLink>
          <NavLink to='/contact' onClick={() => setMenuOpen(false)} >CONTACT</NavLink>

          {currentUser ? (
            <NavLink as='span' onClick={() => { signOutUser(); setMenuOpen(false); }}>
              SIGN OUT
            </NavLink>
          ) : (
            <NavLink to='/auth' onClick={() => setMenuOpen(false)}>SIGN IN</NavLink>
          )}
          
         
          <CartIcon closeMenu={() => setMenuOpen(false)} />

        </NavLinks>

        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
