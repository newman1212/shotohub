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
  height: 250px;  // Increased image height
  object-fit: cover;
`;

export const ProductInfo = styled.div`
  padding: 12px; // Reduced padding to make space for the image
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px; // Reduced margin to save space
`;

export const Name = styled.h3`
  font-size: 1rem;
  font-weight: bold;
  color: #333;
`;

export const Price = styled.span`
  font-size: 0.95rem;
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
  padding: 6px;  // Reduced padding for a sleeker look
  border-radius: 50%;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #007bff;
    color: white;
  }
`;

export const QuantityDisplay = styled.span`
  font-size: 0.95rem;
  font-weight: bold;
  color: #333;
`;
