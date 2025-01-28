import styled from "styled-components";

export const BaseButton = styled.button`
  min-width: 165px;
  width: auto;
  height: 50px;
  letter-spacing: 0.5px;
  line-height: 50px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  font-family: "Open Sans Condensed";
  font-weight: bolder;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }

  @media (max-width: 768px) {
    min-width: 140px;
    height: 45px;
    font-size: 14px;
    padding: 0 30px;
  }

  @media (max-width: 480px) {
    min-width: 120px;
    height: 40px;
    font-size: 12px;
    padding: 0 25px;
  }
`;

export const GoogleSignInButton = styled(BaseButton)`
  background-color: #4285f4;
  color: white;

  &:hover {
    background-color: #357ae8;
    border: none;
  }

  @media (max-width: 768px) {
    min-width: 140px;
    height: 45px;
    font-size: 14px;
    padding: 0 30px;
  }

  @media (max-width: 480px) {
    min-width: 120px;
    height: 40px;
    font-size: 12px;
    padding: 0 25px;
  }
`;

export const InvertedButton = styled(BaseButton)`
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
    border: none;
  }

  @media (max-width: 768px) {
    min-width: 140px;
    height: 45px;
    font-size: 14px;
    padding: 0 30px;
  }

  @media (max-width: 480px) {
    min-width: 120px;
    height: 40px;
    font-size: 12px;
    padding: 0 25px;
  }
`;

export const LoadingSpinner = styled.div`
  display: inline-block;
  width: 30px;
  height: 30px;
  border: 3px solid rgba(195, 195, 195, 0.6);
  border-radius: 50%;
  border-top-color: #636767;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }

  @media (max-width: 768px) {
    width: 25px;
    height: 25px;
    border-width: 2px;
  }

  @media (max-width: 480px) {
    width: 20px;
    height: 20px;
    border-width: 1.5px;
  }
`;
