import React from 'react';
import {Fragment,useContext} from 'react';
import {Outlet,Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../Assets/crown.svg'
import './Navigation.scss'
import CartIcon from '../../Components/Cart-Icon/cart-icon'

import CartDropdown from '../../Components/Cart-Dropdown/cart-dropdown'
import {UserContext} from '../../Contexts/User.context'
import {CartContext} from '../../Contexts/cart-context'
import {signOutUser} from '../../Utils/Firebase/firebase'


const Navigation = () => {

	const {currentUser,setCurrentUser} = useContext(UserContext);
	const {isCartOpen} = useContext(CartContext);



	// const signOutHandler = async() => {
	// 	await signOutUser();
		
		
	// }






	return(



			<Fragment >
				<div className = 'navigation'>

					<Link className = 'logo-container' to = '/'><div><Logo className ='logo'/></div> </Link>
					
				    <div className ='nav-links-container'>
					    <Link className = 'nav-link' to = '/shop'>
					    SHOP
					    </Link>

					    {
					    	currentUser? (
					    		<span className='nav-link' onClick ={signOutUser}>SIGNOUT</span>
					    		)
					    	: (<Link className = 'nav-link' to = '/auth'>SIGN IN</Link>)
					    }
					      <CartIcon/>
		    
				    </div>
				     {isCartOpen && <CartDropdown/>}
			    </div>

		    <Outlet />
		      
		    </Fragment>
		    
		    

		)
}



export default Navigation;





