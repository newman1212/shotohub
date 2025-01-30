import React, { useState } from 'react';
import { ContactContainer, FormContainer, Input,
     TextArea, SubmitButton, 
     Section, SectionTitle, 
     SectionText }
 from './contact.styles';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here (e.g., email sending or API request)
    console.log('Form submitted:', formData);
  };

  return (
    <ContactContainer>
      <Section>
        <SectionTitle>Contact Us</SectionTitle>
        <SectionText>If you have any questions, feel free to get in touch with us!</SectionText>
      </Section>

      <FormContainer onSubmit={handleSubmit}>
        <Input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <Input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextArea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <SubmitButton type="submit">Send Message</SubmitButton>
      </FormContainer>
    </ContactContainer>
  );
};

export default ContactPage;
