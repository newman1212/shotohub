import { Fragment, useState, useRef, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

import CartIcon from '../../Components/Cart-Icon/cart-icon';
import CartDropdown from '../../Components/Cart-Dropdown/cart-dropdown';

import { selectCurrentUser } from '../../Store/User/user.selector';
import { selectIsCartOpen } from '../../Store/Cart/cart.selector';

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
  MenuOverlay,
} from './Navigation.styles';

const Navigation = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && !event.target.closest('.nav-menu')) {
        setMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <span style={{ color: '#333333', fontWeight: 'bold' }}>Shoto</span>
          <span style={{ color: '#aaaaaa', fontWeight: 'bold' }}>Hub</span>
        </LogoContainer>

        <SearchBarContainer>
          <SearchInput type='text' placeholder='Search products...' />
        </SearchBarContainer>

        {/* Hamburger Menu */}
        {menuOpen ? (
          <CloseIcon onClick={() => setMenuOpen(false)} />
        ) : (
          <HamburgerIcon onClick={() => setMenuOpen(true)} />
        )}

        <MenuOverlay isOpen={menuOpen} onClick={() => setMenuOpen(false)} />

        <NavLinks className="nav-menu" isOpen={menuOpen}>
          <NavLink to='/shop' onClick={() => setMenuOpen(false)}>SHOP</NavLink>
          <NavLink to='/contact' onClick={() => setMenuOpen(false)}>CONTACT</NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={() => { signOutUser(); setMenuOpen(false); }}>SIGN OUT</NavLink>
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
