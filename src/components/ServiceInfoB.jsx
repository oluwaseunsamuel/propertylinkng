import React from "react";
import styled from "styled-components";

const InfoSec = styled.div`
  color: #fff;
  padding: 100px 0;
  background: ${({ lightBg }) => (lightBg ? "#fff" : "#f7f6e9")};
`;

const Container = styled.div`
  z-index: 1;
  padding-right: 60px;
  padding-left: 60px;

  @media screen and (max-width: 768px) {
    padding-right: 20px;
    padding-left: 20px;
  }
`;

const InfoRow = styled.div`
  display: flex;
  margin: 0 -15px -15px -15px;
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
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`;

const TopLine = styled.p`
  color: ${({ lightTopLine }) => (lightTopLine ? "#fff" : "#e67817")};
  font-size: 20px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 20px;
`;

const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  color: ${({ lightText }) => (lightText ? "#fff" : "darkgreen")};
`;

const Subtitle = styled.p`
  max-width: 500px;
  margin-bottom: 10px;
  line-height: 24px;
  color: ${({ lightTextDesc }) => (lightTextDesc ? "#fff" : "black")};
`;

const Subtitle1 = styled.p`
  max-width: 500px;
  margin-bottom: 10px;
  line-height: 24px;
  color: ${({ lightTextDesc1 }) => (lightTextDesc1 ? "#fff" : "black")};
`;

const ImgWrapper = styled.div`
  max-width: 555px;
  z-index: 1;
  display: flex;
  justify-content: ${({ start }) => (start ? "flex-start" : "flex-end")};
`;

const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 650px;
`;

const ServiceInfoB = ({
  lightBg,
  imgStart,
  lightTopLine,
  lightText,
  lightTextDesc,
  lightTextDesc1,
  topLine,
  headline,
  description,
  description1,
  img,
  alt,
  start,
}) => {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <Subtitle1 lightTextDesc1={lightTextDesc1}>
                  {description1}
                </Subtitle1>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default ServiceInfoB;
