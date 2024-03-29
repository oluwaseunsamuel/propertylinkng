//import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  position: relative;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const Info = styled.div`
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
  font-size: 30px;
  font-weight: 700;
  z-index: 10;
`;
const Button = styled.button`
  border: none;
  padding: 10px 16px;
  background-color: white;
  color: black;
  cursor: pointer;
  font-weight: 500;
  z-index: 10;
`;

const Categoryitem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>VIEW NOW</Button>
      </Info>
    </Container>
  );
};

export default Categoryitem;
