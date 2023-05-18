import React from 'react';
import {createContext,useEffect,useReducer} from 'react';
import {onAuthStateChangedListener, createUserDocumentFromAuth} from './../Utils/Firebase/firebase';
import {createAction} from './../Utils/Reducer/reducer'



// actual value we want access

export const UserContext = createContext({
	currentUser: null,
	setCurrentUser : () => null,

});

// export const USER_ACTION_TYPES ={
// 	SET_CURRENT_USER:'SET_CURRENT_USER'


// }

// const userReducer =(state,action)=>{

// console.log(state,'state')
// 	// console.log('dispatched')


// 	console.log(action)

// 	const {type,payload} = action;


// 	switch(type){

// 	case USER_ACTION_TYPES.SET_CURRENT_USER:
// 		return{
// 			...state,
// 			currentUser:payload,
// 		}

// 	default:
// 		throw new Error(`unhandled type ${type} in userReducer`)


// 	}



// }


// const INITIAL_STATE = {
// 	currentUser:null
// }


export const UserProvider = ({children}) => {
	// const [currentUser,setCurrentUser] = useState(null);
	// const value = {currentUser,setCurrentUser};

	


	// const [{currentUser},dispatch] = useReducer(userReducer,INITIAL_STATE);

	// const setCurrentUser = (user) => {

	// 	dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER ,user))


	// }



// const value = {currentUser,setCurrentUser};

// useEffect(()=>{
// 	const unsubscribe = onAuthStateChangedListener((user)=>{

// 	if(user) {
// 		createUserDocumentFromAuth(user)
// 	}

// 		setCurrentUser(user)});


//     return unsubscribe;

	

// } ,[])

// console.log(currentUser);


	return <UserContext.Provider>{children}</UserContext.Provider>
}



