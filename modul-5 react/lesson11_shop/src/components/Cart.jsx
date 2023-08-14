import styled from "styled-components";
import { products } from "../data/productsArray";

function Cart({ cartData, changeCount }) {

  function showItems() {
    const result = []

    for (let cartItem of cartData.products) {
      const index = products.findIndex(product => product.id === cartItem.id)
      
      result.push({...products[index], count: cartItem.count})
    }

    return result;
  }
  
  showItems()

  return (
    <Wrapper>
      <h2>Cart</h2>

      {showItems().map((product) => {
        return (
          <div className="cart" key={product.id}>
            <div className="img_title">
              <img src={product.image} alt="" />
              <div>
                <p className="title">{product.title}</p>
                <p className="price">Price: {product.price}</p>
                <p className="total">Total: {product.price * product.count}</p>
              </div>
            </div>
              <div className="cart_btns">
                <button className="plus" id={product.id} onClick={() => changeCount("+", product.id)}> + </button>
                <p className="count">{product.count}</p>
                <button className="minus" id={product.id} onClick={() => changeCount("-", product.id)}> - </button>
              </div>
          </div>
        );
      })}
    </Wrapper>
  );
}

export default Cart;

const Wrapper = styled.div`
  /* position: sticky;
  top: 0;
  height: 100vh;
  overflow: scroll; */
  padding-top: 50px;
  margin: 12px;
  text-align: center;
  width: 100%;
  max-width: 370px;
  display: flex;
  gap: 20px;
  flex-direction: column;

  .cart {
    margin: 12px;
    width: 100%;
    max-width: 375px;
    background-color: white;
    min-height: 100px;
    display: flex;
    justify-content: space-between;
    padding: 12px;
    img {
      width: 70px;
      object-fit: cover;
    }

    .cart_btns {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    button {
      width: 24px;
      height: 24px;
      background-color: #000000;
      border: none;
      color: white;
      font-size: 20px;
    }
    .minus {
      font-size: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  .img_title {
    display: flex;
    gap: 16px;
  }

  .title {
    text-align: start;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #000000;
  }
  .price {
    text-align: start;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;
    color: #AC6803;
  }
  .total {
    text-align: start;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;
    color: #0379AC;
  }

  .count {
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: #000000;
  }
`;


