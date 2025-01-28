import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  border-bottom: 1px solid darkgrey;
  padding: 15px 0;
  font-size: 20px;
  align-items: center;
  flex-wrap: wrap; /* Allows for wrapping on smaller screens */

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 10px 0;
  }
`;

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    width: 40%; /* Adjust the width of the image container for smaller screens */
    padding-right: 10px;
  }
`;

export const BaseSpan = styled.span`
  width: 23%;
  @media (max-width: 768px) {
    width: 33%; /* Adjust for better layout on mobile */
    font-size: 14px; /* Adjust font size */
  }
`;

export const Quantity = styled(BaseSpan)`
  display: flex;
  @media (max-width: 768px) {
    width: 40%; /* Adjust for better layout on mobile */
  }
`;

export const Arrow = styled.div`
  cursor: pointer;
  @media (max-width: 768px) {
    font-size: 14px; /* Adjust size of arrows on mobile */
  }
`;

export const Value = styled.span`
  margin: 0 10px;
  @media (max-width: 768px) {
    font-size: 14px; /* Adjust font size on mobile */
  }
`;

export const RemoveButton = styled.div`
  padding-left: 12px;
  cursor: pointer;
  @media (max-width: 768px) {
    padding-left: 8px; /* Adjust padding for smaller screens */
    font-size: 14px; /* Adjust font size on mobile */
  }
`;

