import styled from 'styled-components';

export const ProductCardContainer = styled.div`
  width: 100%;
  max-width: 300px;
  background-color: #fff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const ProductInfo = styled.div`
  padding: 16px;
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
`;

export const Name = styled.h3`
  font-size: 1.1rem;
  font-weight: bold;
  color: #333;
`;

export const Price = styled.span`
  font-size: 1rem;
  color: #007bff;
`;

export const QuantityControls = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;

export const ControlButton = styled.button`
  background-color: #f0f0f0;
  border: none;
  padding: 8px;
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #007bff;
    color: white;
  }
`;

export const QuantityDisplay = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: #333;
`;
