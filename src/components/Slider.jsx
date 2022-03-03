import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import { sliderItems } from "../Data";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  position: relative;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #1eb31e;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "50px"};
  right: ${(props) => props.direction === "right" && "50px"};
  margin: auto;
  cursor: pointer;
  z-index: 2;
`;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: #${(props) => props.bg};

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 90%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 80px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const Topline = styled.h3`
  margin-bottom: 12px;
  font-size: 22px;
`;

const Title = styled.h1`
  font-size: 45px;
`;

const Desc = styled.p`
  margin: 25px 0;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 1px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #006400;
  cursor: pointer;
  color: white;

  border: none;
  outline: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #e67817;
    transition: all 0.3s ease-in-out;
  }
`;

const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
    } else {
      setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Arrow direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide bg={item.bg}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Topline>{item.topline}</Topline>
              <Title>{item.title}</Title>
              <Desc>{item.desc}</Desc>
              <Link to="/viewestate">
                <Button>VIEW ESTATE</Button>
              </Link>
            </InfoContainer>
          </Slide>
        ))}
      </Wrapper>
      <Arrow direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
