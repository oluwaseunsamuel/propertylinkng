import { Link } from "react-router-dom";
import Servicepict from "../assets/servicepict.jpg";
import styled from "styled-components";
import { Bookmark } from "@material-ui/icons";

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
  margin-bottom: 20px;
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
  margin-top: 12px;
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

const Servicesection = ({ lightBg, imgStart, primary }) => {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine>We Offer Services in this following</TopLine>
                <Title>
                  Our Services Range from This, More and Reason why us
                </Title>
                <DescTitle>
                  <Bookmark style={{ marginRight: "10px" }} /> Construction And
                  Design
                </DescTitle>
                <Desc>
                  Real estate shouldn’t just be about property sales and
                  consultancy; it should portray Concepts, Aesthetics and
                  Culture of a built environment
                </Desc>
                <DescTitle>
                  <Bookmark style={{ marginRight: "10px" }} />
                  Property Management
                </DescTitle>
                <Desc>
                  The need for landlords, landowners and property investors to
                  generate maximum returns from their assets is increasingly
                  important and property management advice
                </Desc>
                <DescTitle>
                  <Bookmark style={{ marginRight: "10px" }} />
                  Property Sale, Rental And Development
                </DescTitle>
                <Desc>
                  Gilgal Homes is a subsidiary of Propertylink Real Estate
                  Investment Limited offering full-service real estate
                  brokerage.
                </Desc>
                <DescTitle>
                  <Bookmark style={{ marginRight: "10px" }} />
                  Financial Services Consulting
                </DescTitle>
                <Desc>
                  At Propertylink Real Estate Investment Limited, our service
                  programs have been carefully formulated to help you understand
                  even the most complicated financial products in the simplest
                  possible terms
                </Desc>
                <Link to="/services">
                  <Button big fontBig primary={primary}>
                    READ DETAILS
                  </Button>
                </Link>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper>
                <Img src={Servicepict} alt="ServiceImage" />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default Servicesection;
