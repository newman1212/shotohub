import React from 'react';
import {createContext,useState,useEffect} from 'react';
import {onAuthStateChangedListener,createUserDocumentFromAuth} from './../Utils/Firebase/firebase';



// actual value we want access

export const UserContext = createContext({
	currentUser: null,
	setCurrentUser : () => null,

});


export const UserProvider = ({children}) => {
	const [currentUser,setCurrentUser] = useState(null);
	const value = {currentUser,setCurrentUser};




useEffect(()=>{
	const unsubscribe = onAuthStateChangedListener((user)=>{

	if(user) {
		createUserDocumentFromAuth(user)
	}

		setCurrentUser(user)});

	

} ,[])


	return <UserContext.Provider value ={value}>{children}</UserContext.Provider>
}





// export default UserProvider;
