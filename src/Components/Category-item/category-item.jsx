 import React from 'react';
import './Category-item.scss'

const CategoryItem = ({categories}) => {


    const {imageUrl,title} = categories


    return(

        <div className="category-container" style ={{backgroundImage:`url(${imageUrl})`}}>
                      <div className="category-body-container" >
                        <h2>{title}</h2>
                        <p>Shop Now</p>
                      </div>
                    
          </div>
        
    )


}


export default CategoryItem;