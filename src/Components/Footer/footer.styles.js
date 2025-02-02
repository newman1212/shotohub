import styled from "styled-components";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";

export const FooterContainer = styled.footer`
  width: 100%;
  background: transparent;
  color: white;
  text-align: center;
  padding: 20px 0;
  z-index: 10;
`;

export const FooterText = styled.p`
  font-size: ${({ small }) => (small ? "0.75rem" : "0.875rem")};
  margin-bottom: ${({ small }) => (small ? "0" : "8px")};
  color: ${({ small }) => (small ? "#a0a0a0" : "grey")};
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-top: 10px;
`;

export const IconLink = styled.a`
  color:rgb(132, 133, 134);
  transition: color 0.3s ease-in-out;

  &:hover {
    color: #60a5fa;
  }
`;

export const StyledGithubIcon = styled(SiGithub)`
  width: 24px;
  height: 24px;
`;

export const StyledLinkedinIcon = styled(SiLinkedin)`
  width: 24px;
  height: 24px;
`;

export const StyledMailIcon = styled(HiOutlineMail)`
  width: 24px;
  height: 24px;
`;
