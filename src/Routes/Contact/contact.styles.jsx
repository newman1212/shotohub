import styled from 'styled-components';

export const ContactContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
`;

export const Section = styled.section`
  text-align: center;
  margin-bottom: 40px;
`;

export const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 20px;
  font-weight: bold;
`;

export const SectionText = styled.p`
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 30px;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;

export const Input = styled.input`
  width: 100%;
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

export const TextArea = styled.textarea`
  width: 100%;
  padding: 15px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  height: 200px;
  outline: none;
  resize: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }
`;

export const SubmitButton = styled.button`
  padding: 12px 25px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

