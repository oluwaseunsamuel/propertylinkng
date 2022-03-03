import styled from "styled-components";

const Container = styled.div`
  height: 35px;
  background: darkgreen;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 500;

  @media screen and (max-width: 375px) {
    font-size: 12px;
  }
`;

const Announcement = () => {
  return <Container>Take Advantage of our offer why it last!</Container>;
};

export default Announcement;
