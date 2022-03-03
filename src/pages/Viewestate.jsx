import { useState } from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Contact from "../components/Contact";
import CopyRightFooter from "../components/CopyRightFooter";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import Properties from "../components/Properties";
import Sidebar from "../components/Sidebar";

const Container = styled.div`
  background-color: #f7f6e9;
  padding-left: 60px;
  padding-right: 60px;
  padding-top: 30px;
  padding-bottom: 80px;

  @media screen and (max-width: 768px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

const Title = styled.h1`
  font-weight: 600;
`;

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Filter = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;

  @media screen and (max-width: 380px) {
    width: 0px 20px;
    display: flex;
    flex-direction: column;
  }
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 700;
  margin-right: 20px;

  @media screen and (max-width: 380px) {
    margin-right: 0px;
  }
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;

  @media screen and (max-width: 380px) {
    margin: 10px 0px;
  }
`;

const Option = styled.option``;

const Viewestate = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Announcement />
      <Navbar toggle={toggle} />
      <Container>
        <Title>View Property</Title>
        <FilterContainer>
          <Filter>
            <FilterText>Filter Location:</FilterText>
            <Select>
              <Option disabled>Property Locations</Option>
              <Option>Peniel Coast Gardens, Ibeju-Lekki, Lagos State</Option>
              <Option>Country Villa Estate, Kobape, Ogun State</Option>
            </Select>
            <Select>
              <Option disabled>Slot(s)/Size</Option>
              <Option>1 / 500sqm</Option>
              <Option>2 / 1000sqm</Option>
              <Option>3 / 1500sqm</Option>
              <Option>4 / 2000sqm</Option>
              <Option>5 / 2500sqm</Option>
              <Option>6 / 3000sqm</Option>
              <Option>More ....</Option>
            </Select>
          </Filter>
          <Filter>
            <FilterText>Filter Flex Plan:</FilterText>
            <Select>
              <Option disabled>Payment Plans</Option>
              <Option>Full Payment</Option>
              <Option>3 Months Plan</Option>
              <Option>6 Months Plan</Option>
              <Option>9 Months Plan</Option>
              <Option>12 Month Plan</Option>
            </Select>
          </Filter>
        </FilterContainer>
      </Container>
      <Properties />
      <Contact />
      <NewsLetter />
      <Footer />
      <CopyRightFooter />
    </>
  );
};

export default Viewestate;
