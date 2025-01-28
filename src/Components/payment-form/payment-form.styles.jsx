import styled from 'styled-components';
import Button from '../Button/button';

export const PaymentFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  margin: 0 auto;
  max-width: 600px; /* Limit max width for larger screens */

  @media screen and (max-width: 768px) {
    padding: 10px;
    max-width: 100%;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 20px;

  h2 {
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: 20px;
  }

  @media screen and (max-width: 768px) {
    gap: 15px;

    h2 {
      font-size: 1.25rem;
    }
  }
`;

export const PaymentButton = styled(Button)`
  align-self: center;
  margin-top: 20px;
  width: 100%; /* Full width for better usability */

  @media screen and (min-width: 768px) {
    width: auto; /* Default size for larger screens */
    align-self: flex-end;
  }
`;
