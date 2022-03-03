import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Close } from "@material-ui/icons";

const SidebarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: darkgreen;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.5s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "0" : "-100%")};
`;

const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

const CloseIcon = styled(Close)`
  color: #fff;
`;
const SidebarWrapper = styled.div`
  color: #fff;
`;

const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(7, 65px);
  text-align: center;

  @media screen and (max-width: 375px) {
    grid-template-rows: repeat(7, 34px);
  }
`;

const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.3s ease-in-out;
  color: #fff;

  &:hover {
    color: #e67817;
    transition: 0.2s ease-in-out;
  }
`;

const SideBtnWrap = styled.div`
  display: flex;
  justify-content: center;
`;

const SidebarRoute = styled(Link)`
  background: #e67817;
  white-space: nowrap;
  padding: 14px 64px;
  color: #fff;
  font-size: 24px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-bottom: 10px;

  &:hover {
    transition: all 0.3s ease-in-out;
    background: transparent;
    color: #e67817;
  }
`;

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <SidebarLink to="/" onClick={toggle}>
              HOME
            </SidebarLink>
            <SidebarLink to="/about" onClick={toggle}>
              ABOUT
            </SidebarLink>
            <SidebarLink to="/services" onClick={toggle}>
              SERVICES
            </SidebarLink>
            <SidebarLink to="/calculatepage" onClick={toggle}>
              PRICE CALCULATOR
            </SidebarLink>
            <SidebarLink to="/viewestate" onClick={toggle}>
              VIEW ESTATE
            </SidebarLink>
            <SideBtnWrap>
              <SidebarRoute to="/register">REGISTER</SidebarRoute>
            </SideBtnWrap>
            <SideBtnWrap>
              <SidebarRoute to="/login">SIGN IN</SidebarRoute>
            </SideBtnWrap>
          </SidebarMenu>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};

export default Sidebar;
