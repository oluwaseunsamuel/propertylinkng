import { useState } from "react";
import styled from "styled-components";
import { FiberManualRecord } from "@material-ui/icons";
import ProjPict from "../assets/projectmanager.jpg"
import Announcement from "../components/Announcement";
import Contact from "../components/Contact";
import CopyRightFooter from "../components/CopyRightFooter";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import ServiceInfoB from "../components/ServiceInfoB";
import ServiceInfoSection from "../components/ServiceInfoSection";
import Sidebar from "../components/Sidebar";
import { serviceobjSection, serviceobjSection2, serviceobjSection3, serviceobjSection4 } from "../Data";

const ServiceIntro = styled.div`
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

const ServiceProInfo = styled.div`
  position: relative;
  background: #f7f6e9;
  padding-top: 80px;
  padding-bottom: 100px;
`;

const ServiceProSec = styled.div`
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

const ServiceRow = styled.div`
  display: flex;
  margin: 0 -15px 15px -15px;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: row;
`;

const ServiceColumn = styled.div`
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
`

const TextWrap = styled.div`
  max-width: 540px;
  padding-top: 0px;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    padding-bottom: 65px;
  }
`

const ProjTitle = styled.h1`
  margin-bottom: 24px;
  font-size: 40px;
  line-height: 1.1;
  color: darkgreen;

  @media screen and (max-width: 768px) {
    font-size: 36px;
  }
`

const ProjDesc = styled.p`
  line-height: 1.3;
  margin-bottom: 20px;
`

const SubProjTitle = styled.h3`
  margin-bottom: 8px;
  font-size: 22px;
  color: #e67817;
`

const SubProjTitleB = styled.h3`
  margin-top: 20px;
  font-size: 22px;
  color: #e67817;
`

const SubProjDesc = styled.p`
  max-width: 550px;
  margin-bottom: 20px;
  line-height: 20px;
`

const SubProjDescA = styled.p`
  display: flex;
  margin-bottom: 3px;
`

const ImgWrapper = styled.div`
  max-width: 600px;
  display: flex;
  justify-content: flex-end;
`

const Img = styled.img`
  padding-right: 0;
  border: 0;
  max-width: 100%;
  vertical-align: middle;
  display: inline-block;
  max-height: 600px;
`

const Services = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Announcement />
      <Navbar toggle={toggle} />
      <ServiceIntro>
        <IntroBanner>
          <Title>Our Services</Title>
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
      </ServiceIntro>
      <ServiceInfoSection {...serviceobjSection}/>
      <ServiceInfoSection {...serviceobjSection2}/>
      <ServiceInfoB  {...serviceobjSection3}/>
      <ServiceInfoB {...serviceobjSection4}/>
      <ServiceProInfo>
        <ServiceProSec>
          <ServiceRow>
            <ServiceColumn>
              <TextWrap>
                <ProjTitle>Property Management</ProjTitle>
                <ProjDesc>The need for landlords, landowners and property investors to generate maximum returns from their assets is increasingly important and property management advice is invaluable for doing this. At Gilgal homes a subsidiary of Propertylink Real Estate Investment Limited, Our property management department provides a full spectrum of management services aimed at owners of all types of commercial and residential property in Nigeria and abroad. By focusing our efforts on optimizing the value of your assets in a cost-effective way, to achieve optimal returns on investment while reducing outgoings.</ProjDesc>
                <SubProjTitle>But why us?</SubProjTitle>
                <SubProjDesc>A valid question. Our property management department focus on securing and retaining tenancies, ensuring that the highest levels of communication, transparency and tenant satisfaction are maintained at all times. And because we know that each client has unique requirements – as do their properties and tenancies, we create bespoke solutions that suit individual targets. What this means for both owners and occupiers? Improved operations, healthy returns on investment and value added.</SubProjDesc>
                <SubProjTitle>Our sectors include but not limited to;</SubProjTitle>
                <SubProjDescA><FiberManualRecord style={{ marginRight: "10px" }} />Retail units</SubProjDescA>
                <SubProjDescA><FiberManualRecord style={{ marginRight: "10px" }} />Offices</SubProjDescA>
                <SubProjDescA><FiberManualRecord style={{ marginRight: "10px" }} />Industrial and logistics</SubProjDescA>
                <SubProjDescA><FiberManualRecord style={{ marginRight: "10px" }} />Commercial property management</SubProjDescA>
                <SubProjDescA><FiberManualRecord style={{ marginRight: "10px" }} />Residential property management</SubProjDescA>
                <SubProjTitleB>Our property management services also include but not limited to;</SubProjTitleB>
                <SubProjDescA><FiberManualRecord style={{ marginRight: "10px" }} />Letting and renewal of leases/tenancies units</SubProjDescA>
                <SubProjDescA><FiberManualRecord style={{ marginRight: "10px" }} />Service charge administration</SubProjDescA>
                <SubProjDescA><FiberManualRecord style={{ marginRight: "10px" }} />Tenement rates/Land use charge</SubProjDescA>
                <SubProjDescA><FiberManualRecord style={{ marginRight: "10px" }} />Negotiations with rating authorities</SubProjDescA>
                <SubProjDescA><FiberManualRecord style={{ marginRight: "10px" }} />Lease documentation and administration</SubProjDescA>
                <SubProjDescA><FiberManualRecord style={{ marginRight: "10px" }} />Rent management</SubProjDescA>
              </TextWrap>
            </ServiceColumn>
             <ServiceColumn>
              <ImgWrapper>
                <Img src={ProjPict} alt="ServiceImage" />
              </ImgWrapper>
            </ServiceColumn>
          </ServiceRow>
        </ServiceProSec>
      </ServiceProInfo>
      <Contact />
      <NewsLetter />
      <Footer />
      <CopyRightFooter />
    </>
  );
};

export default Services;
