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
} from './Navigation.styles';

const Navigation = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const menuRef = useRef(null);
  const cartRef = useRef(null);

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
    if (cartRef.current && !cartRef.current.contains(event.target)) {
      // Close cart dropdown if user clicks outside
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Fragment>
      <NavigationContainer>
      <LogoContainer to='/'>
  <span style={{ color: '#333333', fontWeight: 'bold' }}>Shoto</span>
  <span style={{ color: '#aaaaaa', fontWeight: 'bold' }}>Hub</span>
</LogoContainer>


        <SearchBarContainer>
          <SearchInput 
            type='text' 
            placeholder='Search products...' 
            value={searchQuery} 
            onChange={(e) => setSearchQuery(e.target.value)} 
          />
        </SearchBarContainer>

        {/* Hamburger Menu */}
        {menuOpen ? (
          <CloseIcon onClick={() => setMenuOpen(false)} />
        ) : (
          <HamburgerIcon onClick={() => setMenuOpen(true)} />
        )}

        <NavLinks ref={menuRef} isOpen={menuOpen}>
          <NavLink to='/shop' onClick={() => setMenuOpen(false)}>SHOP</NavLink>
          <NavLink to='/contact' onClick={() => setMenuOpen(false)}>CONTACT</NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={() => { signOutUser(); setMenuOpen(false); }}>SIGN OUT</NavLink>
          ) : (
            <NavLink to='/auth' onClick={() => setMenuOpen(false)}>SIGN IN</NavLink>
          )}
          <CartIcon closeMenu={() => setMenuOpen(false)} />
        </NavLinks>

        {isCartOpen && <CartDropdown ref={cartRef} />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
