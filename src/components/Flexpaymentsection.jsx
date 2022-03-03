import { Link } from "react-router-dom";
import Slider2 from "../assets/slider2.jpg";
import styled from "styled-components";
import { Filter1Outlined, Filter2, Filter3 } from "@material-ui/icons";

const InfoSec = styled.div`
  position: relative;
  padding: 100px 0px;
  background: ${({ lightBg }) => (lightBg ? "#fff" : "#f7f6e9")};
`;
const Container = styled.div`
  z-index: 10;
  width: 100%;
  margin-right: auto;
  margin-left: auto;
  padding-right: 60px;
  padding-left: 60px;

  @media screen and (max-width: 768px) {
    padding-right: 20px;
    padding-left: 20px;
  }
`;

const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px 15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
`;

const InfoColumn = styled.div`
  margin-bottom: 15px;
  padding-right: 15px;
  padding-left: 15px;
  flex: 1;
  max-width: 50%;
  flex-basis: 50%;

  @media screen and (max-width: 768px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
  }
`;

const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0px;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

const TopLine = styled.div`
  font-size: 18px;
  font-weight: 700;
  line-height: 16px;
  letter-spacing: 1.4px;
  margin-bottom: 16px;
  color: #006400;
`;

const Title = styled.h1`
  margin-bottom: 24px;
  font-size: 40px;
  line-height: 1.1;

  @media screen and (max-width: 768px) {
    font-size: 36px;
  }
`;

const DescTitle = styled.h3`
  margin-bottom: 10px;
  color: #006400;
`;

const Desc = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 14px;
  line-height: 18px;
`;

const Button = styled.button`
  padding: 10px 26px;
  font-size: 16px;
  background-color: darkgreen;
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

const ImgWrapper = styled.div`
  max-width: 600px;
  display: flex;
  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};
`;

const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 600px;
`;

const Flexpaymentsection = ({ lightBg, imgStart, primary }) => {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine>Daily, Weekly, Monthly or One-Off</TopLine>
                <Title>
                  Own A Land In 3 Easy Steps - How Flexi Real Estate Works.
                </Title>
                <DescTitle>
                  <Filter1Outlined style={{ marginRight: "10px" }} /> Select an
                  Estate Location
                </DescTitle>
                <Desc>
                  At the top of a button, you can select the estate location
                  that best suits your taste and you pocket from our exquisite
                  Estate locations
                </Desc>
                <DescTitle>
                  <Filter2 style={{ marginRight: "10px" }} />
                  Pick a payment plan
                </DescTitle>
                <Desc>
                  How would you like to pay? Select a payment method that best
                  suits you and dictates the flow.
                </Desc>
                <DescTitle>
                  <Filter3 style={{ marginRight: "10px" }} />
                  Get your Allocation letter
                </DescTitle>
                <Desc>
                  We give you an instant Allocation letter telling you what you've
                  signed up for and even your proposed date of allocation.
                </Desc>
                <Link to="/viewestate">
                  <Button big fontBig primary={primary}>
                    VIEW ESTATE
                  </Button>
                </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper>
                <Img src={Slider2} alt="SliderImage" />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default Flexpaymentsection;
