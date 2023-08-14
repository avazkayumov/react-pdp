import React from "react";
import styled from "styled-components";
import Product from "../components/Product";
import { products } from "../data/productsArray";
import InputSearch from "../components/InputSearch";
import { useState } from "react";

const Products = ({addToCard}) => {
  const [search, setSearch] = useState("");

  return (
    <Wrapper>
      <InputSearch searchProducts={({ target }) => setSearch(target.value)} />
      <StyledWrapper>
        {products
          .filter((product) =>
            product.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((product) => (
            <div>
              <Product key={product.id} {...product} addToCard={addToCard} />
            </div>
          ))}
      </StyledWrapper>
    </Wrapper>
  );
};

export default Products;

const Wrapper = styled.div`
`;

const StyledWrapper = styled.div`
  max-width: 942px;
  width: 100%;
  display: grid;
  gap: 30px;
  grid-template-columns: repeat(4, 191px);
  margin-top: 50px;

  div:nth-child(5n+5) {
    grid-column: span 2;
  }
`;
