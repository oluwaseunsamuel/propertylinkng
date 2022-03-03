import Announcement from "../components/Announcement";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import styled from "styled-components";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import CopyRightFooter from "../components/CopyRightFooter";
import Banner from "../assets/viewestate1.jpeg";
import { Add, Remove } from "@material-ui/icons";

const Container = styled.div`
  background-color: #f7fff5;
  padding: 50px 60px;

  @media screen and (max-width: 380px) {
    padding: 50px 10px;
  }
`;

const Wrapper = styled.div`
  display: flex;

  @media screen and (max-width: 380px) {
    flex-direction: column;
  }
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  align-items: center;
  object-fit: cover;

  @media screen and (max-width: 380px) {
    height: 40vh;
  }
`;

const InfoContainer = styled.div`
  flex: 1;
  flex-direction: row;
`;

const Title = styled.h1`
  font-weight: 500;
  font-size: 40px;
`;

const Desc = styled.p`
  margin: 20px 0px;
  font-size: 16px;
`;

const FilterContainer = styled.div`
  margin: 30px 0px;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 300;
`;

const FilterFlex = styled.select`
  margin-left: 10px;
  padding: 10px 15px;
  font-size: 18px;
`;

const FilterFlexOption = styled.option`
  //font-size: 18px;
`;

const Price = styled.span`
  font-weight: 300;
  font-size: 36px;
`;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 30px 0px;
  font-size: 20px;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
  background-color: white;
`;

const Button = styled.button`
  padding: 10px 15px;
  background-color: white;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  border: 1px solid darkgreen;
`;

const SingleProperty = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <Container>
        <Wrapper>
          <ImgContainer>
            <Image src={Banner} />
          </ImgContainer>
          <InfoContainer>
            <Title>Penial Coast Garden (PCG) Estate</Title>
            <Desc>
              The Estate is a seaside sanctuary located in a beach front community in the heart of Ibeju-Lekki.
              <br />
              It is situated at about 20 minutes drive from Eleko Junction and about 5 minutes drive from DANGOTE'S Multi-Billion Dollars Refinery and Petrochemical Company which is in the new commercial and business hub of Lagos. Other notable establishment are The Lekki Free Trade Zone, The Lekki Deep seaport, The Lekki/Epe International Airport and The Dubai/Lagos smart city project.
              <br />
              Peniel Coast Gardens is a mix of eloquence, impeccable liftstyle and affordable living in a serene environment that suits your convenience.
            </Desc>
            <FilterContainer>
              <Filter>
                <FilterTitle> Select Flexi Payment Plan</FilterTitle>
                <FilterFlex>
                  <FilterFlexOption>Full Payment</FilterFlexOption>
                  <FilterFlexOption>Plan A (3 Months)</FilterFlexOption>
                  <FilterFlexOption>Plan B (6 Months)</FilterFlexOption>
                  <FilterFlexOption>Plan C (9 Months)</FilterFlexOption>
                  <FilterFlexOption>Plan D (12 Months)</FilterFlexOption>
                </FilterFlex>
              </Filter>
            </FilterContainer>
            <Price>N7 000 000</Price>
            <AddContainer>
              <AmountContainer>
                <Remove />
                <Amount>1</Amount>
                <Add />
              </AmountContainer>
            </AddContainer>
            <Button>ADD TO CART</Button>
          </InfoContainer>
        </Wrapper>
      </Container>
      <Contact />
      <NewsLetter />
      <Footer />
      <CopyRightFooter />
    </>
  );
};

export default SingleProperty;
