import { Send } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  background: #f7f6e9;
`;
const Wrapper = styled.div`
  padding: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  @media screen and (max-width: 768px){
    padding-right: 20px;
    padding-left: 20px;
  }
`;

const Title = styled.h1`
  font-size: 50px;
  margin-bottom: 20px;
`;

const Desc = styled.p`
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 25px;

  @media screen and (max-width: 768px) {
    text-align: center;
  }
  @media screen and (max-width: 425px) {
    font-size: 14px;
  }
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;

  @media screen and (max-width: 768px) {
    justify-content: center;
    width: 70%;
  }
  @media screen and (max-width: 425px) {
    width: 70%;
  }
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  cursor: pointer;
  border: none;
  background-color: darkgreen;
  color: white;
`;

const NewsLetter = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Newsletter</Title>
        <Desc>
          Be the first to know of our various offer by providing us your email
          and will get in touch
        </Desc>
        <InputContainer>
          <Input placeholder="Your Email" />
          <Button>
            <Send />
          </Button>
        </InputContainer>
      </Wrapper>
    </Container>
  );
};

export default NewsLetter;
