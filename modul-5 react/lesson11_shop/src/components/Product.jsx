import styled from "styled-components";
import { ReactComponent as AddBtn } from "../assets/add.svg";

function Product({ id, image, title, infoProduct, price, addToCard }) {
  return (
    <StyledProduct>
      <div key={id}>
        <ImgWrapper>
          <img src={image} alt="" />
        </ImgWrapper>

        <h4>{title}</h4>
        <p>{infoProduct}</p>
        <div className="add-btn_wrapper">
          <p>${price}</p>
          <button onClick={() => addToCard(id, price)}>
            <AddBtn />
          </button>
        </div>
      </div>
    </StyledProduct>
  );
}

export default Product;

const StyledProduct = styled.div`
  h4 {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #1a1f16;
  }

  p {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    letter-spacing: -0.02em;
    color: #60695c;
  }

  div {
    display: flex;
    gap: 12px;
    flex-direction: column;
    align-items: center;
  }

  div:nth-child(5n + 5) {
    grid-column: span 2;
  }

  .add-btn_wrapper {
    display: flex;
    gap: 20px;
    flex-direction: row;

    p {
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      color: #1a1f16;
    }
  }

  button {
    background-color: black;
    border-radius: 9px;
    padding: 9px;
    cursor: pointer;
  }
`;

const ImgWrapper = styled.div`
  overflow: hidden;
  padding: 16px;
  background: #ffffff;
  border-radius: 22px;
  width: 100%;
`;
