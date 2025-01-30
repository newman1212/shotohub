import { useDispatch, useSelector } from 'react-redux';
import { addItemToCart, removeItemFromCart } from '../../Store/Cart/cart.reducer';
import Button, { BUTTON_TYPES_CLASSES } from '../Button/button';
import { FiPlus, FiMinus } from 'react-icons/fi';  // Importing react-icons

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
            style={{ padding: '6px 10px', fontSize: '14px' }} // Adjusted button size
          >
            Add to Cart
          </Button>
        ) : (
          <QuantityControls>
            <ControlButton onClick={removeProductFromCart}>
              <FiMinus /> {/* Minus icon */}
            </ControlButton>
            <QuantityDisplay>{quantity}</QuantityDisplay>
            <ControlButton onClick={addProductToCart}>
              <FiPlus /> {/* Plus icon */}
            </ControlButton>
          </QuantityControls>
        )}
      </ProductInfo>
    </ProductCardContainer>
  );
};

export default ProductCard;
