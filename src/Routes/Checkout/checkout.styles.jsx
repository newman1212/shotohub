import styled from 'styled-components';

export const CheckoutContainer = styled.div`
  width: 55%;
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px auto 0;

  @media screen and (max-width: 1024px) {
    width: 70%; /* Adjust width for tablets */
  }

  @media screen and (max-width: 768px) {
    width: 90%; /* Adjust width for smaller screens */
  }

  @media screen and (max-width: 480px) {
    width: 95%; /* Maximize width for very small screens */
    margin: 20px auto; /* Reduce margin on smaller devices */
  }
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;

  @media screen and (max-width: 480px) {
    padding: 8px 0; /* Adjust padding for small screens */
  }
`;

export const HeaderBlock = styled.div`
  text-transform: capitalize;
  width: 23%;

  &:last-child {
    width: 8%;
  }

  @media screen and (max-width: 768px) {
    width: 20%; /* Slightly reduce width for smaller screens */
    &:last-child {
      width: 10%; /* Adjust last child width for better alignment */
    }
  }

  @media screen and (max-width: 480px) {
    width: 18%; /* Further reduce width on very small screens */
    font-size: 12px; /* Adjust font size for readability */
    &:last-child {
      width: 12%;
    }
  }
`;

export const Total = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;

  @media screen and (max-width: 768px) {
    font-size: 32px; /* Reduce font size on smaller screens */
    margin-top: 20px; /* Adjust margin for balance */
  }

  @media screen and (max-width: 480px) {
    font-size: 28px; /* Further reduce font size for very small screens */
    margin-top: 15px;
  }
`;
