import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FiMenu, FiX } from 'react-icons/fi';

export const NavigationContainer = styled.div`
  position: sticky;
  top: 0;
  width: 100vw;  /* Ensures full width */
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: white;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 0 20px;
  z-index: 1000;

  @media screen and (max-width: 768px) {
    padding: 0 16px;
    height: 65px;
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 1.8rem;
  font-weight: bold;
  color: black;
  text-decoration: none;
  letter-spacing: 1px;

  &:hover {
    color: #007bff;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const SearchBarContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  max-width: 400px;

  @media screen and (max-width: 768px) {
    max-width: 250px;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
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
    padding: 8px;
  }
`;

/* Mobile menu - slides in from right */
export const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: ${({ isOpen }) => (isOpen ? '0' : '-60%')}; /* Slides in */
    width: 60%;  /* Adjusted width for a smaller size */
    height: 100vh;
    background: white;
    padding-top: 80px; /* Space for navbar */
    box-shadow: -4px 0 6px rgba(0, 0, 0, 0.1);
    transition: right 0.3s ease-in-out;
    z-index: 999;
  }
`;

export const NavLink = styled(Link)`
  padding: 10px 15px;
  font-size: 1.1rem;
  font-weight: 500;
  text-decoration: none;
  color: black;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #007bff;
  }

  @media screen and (max-width: 768px) {
    font-size: 1rem;
    padding: 12px 0;
    width: 100%;
    text-align: center;
  }
`;

export const HamburgerIcon = styled(FiMenu)`
  font-size: 28px;
  cursor: pointer;
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

export const CloseIcon = styled(FiX)`
  font-size: 28px;
  cursor: pointer;
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 20px;
    right: 20px;
  }
`;
