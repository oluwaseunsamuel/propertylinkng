import Logo from "../assets/companylogo.png";
import styled from "styled-components";
import {
  Facebook,
  Instagram,
  MailOutline,
  Phone,
  Room,
  Twitter,
  YouTube,
} from "@material-ui/icons";

const Container = styled.div`
  display: flex;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    max-width: 75%;
  }
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 60px;

  @media screen and (max-width: 768px) {
    padding: 20px;
  }
`;
const LogoContainer = styled.div``;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  cursor: pointer;
`;

const Center = styled.div`
  flex: 1;
  padding: 60px;

  @media screen and (max-width: 768px) {
    padding: 20px;
  }
`;

const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;

const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;

const Right = styled.div`
  flex: 1;
  padding: 60px;

  @media screen and (max-width: 768px) {
    padding: 20px;
  }
`;

const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;

const Payment = styled.img``;

const Footer = () => {
  return (
    <Container>
      <Left>
        <LogoContainer>
          <img alt="logo" src={Logo} style={{ height: "50px" }} />
        </LogoContainer>
        <Desc>
          We are a real estate investment firm positioned to deliver a cutting
          edge and competitive real estate solutions to our valued clients. We
          engage in real estate development, brokerage, and management. We offer
          good and flexible payment plans on all our products and services.
        </Desc>
        <SocialContainer>
          <SocialIcon color="385999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E4405f">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Twitter />
          </SocialIcon>
          <SocialIcon color="E60023">
            <YouTube />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Price Calculation</ListItem>
          <ListItem>Contact Us</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Home</ListItem>
          <ListItem>Estate View</ListItem>
          <ListItem>Our Services</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>About Us</ListItem>
          <ListItem>News Letter</ListItem>
          <ListItem>Terms </ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          Plot1B Blk 77, Basheer Shittu Magodo GRA, Phase II, Shangisha, Lagos.
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} /> +2348102350235,
          +2348102350235
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />
          contact@propertylink.com
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
