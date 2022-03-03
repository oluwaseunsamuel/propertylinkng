import styled from "styled-components";

const Container = styled.div`
  background-color: #111;
  color: lightgray;
`;
const Wrapper = styled.div`
  padding: 20px 60px;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    padding-right: 20px;
    padding-left: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
const List = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;

  @media screen and (max-width: 768px) {
    margin-bottom: 10px;
  }
`;
const ListItem = styled.li`
  margin-right: 20px;

  @media screen and (max-width: 768px) {
    margin-right: 15px;
  }
`;
const Copyright = styled.p`
  @media screen and (max-width: 768px) {
    text-align: center;
    margin-bottom: 10px;
  }
`;

const CopyRightFooter = () => {
  return (
    <Container>
      <Wrapper>
        <List>
          <ListItem>Guide</ListItem>
          <ListItem>Support</ListItem>
          <ListItem>API</ListItem>
          <ListItem>Community</ListItem>
        </List>
        <Copyright>
          Copyright © 2022 Property Link | All Right Reserved
        </Copyright>
      </Wrapper>
    </Container>
  );
};

export default CopyRightFooter;
