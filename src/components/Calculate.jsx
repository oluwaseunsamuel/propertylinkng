import { CheckCircleOutlined } from "@material-ui/icons";
import styled from "styled-components";

const Container = styled.div`
  background: #f7f6e9;
`;
const Wrapper = styled.div`
  padding: 80px 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  //justify-content: center;

  @media screen and (max-width: 768px) {
    padding: 80px 20px;
  }
`;
const Intro = styled.span`
  margin-bottom: 30px;
  font-size: 18px;
`;
const IntroTitle = styled.h1`
  font-size: 48px;
  font-weight: 400;

  @media screen and (max-width: 768px) {
    font-size: 34px;
    text-align: center;
  }
  @media screen and (max-width: 425px) {
    font-size: 28px;
  }
  @media screen and (max-width: 375px) {
    font-size: 24px;
  }
`;
const Desc = styled.p`
  margin-top: 28px;
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: 300;

  @media screen and (max-width: 425px) {
    text-align: center;
  }
  @media screen and (max-width: 375px) {
    font-size: 16px;
  }
`;
const PriceCalculate = styled.div`
  width: 75%;
  background-color: yellowgreen;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
const PriceCalculateWrap = styled.div`
  padding: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
const PriceCalculateRight = styled.div`
  flex: 1;
  @media screen and (max-width: 375px) {
    margin: 20px 0px;
  }
`;
const TitlePricing = styled.h2`
  font-size: 26px;
  margin-bottom: 20px;
  font-weight: 800;
  text-shadow: 1px 0.8px black;
`;
const TextLabel = styled.h2`
  font-size: 20px;
  margin-bottom: 10px;
  margin-top: 20px;
`;
const Input = styled.input`
  width: 90%;
  padding: 16px 50px;
  font-size: 18px;

  @media screen and (max-width: 375px) {
    padding: 10px 30px;
    font-size: 16px;
  }
`;
const RadioButton = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: start;
  flex-direction: row;
`;

const RadioItem = styled.span`
  margin-right: 32px;
  font-size: 18px;
  
`;

const PriceCalculateLeft = styled.div`
  flex: 1;
`;
const TitleSection = styled.h2`
  font-size: 26px;
  margin-bottom: 20px;
  font-weight: 800;
  text-shadow: 1px 0.8px black;

  @media screen and (max-width: 768px) {
    margin-top: 36px;
  }
`;
const PriceDesc = styled.span`
  font-size: 18px;
`;
const GetList = styled.span`
  margin-top: 20px;
  display: flex;
  margin-bottom: 20px;
  font-size: 16px;
`;
const Button = styled.button`
  padding: 10px 20px;
  background-color: darkgreen;
  color: white;
  font-size: 18px;
  cursor: pointer;
  border: none;
  outline: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #e67817;
    transition: all 0.3s ease-in-out;
  }
`;

const Calculate = () => {
  return (
    <Container>
      <Wrapper>
        <Intro>Payment</Intro>
        <IntroTitle>No Up-front Payment Required</IntroTitle>
        <Desc>Use our calculator below to see how the payment plan works</Desc>
        <PriceCalculate>
          <PriceCalculateWrap>
            <PriceCalculateRight>
              <TitlePricing>Pricing Calculator</TitlePricing>
              <TextLabel>Select an Estate Location</TextLabel>
              <Input type="select" placeholder="Pillar Gardens Estate" />
              <TextLabel>Number of Slot</TextLabel>
              <Input type="select" placeholder="2" />
              <TextLabel>Select Payment Option</TextLabel>
              <RadioButton>
                <RadioItem>
                  <Input type="radio" /> Daily
                </RadioItem>
                <RadioItem>
                  <Input type="radio" /> Weekly
                </RadioItem>
                <RadioItem>
                  <Input type="radio" /> Monthly
                </RadioItem>
                <RadioItem>
                  <Input type="radio" /> Once
                </RadioItem>
              </RadioButton>
            </PriceCalculateRight>
            <PriceCalculateLeft>
              <TitleSection>
                Select A Land, Pick A Payment Plan And Get Your Allocation Letter
              </TitleSection>
              <PriceDesc>
                You get the land in 12 months of consistent payment or half
                payment of total amount (while payment is ongoing) and
                including:
              </PriceDesc>
              <GetList>
                <CheckCircleOutlined style={{ marginRight: "10px" }} />
                All documents including Certificate of ownership (COFO)
              </GetList>
              <GetList>
                <CheckCircleOutlined style={{ marginRight: "10px" }} /> A slot
                is a equal to One plot of land (500sqm)
              </GetList>
              <GetList>
                <CheckCircleOutlined style={{ marginRight: "10px" }} />
                You can decide to switch payment option when you want
              </GetList>
              <GetList>
                <CheckCircleOutlined style={{ marginRight: "10px" }} />
                Location Visition is by booking
              </GetList>
              <Button>Own A Land Now</Button>
            </PriceCalculateLeft>
          </PriceCalculateWrap>
        </PriceCalculate>
      </Wrapper>
    </Container>
  );
};

export default Calculate;
