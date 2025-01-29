import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, removeItemFromCart } from '../../Store/Cart/cart.reducer';
import Button, { BUTTON_TYPES_CLASSES } from '../Button/button';
// import { Plus, Minus } from 'lucide-react'; // Importing icons for buttons

import {
  ProductCardContainer,
  ProductImage,
  ProductInfo,
  Footer,
  Name,
  Price,
  QuantityControls,
  ControlButton,
  QuantityDisplay,
} from './product-card.styles';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch();

  // Get cart items from Redux
  const cartItems = useSelector(state => state.cart.cartItems);

  // Find the quantity of the current product in the cart
  const cartItem = cartItems.find(item => item.id === product.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  const addProductToCart = () => dispatch(addItemToCart(product));
  const removeProductFromCart = () => dispatch(removeItemFromCart(product));

  return (
    <ProductCardContainer>
      <ProductImage src={imageUrl} alt={name} />
      <ProductInfo>
        <Footer>
          <Name>{name}</Name>
          <Price>${price}</Price>
        </Footer>
        
        {quantity === 0 ? (
          <Button
            buttonType={BUTTON_TYPES_CLASSES.inverted}
            onClick={addProductToCart}
            fullWidth
          >
            Add to Cart
          </Button>
        ) : (
          <QuantityControls>
            <ControlButton onClick={removeProductFromCart}>-</ControlButton>
            <QuantityDisplay>{quantity}</QuantityDisplay>
            <ControlButton onClick={addProductToCart}>+</ControlButton>
          </QuantityControls>
        )}
      </ProductInfo>
    </ProductCardContainer>
  );
};

export default ProductCard;
