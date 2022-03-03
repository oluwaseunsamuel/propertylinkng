import styled from "styled-components";
import { categories } from "../Data";
import CategoryItem from "./Categoryitem";

const Container = styled.div`
  display: flex;
  padding: 100px 60px;
  background: #f7f6e9;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    padding-right: 20px;
    padding-left: 20px;
    flex-direction: column;
  }
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
