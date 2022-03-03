import React, { useState, useRef, useEffect } from "react";
import styled, { css } from "styled-components";
import { Button } from "../ButtonStyling";
import { ArrowForward, ArrowBack, ArrowForwardIos } from "@material-ui/icons";

const HeroSection = styled.section`
  height: 100vh;
  max-height: 1100px;
  position: relative;
  overflow: hidden;

  @media screen and (min-width: 769px) {
    display: none;
  }
`;

const HeroWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  position: relative;
`;

const HeroSlide = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
`;

const HeroSlider = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &::before {
    content: "";
    position: absolute;
    z-index: 2;
    width: 100%;
    height: 100vh;
    bottom: 0vh;
    left: 0;
    overflow: hidden;
    opacity: 0.9;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 0.6) 0%,
      rgba(0, 0, 0, 0.6) 50%,
      rgba(0, 0, 0, 0.8) 100%
    );
  }
`;

const HeroImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
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

const HeroContent = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  flex-direction: column;
  max-width: 1400px;
  width: calc(100% - 100px);
  color: #fff;

  h1 {
    font-size: clamp(1rem, 8vw, 2.2rem);
    font-weight: 500;
    text-transform: uppercase;
    text-shadow: 0px 0px 30px rgba(0, 0, 0, 0.6);
    text-align: left;
    margin-bottom: 0.8rem;
  }

  p {
    font-size: clamp(0.5rem, 4vw, 1.05rem);
    max-width: 440px;
    margin-bottom: 1.2rem;
    text-shadow: 0px 0px 30px rgba(0, 0, 0, 0.6);
  }
`;
const HeroBtnWrapper = styled.div`
  margin-top: 15px;
  display: flex;
`;

const ArrowsForward = styled(ArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

const ArrowsRight = styled(ArrowForwardIos)`
  margin-left: 8px;
  font-size: 20px;
`;

const SliderButton = styled.div`
  position: absolute;
  bottom: 100px;
  right: 30px;
  display: flex;
  z-index: 10;
  margin-right: 143px;

  @media screen and (max-width: 768px) {
    margin-right: -15px;
  }

  @media screen and (max-width: 425px) {
    margin-right: -5px;
    bottom: 60px;
  }
`;

const arrowButtons = css`
  width: 40px;
  height: 40px;
  color: #fff;
  cursor: pointer;
  background: #006400;
  border-radius: 40px;
  padding: 10px;
  margin-right: 1rem;
  user-select: none;
  transition: 0.3s;

  &:hover {
    background: transparent;
    color: #006400;
    border: 1px solid #006400;
    transform: scale(1.05);
  }
`;

const PrevArrow = styled(ArrowBack)`
  ${arrowButtons}
`;

const NextArrow = styled(ArrowForward)`
  ${arrowButtons}
`;

const SlideMobile = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const [hover, setHover] = useState(false);
  const length = slides.length;
  const timeout = useRef(null);

  useEffect(() => {
    const nextSlide = () => {
      setCurrent((current) => (current === length - 1 ? 0 : current + 1));
    };

    timeout.current = setTimeout(nextSlide, 6500);

    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, [current, length]);

  const nextSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    }

    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <>
      <HeroSection>
        <HeroWrapper>
          {slides.map((slide, index) => {
            return (
              <HeroSlide key={index}>
                {index === current && (
                  <HeroSlider>
                    <HeroImage src={slide.image} alt={slide.alt} />
                    <Container>
                      <HeroContent>
                        <h1>{slide.title}</h1>
                        <p>{slide.subtitle}</p>
                        <HeroBtnWrapper>
                          <Button
                            to="/viewestate"
                            onMouseEnter={onHover}
                            onMouseLeave={onHover}
                            primary="true"
                            dark="true"
                            css={`
                              max-width: 200px;
                            `}
                          >
                            {slide.label}{" "}
                            {hover ? <ArrowsForward /> : <ArrowsRight />}
                          </Button>
                        </HeroBtnWrapper>
                      </HeroContent>
                    </Container>
                  </HeroSlider>
                )}
              </HeroSlide>
            );
          })}
          <SliderButton>
            <PrevArrow onClick={prevSlide} style={{ fontSize: "32px" }} />
            <NextArrow onClick={nextSlide} style={{ fontSize: "32px" }} />
          </SliderButton>
        </HeroWrapper>
      </HeroSection>
    </>
  );
};

export default SlideMobile;
