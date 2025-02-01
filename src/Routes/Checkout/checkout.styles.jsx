import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  @media screen and (max-width: 1024px) {
    width: 70%;
  }

  @media screen and (max-width: 768px) {
    width: 90%;
  }

  @media screen and (max-width: 480px) {
    width: 95%;
    margin: 20px auto;
  }
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;

  @media screen and (max-width: 600px) {
    display: none; /* Hide headers on mobile */
  }
`;


export const HeaderBlock = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;

  @media screen and (max-width: 600px) {
    display: none; /* Hide headers on mobile */
  }
`;

export const MobileCheckoutItem = styled.div`
  display: none; /* Hide on desktop */

  @media screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 12px;
    margin: 8px 0;
    border-radius: 10px;
    background: #f9f9f9;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

export const MobileRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
  font-size: 14px;

  strong {
    font-weight: 600;
  }
`;

export const Total = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;

  @media screen and (max-width: 768px) {
    font-size: 32px;
    margin-top: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 28px;
    margin-top: 15px;
    text-align: center;
  }
`;

export const PaymentWrapper = styled.div`
  width: 100%;
  margin-top: 30px;
  padding: 20px;
  border-top: 2px solid #ddd;
  display: flex;
  justify-content: center;
`;
