import styled from "styled-components";
import RegisterLoginNav from "../components/RegisterLoginNav";
import CopyRightFooter from "../components/CopyRightFooter";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: #036403;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  @media screen and (max-width: 768px) {
    width: 75%;
  }
  @media screen and (max-width: 425px) {
    width: 75%;
  }
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  font-size: 14px;
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 10px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  cursor: pointer;
  background-color: darkgreen;
  color: white;
  font-size: 14px;
`;

const Register = () => {
  return (
    <>
      <RegisterLoginNav />
      <Container>
        <Wrapper>
          <Title>CREATE AN ACCOUNT</Title>
          <Form>
            <Input placeholder="First Name" />
            <Input placeholder="Last Name" />
            <Input placeholder="Phone Number" />
            <Input placeholder="Email" />
            <Input placeholder="Password" />
            <Input placeholder="Confirm Password" />
            <Agreement>
              By creating an account, I consent to the processing of my personal
              data in accordance with the <b>PRIVACY POLICY</b>
            </Agreement>
            <Button>CREATE</Button>
          </Form>
        </Wrapper>
      </Container>
      <CopyRightFooter />
    </>
  );
};

export default Register;
