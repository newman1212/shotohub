import React from 'react';
import {Fragment,useContext} from 'react';
import {Outlet,Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../Assets/crown.svg'
// import './Navigation.scss'
import CartIcon from '../../Components/Cart-Icon/cart-icon'

import CartDropdown from '../../Components/Cart-Dropdown/cart-dropdown'
import {UserContext} from '../../Contexts/User.context'
import {CartContext} from '../../Contexts/cart-context'
import {signOutUser} from '../../Utils/Firebase/firebase'

import  { NavigationContainer,LogoContainer,NavLinksContainer,NavLink} from './Navigation.styles';


const Navigation = () => {

	const {currentUser} = useContext(UserContext);
	const {isCartOpen} = useContext(CartContext);

	console.log(currentUser)



	// const signOutHandler = async() => {
	// 	await signOutUser();
		
		
	// }






	return(



			<Fragment >
				< NavigationContainer>

					<LogoContainer to = '/'><div><Logo className ='logo'/></div> </LogoContainer>
					
				    <NavLinksContainer>
					    <Link className = 'nav-link' to = '/shop'>
					    SHOP
					    </Link>

					    {
					    	currentUser? (
					    		<NavLink as='span' onClick ={signOutUser}>SIGNOUT</NavLink>
					    		)
					    	: (<NavLink to = '/auth'>SIGN IN</NavLink>)
					    }
					      <CartIcon/>
		    
				    </NavLinksContainer>

				     {isCartOpen && <CartDropdown/>}
			    </NavigationContainer>

		    <Outlet />
		      
		    </Fragment>
		    
		    

		)
}



export default Navigation;





