import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const Title = styled(Link)`
  font-size: 28px;
  margin-bottom: 25px;
  cursor: pointer;

  @media screen and (max-width: 768px) {
    font-size: 24px; /* Adjust font size for smaller screens */
    margin-bottom: 20px; /* Reduce spacing */
  }
`;

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;

  @media screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr); /* Adjust grid to 3 columns for tablets */
    column-gap: 15px; /* Reduce gap for medium screens */
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* Adjust grid to 2 columns for smaller screens */
    column-gap: 10px; /* Further reduce gap */
    row-gap: 20px; /* Add row spacing */
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr; /* Stack items on very small screens */
    row-gap: 15px; /* Adjust row spacing */
  }
`;
