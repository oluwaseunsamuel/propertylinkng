import { RadioButtonChecked, PeopleAlt } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import BannerImage from "../assets/aboutpic.jpg";
import Announcement from "../components/Announcement";
import Contact from "../components/Contact";
import CopyRightFooter from "../components/CopyRightFooter";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Newsletter from "../components/NewsLetter";
import Sidebar from "../components/Sidebar";

const AboutIntro = styled.div`
  display: flex;
  align-items: center;
  padding-right: 60px;
  padding-left: 60px;
  padding-top: 30px;
  padding-bottom: 80px;
 

  @media screen and (max-width: 768px) {
    padding-right: 20px;
    padding-left: 20px;
  }
`;

const IntroBanner = styled.div`
  flex: 1;
  background: darkgreen;
  height: 60vh;
  width: 80%;
  color: white;
  display: flex;
  align-items: start;
  flex-direction: column;
  padding: 30px 40px;
  border-radius: 10px 50px;
`;

const Title = styled.h3`
  color: #e67817;
  font-weight: 700;
  font-size: 26px;
  margin-bottom: 30px;
`;

const Heading = styled.h1`
  margin-bottom: 30px;
  font-weight: 500;
`;

const Desc = styled.p`
  line-height: 1.4;
`;

const IntroBlank = styled.div`
  flex: 1;
`;

const OurStory = styled.div`
  display: flex;
  align-items: center;
  background: #f7f6e9;
  padding-top: 80px;
  padding-bottom: 100px;
  padding-right: 60px;
  padding-left: 60px;

  @media screen and (max-width: 768px) {
    padding-right: 20px;
    padding-left: 20px;
  }
`;

const StoryDetail = styled.div`
  flex: 1;
`;

const StoryTitle = styled.h1`
  padding-bottom: 25px;
  color: darkgreen;
  font-size: 40px;
`;

const StoryDesc = styled.p`
  line-height: 1.4;
  margin-bottom: 30px;
`;

const StoryTag = styled.div``;

const TagTitle = styled.h2`
  margin-bottom: 12px;
  color: #e67817;
`;

const TagDesc = styled.p`
  margin-bottom: 18px;
`;

const StoryPic = styled.div`
  flex: 1;
`;

const StoryImage = styled.div`
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
  max-height: 750px;
`;

const OurValueSection = styled.div`
  padding-top: 80px;
  padding-bottom: 100px;
  padding-right: 60px;
  padding-left: 60px;

  @media screen and (max-width: 768px) {
    padding-right: 20px;
    padding-left: 20px;
  }
`;

const OurCoreValue = styled.h1`
 display: flex;
 align-items: center;
 justify-content: center;
 margin-bottom: 38px;
 color: darkgreen;
`

const CoreValues = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  //align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
`

const ValueItem = styled.span`
  display: flex;
  font-size: 20px;
`

const OurTeamSection = styled.div`
  padding-top: 80px;
  padding-bottom: 100px;
  padding-right: 60px;
  padding-left: 60px;
  background: #f7f6e9;

  @media screen and (max-width: 768px) {
    padding-right: 20px;
    padding-left: 20px;
  }
`;

const OurTeamHead = styled.h1`
 display: flex;
 align-items: center;
 justify-content: center;
 margin-bottom: 30px;
 color: darkgreen;
`

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Announcement />
      <Navbar toggle={toggle} />
      <AboutIntro>
        <IntroBanner>
          <Title>About Us</Title>
          <Heading>PROPERTY LINK ESTATE NIGERIA LIMITED</Heading>
          <Desc>
            At PROPERTY LINK, our mission is what drives us to do everything
            possible to expand human potential. We do that by creating
            opportunities through development of products and services that are
            acceptable and relevant to human and community needs, using our
            creative and diverse team to make positive impact in Nigeria and
            Africa at large.
          </Desc>
        </IntroBanner>
        <IntroBlank></IntroBlank>
      </AboutIntro>
      <OurStory>
        <StoryDetail>
          <StoryTitle>Our Story</StoryTitle>
          <StoryDesc>
            We are a real estate investment firm positioned to deliver a cutting
            edge and competitive real estate solutions to our valued clients. We
            engage in real estate development, brokerage, and management. We
            offer good and flexible payment plans on all our products and
            services.
            <br />
            Our client includes individuals, co-operative societies, Government
            institutions and Companies. We are one of the largest independent
            property management company in the marketplace, providing the most
            sophisticated property solutions for all types of investors.
            <br />
            Our strength stems from our over-riding commitment to work in
            partnership with our clients. Clients' expectations and satisfaction
            is paramount to and undoubtedly the reason why we are the industry
            leader in real estate development and management.
            <br />
            Our proven track record ensures that Clients receive value for money
            in the services we provide. We at Propertylink Real Estate
            Investment Limited® handle all services with a very high level of
            professionalism, as client satisfaction is our topmost priority, and
            at no extra or hidden charges.
          </StoryDesc>
          <StoryTag>
            <TagTitle>
              <RadioButtonChecked style={{ marginRight: "10px" }} />
              OUR VISION
            </TagTitle>
            <TagDesc>
              To be a Leading and Preferred Real Estate firm, providing
              excellent Return on investment.
            </TagDesc>
            <TagTitle>
              <RadioButtonChecked style={{ marginRight: "10px" }} />
              OUR MISSION
            </TagTitle>
            <TagDesc>
              To be a trusted Real Estate services provider, guided by our core
              values, in developing a better world for today and tomorrow
            </TagDesc>
          </StoryTag>
        </StoryDetail>
        <StoryPic>
          <StoryImage>
            <Img src={BannerImage} />
          </StoryImage>
        </StoryPic>
      </OurStory>
      <OurValueSection>
        <OurCoreValue>Our Core Values</OurCoreValue>
        <CoreValues>
          <ValueItem>
            <PeopleAlt style={{ marginRight: "10px", color: "#e67817" }} />C -
            Customer-focused
          </ValueItem>
          <ValueItem>
            <PeopleAlt style={{ marginRight: "10px", color: "#e67817" }} />A -
            Accountability
          </ValueItem>
          <ValueItem>
            <PeopleAlt style={{ marginRight: "10px", color: "#e67817" }} />P -
            Professionalism
          </ValueItem>
          <ValueItem>
            <PeopleAlt style={{ marginRight: "10px", color: "#e67817" }} />T -
            Teamwork
          </ValueItem>
        </CoreValues>
        <CoreValues>
          <ValueItem>
            <PeopleAlt style={{ marginRight: "10px", color: "#e67817" }} />A -
            Ardent
          </ValueItem>
          <ValueItem>
            <PeopleAlt style={{ marginRight: "10px", color: "#e67817" }} />I -
            Integrity
          </ValueItem>
          <ValueItem>
            <PeopleAlt style={{ marginRight: "10px", color: "#e67817" }} />N -
            New Idea
          </ValueItem>
        </CoreValues>
      </OurValueSection>
      <OurTeamSection>
        <OurTeamHead>Meet Our Team</OurTeamHead>
      </OurTeamSection>
      <Contact />
      <Newsletter />
      <Footer />
      <CopyRightFooter />
    </>
  );
};

export default About;
