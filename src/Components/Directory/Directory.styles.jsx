import styled from 'styled-components';

export const DirectoryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (max-width: 1024px) {
    justify-content: space-evenly; /* Better spacing for medium screens */
  }

  @media screen and (max-width: 768px) {
    flex-direction: column; /* Stack items vertically on small screens */
    align-items: center; /* Center the items */
    gap: 20px; /* Add spacing between items */
  }
`;
