import React from 'react';
import {BaseButton,GoogleButton,InvertedButton} from './button.styles'





export const BUTTON_TYPES_CLASSES ={
	google:'google-sign-in',
	inverted: 'inverted',
	base: 'base'
}


const getButton = (buttonType = BUTTON_TYPES_CLASSES.base) =>({


	[BUTTON_TYPES_CLASSES.base] : BaseButton,
	[BUTTON_TYPES_CLASSES.inverted] : InvertedButton,
	[BUTTON_TYPES_CLASSES.google] : GoogleButton,

}[buttonType]

)





const Button = ({children,buttonType,...otherProps}) => {



const CustomButton = getButton(buttonType);

	return(


		<CustomButton  {...otherProps}>{children}</CustomButton>

		)


}



export default Button;