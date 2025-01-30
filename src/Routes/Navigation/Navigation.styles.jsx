import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

export const NavigationContainer = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 0 20px;
  z-index: 1000;

  @media screen and (max-width: 768px) {
    padding: 0 15px;
  }
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  display: flex;
  align-items: center;
`;

export const SearchBarContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  position: relative;
  max-width: 400px;

  @media screen and (max-width: 768px) {
    max-width: 200px;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #ccc;
  border-radius: 20px;
  outline: none;
  font-size: 1rem;
  transition: all 0.3s ease-in-out;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 8px rgba(0, 123, 255, 0.3);
  }

  @media screen and (max-width: 768px) {
    font-size: 0.9rem;
    padding: 6px 10px;
  }
`;

export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media screen and (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 70px;
    left: 0;
    width: 100%;
    background: white;
    padding: 20px 0;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 999;
  }
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  text-decoration: none;
  color: black;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #007bff;
  }

  @media screen and (max-width: 768px) {
    font-size: 1rem;
    padding: 12px 0;
  }
`;

export const HamburgerIcon = styled(FiMenu)`
  font-size: 24px;
  cursor: pointer;
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const CloseIcon = styled(FiX)`
  font-size: 24px;
  cursor: pointer;
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;
