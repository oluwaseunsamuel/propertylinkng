import styled from "styled-components";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? "#006400" : "#e39734")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "10px 30px" : "10px 20px")};
  color: ${({ dark }) => (dark ? "#fff" : "#e67817")};
  font-size: ${({ fontBig }) => (fontBig ? "22px" : "18px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;

  &:hover {
    transition: all 0.3s ease-in-out;
    background: ${({ primary }) => (primary ? "transparent" : "#060f08")};
    color: ${({ dark }) => (dark ? "#e67817" : "#fff")};
    border: ${({ boderless }) => (boderless ? "1px solid #ff6600" : "none")};
  }
`;
