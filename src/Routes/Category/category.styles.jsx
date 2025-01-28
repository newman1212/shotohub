import styled from 'styled-components';

export const CategoryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
  row-gap: 50px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr); /* Reduce to 3 columns for tablets */
    column-gap: 15px; /* Adjust column gap */
    row-gap: 40px; /* Adjust row gap */
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* Reduce to 2 columns for smaller screens */
    column-gap: 10px; /* Further reduce column gap */
    row-gap: 30px; /* Further reduce row gap */
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr; /* Stack items in a single column on very small screens */
    row-gap: 20px; /* Adjust row spacing for better layout */
  }
`;

export const Title = styled.h2`
  font-size: 38px;
  margin-bottom: 25px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 32px; /* Adjust font size for smaller screens */
  }

  @media screen and (max-width: 480px) {
    font-size: 28px; /* Further reduce font size for very small screens */
  }
`;
