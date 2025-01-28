import styled from 'styled-components';

export const AuthenticationContainer = styled.div`
  display: flex;
  width: 900px;
  justify-content: space-between;
  margin: 30px auto;

  @media (max-width: 768px) {
    width: 80%;
    justify-content: center;
    flex-direction: column;
  }

  @media (max-width: 480px) {
    width: 95%;
    margin: 20px auto;
  }
`;
