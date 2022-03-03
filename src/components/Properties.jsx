import React from "react";
import styled from "styled-components";
import { PopularPropperties } from "../Data";
import Propertyitem from "./Propertyitem";

const PropertySec = styled.div`
  padding-left: 60px;
  padding-right: 60px;
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Properties = () => {
  return (
    <PropertySec>
      <Container>
        {PopularPropperties.map((item) => (
          <Propertyitem item={item} key={item.id} />
        ))}
      </Container>
    </PropertySec>
  );
};

export default Properties;
