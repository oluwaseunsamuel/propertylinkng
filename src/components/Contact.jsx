import { Email, LocationOn, Phone, WhatsApp } from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 90%;
`;
const Wrapper = styled.div`
  height: 100%;
  padding: 80px 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    padding-left: 20px;
    padding-right: 20px;
  }
  @media only screen and (max-width: 425px) {
    flex-direction: column;
  }
`;
const FormContainer = styled.div`
  width: 50%;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
  @media screen and (max-width: 425px) {
    width: 100%;
  }
`;
const Title = styled.h1`
  margin: 50px;
  margin-top: 0;
  @media screen and (max-width: 768px) {
    margin: 20px;
  }
  @media screen and (max-width: 425px) {
    margin: 20px;
  }
`;
const Form = styled.form`
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  @media screen and (max-width: 425px) {
    flex-direction: column;
  }
`;
const LeftForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 20px;
  @media screen and (max-width: 768px) {
    height:50%
    margin-right: 0;
  }
  @media screen and (max-width: 425px) {
    height: 50%;
    margin-right: 0;
  }
`;
const RightForm = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    height: 50%;
  }
  @media screen and (max-width: 425px) {
    height: 50%;
  }
`;
const Input = styled.input`
  width: 300px;
  padding: 15px;

  @media screen and (max-width: 768px) {
    padding: 5px;
  }
  @media screen and (max-width: 425px) {
    padding: 5px;
  }
`;
const TextArea = styled.textarea`
  width: 300px;
  height: 62%;
  padding: 15px;

  @media screen and (max-width: 768px) {
    padding: 5px;
    margin-top: 20px;
    margin-left: -20px;
  }
  @media screen and (max-width: 425px) {
    padding: 5px;
    margin-top: 20px;
    margin-left: 3px;
  }
`;
const Button = styled.button`
  border: none;
  padding: 15px;
  background-color: darkgreen;
  color: white;
  font-size: 20px;
  margin-top: 20px;
  cursor: pointer;
  border: none;
  outline: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #e67817;
    transition: all 0.3s ease-in-out;
  }

  @media screen and (max-width: 768px) {
    padding: 5px;
    margin-top: 20px;
    margin-left: -20px;
    font-size: 14px;
  }
  @media screen and (max-width: 425px) {
    padding: 5px;
    margin-top: 20px;
    margin-left: 3px;
  }
`;

const AddressContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  padding-left: 30px;
  //align-items: center;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 30px;
    padding-left: 10px;
  }
  @media screen and (max-width: 425px) {
    width: 100%;
  }
`;
const AddressIntroText = styled.p`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 400;
  //padding-left: 60px;
  @media screen and (max-width: 768px) {
    padding: 5px;
    margin-top: 20px;
  }
  @media screen and (max-width: 425px) {
    padding: 5px;
    margin-top: 20px;
  }
`;
const AddressItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
`;
const AddressText = styled.span`
  margin-right: 15px;
  @media screen and (max-width: 768px) {
    font-size: 14px;
    margin-right: 5px;
  }
  @media screen and (max-width: 425px) {
    font-size: 14px;
    margin-right: 5px;
  }
`;

const Contact = () => {
  return (
    <Container>
      <Wrapper>
        <FormContainer>
          <Title>
            Question? <br /> You Can Get in Touch
          </Title>
          <Form>
            <LeftForm>
              <Input placeholder="Name" />
              <Input placeholder="Email" />
              <Input placeholder="Subject" />
            </LeftForm>
            <RightForm>
              <TextArea placeholder="Your Message" />
              <Button>Send</Button>
            </RightForm>
          </Form>
        </FormContainer>
        <AddressContainer>
          <AddressIntroText>
            Visit any of our offices in lagos or contact us via our support
            channels. Our representatives are always available to support you.
          </AddressIntroText>
          <AddressItem>
            <LocationOn style={{ marginRight: "14px" }} />
            <AddressText>
              Plot1B Block 77, Basheer Shittu Magodo GRA, Phase II, Shangisha,
              Lagos, Nigeria
            </AddressText>
          </AddressItem>
          <AddressItem>
            <Phone style={{ marginRight: "14px" }} />
            <AddressText>+234(0)810 235 0235</AddressText>
            <AddressText>+234(0)912 108 4846</AddressText>
            <AddressText>+234(0)818 010 5981</AddressText>
          </AddressItem>
          <AddressItem>
            <Email style={{ marginRight: "14px" }} />
            <AddressText>info@propertylinkng.com</AddressText>
          </AddressItem>
          <AddressItem>
            <WhatsApp style={{ marginRight: "14px" }} />
            <AddressText>+234(0)810 235 0235</AddressText>
          </AddressItem>
        </AddressContainer>
      </Wrapper>
    </Container>
  );
};

export default Contact;
