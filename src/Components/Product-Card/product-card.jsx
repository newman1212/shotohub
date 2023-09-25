import { useDispatch, useSelector } from 'react-redux';

import { selectCartItems } from '../../Store/Cart/cart.selector';
import { addItemToCart } from '../../Store/Cart/cart.action';

import Button, { BUTTON_TYPES_CLASSES } from '../Button/button';

import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
} from './product-card.styles';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
         <Button
        buttonType={BUTTON_TYPES_CLASSES.inverted}
        onClick={addProductToCart}
      > 
        Add to card
      </Button>
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
   
    </ProductCartContainer>
  );
};

export default ProductCard;