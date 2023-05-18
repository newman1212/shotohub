import {CATEGORY_ACTION_TYPES} from './category-types'


export const CATEGORIES_INITIAL_STATE = {

	categories : [],


}


export const categoriesReducer = (state=CATEGORIES_INITIAL_STATE, action={}) =>{


	console.log(state,'cat state')

	const {type,payload} = action;


	console.log(payload,'cat payload')

	console.log(type,'cat type')

	switch(type){
	case CATEGORY_ACTION_TYPES.SET_CATEGORIES:
		return{
			...state,categories:payload
		}

	default:
		return state;



	}




}