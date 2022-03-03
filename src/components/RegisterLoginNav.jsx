import { Link } from "react-router-dom";
import styled from "styled-components";
import brand from "../assets/companylogo.png";

const NavContainer = styled.nav`
  height: 80px;
  position: sticky;
  top: 0;
  z-index: 99;
  background: white;
  margin-top: -3px;
`;

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 10;
  width: 100%;
  padding-right: 60px;
  padding-left: 60px;

  @media screen and (max-width: 760px) {
    padding-right: 20px;
    padding-left: 20px;
  }
`;

const NavLogo = styled(Link)`
  color: #fff;
  display: flex;
  justify-self: flex-start;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
`;

const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  //margin-right: -22px;

  @media screen and (max-width: 760px) {
    display: none;
  }
`;

const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 650px) {
    display: none;
  }
`;

const NavBtnLink = styled(Link)`
  background: darkgreen;
  white-space: nowrap;
  padding: 7px 30px;
  font-size: 16px;
  color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  text-decoration: none;

  &:hover {
    transition: all 0.3s ease-in-out;
    background: #e67817;
    color: #fff;
  }
`;

const RegisterLoginNav = () => {
  return (
    <NavContainer>
      <NavWrapper>
        <NavLogo to="/">
          <img src={brand} alt="" style={{ height: "50px" }} />
        </NavLogo>
        <NavMenu>
          <NavBtn>
            <NavBtnLink to="/register">REGISTER</NavBtnLink>
          </NavBtn>
          <NavBtn>
            <NavBtnLink to="/login">SIGN IN</NavBtnLink>
          </NavBtn>
        </NavMenu>
      </NavWrapper>
    </NavContainer>
  );
};

export default RegisterLoginNav;
