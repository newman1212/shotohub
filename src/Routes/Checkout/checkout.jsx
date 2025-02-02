import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../../Store/Cart/cart.selector';

import CheckoutItem from '../../Components/Checkout-Item/checkout-item';
import PaymentForm from '../../Components/payment-form/payment-form';

import {
  CheckoutContainer,
  // CheckoutHeader,
  // HeaderBlock,
  Total,
  PaymentWrapper,
  // MobileCheckoutItem,
  // MobileRow
} from './checkout.styles';

const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  return (
    <CheckoutContainer>
      {/* Desktop Header */}
      {/* <CheckoutHeader>
        <HeaderBlock><span>Product</span></HeaderBlock>
        <HeaderBlock><span>Description</span></HeaderBlock>
        <HeaderBlock><span>Quantity</span></HeaderBlock>
        <HeaderBlock><span>Price</span></HeaderBlock>
        <HeaderBlock><span>Remove</span></HeaderBlock>
      </CheckoutHeader> */}

      {/* Checkout Items */}
      {cartItems.map((cartItem) => (
        <>
          {/* Desktop View */}
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />

          {/* Mobile View */}
          {/* <MobileCheckoutItem key={`mobile-${cartItem.id}`}>
            <MobileRow><strong>Product:</strong> {cartItem.name}</MobileRow>
            <MobileRow><strong>Qty:</strong> {cartItem.quantity}</MobileRow>
            <MobileRow><strong>Price:</strong> ${cartItem.price}</MobileRow>
          
          </MobileCheckoutItem> */}
        </>
      ))}

      {/* Total & Payment */}
      <Total>Total: ${cartTotal}</Total>
      <PaymentWrapper>
        <PaymentForm />
      </PaymentWrapper>
    </CheckoutContainer>
  );
};

export default Checkout;
