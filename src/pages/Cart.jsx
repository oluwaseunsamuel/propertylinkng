import Cart1 from "../assets/cart1.jpeg";
import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Contact from "../components/Contact";
import CopyRightFooter from "../components/CopyRightFooter";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";

const CartContainer = styled.div`
  background-color: #f7f6e9;
`;

const Wrapper = styled.div`
  padding: 60px;

  @media screen and (max-width: 768px) {
    padding-right: 20px;
    padding-left: 20px;
  }
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "darkgreen" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const Info = styled.div`
  flex: 3;
  margin-top: 50px;
`;

const Property = styled.div`
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 425px) {
    flex-direction: column;
  }
`;

const PropertyDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
  border-radius: 15px;
`;

const Detail = styled.div`
  font-size: 16px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  margin: 5px 15px;
  justify-content: space-around;
`;

const PropertyName = styled.span``;

const PropertyLocation = styled.span``;

const PropertySlot = styled.span``;

const PropertyUnit = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 5px 15px;
  align-items: center;
  justify-content: center;
`;

const PropertyAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const PropertyAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  @media screen and (max-width: 425px) {
    margin: 10px 15px;
  }
`;

const PropertyPrice = styled.div`
  font-size: 24px;
  font-weight: 200;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 2px;
  margin: 20px 0px;
`;

const Summary = styled.span`
  flex: 1;
  margin-top: 50px;
  border: 0.5px solid lightgrey;
  border-radius: 10px;
  padding: 20px;
  height: 70%;
  box-shadow: 3px 3px 3px 2px rgba(0, 0, 0, 0.2);
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => (props.type === "total" ? "24px" : "18px")};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const SummaryBotton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: darkgreen;
  color: white;
  cursor: pointer;
`;

const Cart = () => {
  return (
    <>
      <Announcement />
      <Navbar />
      <CartContainer>
        <Wrapper>
          <Title>CART DETAILS</Title>
          <Top>
            <TopButton>CONTINUE SHOPPING</TopButton>
            <TopTexts>
              <TopText>Shopping Carts (2)</TopText>
              <TopText>Your Wishlist (0)</TopText>
            </TopTexts>
            <TopButton type="filled">CHECKOUT NOW</TopButton>
          </Top>
          <Bottom>
            <Info>
              <Property>
                <PropertyDetail>
                  <Image src={Cart1} />
                  <Detail>
                    <PropertyName>
                      <b>Property:</b> PENIEL COAST GARDENS(PCG)
                    </PropertyName>
                    <PropertyLocation>
                      <b>Location:</b> Ibeju, Lekki, Lagos
                    </PropertyLocation>
                    <PropertySlot>
                      <b>Slots:</b> (1 slot of land = 1 plot of land)
                    </PropertySlot>
                    <PropertyUnit>
                      <b>Size:</b> (500sqm)
                    </PropertyUnit>
                    <PropertyUnit>
                      <b>Payment Plan:</b> Full Payment
                    </PropertyUnit>
                  </Detail>
                </PropertyDetail>
                <PriceDetail>
                  <PropertyAmountContainer>
                    <Add styled={{ fontSize: "12px" }} />
                    <PropertyAmount>1</PropertyAmount>
                    <Remove styled={{ fontSize: "12px" }} />
                  </PropertyAmountContainer>
                  <PropertyPrice>N7 000 000</PropertyPrice>
                </PriceDetail>
              </Property>
              <Hr />
              <Property>
                <PropertyDetail>
                  <Image src={Cart1} />
                  <Detail>
                    <PropertyName>
                      <b>Property:</b> COUNTRY VILLA ESTATE
                    </PropertyName>
                    <PropertyLocation>
                      <b>Location:</b> Kobape, Abeokuta, Ogun
                    </PropertyLocation>
                    <PropertySlot>
                      <b>Slots:</b> (1 slot of land = 1 plot of land)
                    </PropertySlot>
                    <PropertyUnit>
                      <b>Size:</b> (60sqm)
                    </PropertyUnit>
                    <PropertyUnit>
                      <b>Payment Plan:</b> Daily Payment Plan
                    </PropertyUnit>
                  </Detail>
                </PropertyDetail>
                <PriceDetail>
                  <PropertyAmountContainer>
                    <Add styled={{ fontSize: "12px" }} />
                    <PropertyAmount>1</PropertyAmount>
                    <Remove styled={{ fontSize: "12px" }} />
                  </PropertyAmountContainer>
                  <PropertyPrice>N1 700</PropertyPrice>
                </PriceDetail>
              </Property>
            </Info>
            <Summary>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>Subtotal</SummaryItemText>
                <SummaryItemPrice> N7 001 700 </SummaryItemPrice>
              </SummaryItem>
              <SummaryItem>
                <SummaryItemText>Tax Charges</SummaryItemText>
                <SummaryItemPrice> - </SummaryItemPrice>
              </SummaryItem>
              <hr />
              <SummaryItem type="total">
                <SummaryItemText>Total</SummaryItemText>
                <SummaryItemPrice> N7 001 700 </SummaryItemPrice>
              </SummaryItem>
              <SummaryBotton>CHECKOUT NOW</SummaryBotton>
            </Summary>
          </Bottom>
        </Wrapper>
      </CartContainer>
      <Contact />
      <NewsLetter />
      <Footer />
      <CopyRightFooter />
    </>
  );
};

export default Cart;
