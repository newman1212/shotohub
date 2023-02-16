import React from 'react';
 import CategoryItem from '../Category-item/category-item'
 import './Directory.styles.scss'

const Directory = ({categories}) => {






	return(



			<div className="categories-container">

		              {categories.map((category)=>(
		           <CategoryItem key={category.id} categories = {category}/>
		              
		                ))

		            }          
		    </div>

		)
}



export default Directory;