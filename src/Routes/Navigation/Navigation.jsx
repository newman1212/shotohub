import React from 'react';
import {Fragment} from 'react';
import {Outlet,Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../Assets/crown.svg'
import './Navigation.scss'


const Navigation = () => {






	return(



			<Fragment >
				<div className = 'navigation'>

					<Link className = 'logo-container' to = '/'><div><Logo className ='logo'/></div> </Link>
					
				    <div className ='nav-links-container'>
					    <Link className = 'nav-link' to = '/shop'>
					    Shop
					    </Link>
					       <Link className = 'nav-link' to = '/signin'>
					    Sign In
					    </Link>
				    </div>
			    </div>

		    <Outlet />
		      
		    </Fragment>
		    
		    

		)
}



export default Navigation;





