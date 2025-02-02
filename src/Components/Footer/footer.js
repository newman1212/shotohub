import React from "react";
import {
  FooterContainer,
  FooterText,
  IconContainer,
  IconLink,
  StyledGithubIcon,
  StyledLinkedinIcon,
  StyledMailIcon,
} from "./footer.styles";

const Footer = ({ appName }) => {
  return (
    <FooterContainer>
      <FooterText>© {new Date().getFullYear()} {appName}. All rights reserved.</FooterText>
      
      <IconContainer>
        <IconLink
          href="https://github.com/newman1212"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <StyledGithubIcon />
        </IconLink>

        <IconLink
          href="https://www.linkedin.com/in/emmanuel-seworh-217081ba/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <StyledLinkedinIcon />
        </IconLink>

        <IconLink
          href="mailto:emmanuelseworh@gmail.com"
          aria-label="Email"
        >
          <StyledMailIcon />
        </IconLink>
      </IconContainer>

      <FooterText small>
        Built with ❤️ by{" "}
        <IconLink
          href="https://emmanuelseworh.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Emmanuel Seworh
        </IconLink>.
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
