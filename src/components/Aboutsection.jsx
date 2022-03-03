import { Link } from "react-router-dom";
import Aboutpic from "../assets/aboutpic.jpg";
import styled from "styled-components";
import { FiberSmartRecord } from "@material-ui/icons";

const InfoSec = styled.div`
  position: relative;
  padding: 100px 0px;
  background: ${({ lightBg }) => (lightBg ? "#fff" : "#f7fff5")};
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
  font-size: 20px;
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

const Aboutsection = ({ lightBg, imgStart, primary }) => {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine>Knowing About Us</TopLine>
                <Title>Our Story of Been The Best in what we do</Title>
                <DescTitle>
                  <FiberSmartRecord style={{ marginRight: "10px" }} /> Our
                  Vision
                </DescTitle>
                <Desc>
                  To be a Leading and Preferred Real Estate firm, providing
                  excellent Return on investment.
                </Desc>
                <DescTitle>
                  <FiberSmartRecord style={{ marginRight: "10px" }} />
                  Our Mission
                </DescTitle>
                <Desc>
                  To be a trusted Real Estate services provider, guided by our
                  core values, in developing a better world for today and
                  tomorrow.
                </Desc>
                <DescTitle>
                  <FiberSmartRecord style={{ marginRight: "10px" }} />
                  Our plan to been the best
                </DescTitle>
                <Desc>
                  We are a real estate investment firm positioned to deliver a
                  cutting edge and competitive real estate solutions to our
                  valued clients......
                </Desc>
                <Link to="/about">
                  <Button big fontBig primary={primary}>
                    READ MORE
                  </Button>
                </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper>
                <Img src={Aboutpic} alt="aboutpic" />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default Aboutsection;
