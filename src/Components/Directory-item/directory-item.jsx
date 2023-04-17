 import React from 'react';
import {BackgroungImage,Body,DirectoryItemContainer} from './directory-item.styles'
import {useNavigate} from 'react-router-dom';

const DirectoryItem = ({categories}) => {


    const {imageUrl,title,route} = categories

    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(route)


    return(

        <DirectoryItemContainer onClick ={onNavigateHandler}>
            <BackgroungImage imageUrl={imageUrl} />
                      <Body>
                        <h2>{title.toUpperCase()}</h2>
                        <p>Shop Now</p>
                      </Body>
                    
          </DirectoryItemContainer> 
        
    )


}


export default DirectoryItem;