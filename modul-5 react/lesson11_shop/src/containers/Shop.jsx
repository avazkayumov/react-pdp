import React from 'react'
import styled from 'styled-components';
import { useState } from 'react'

import Cart from '../components/Cart';
import Products from './Products';

export default function Shop() {
    const [cart, setCart] = useState({
      products: []
    }) 

    function addToCard(id, price) {
        const data = {
          id: id,
          count: 1,
          price: price
        }

        const copyState = {...cart}
        copyState.products.push(data)
        setCart(copyState) 
    }  

    function changeCount(action, id) {
        const cartCopy = {...cart}
        const index = cart.products.findIndex(product => product.id === id)

        if (action === "+") {
          cartCopy.products[index].count += 1
        }
        else if (cartCopy.products[index].count <= 1) return

        else {
          cartCopy.products[index].count -= 1
        }

        setCart(cartCopy)
    }

  return (
      <Wrapper>
            <Products addToCard={addToCard} />
            <Cart cartData={cart} changeCount={changeCount}/>
      </Wrapper>
  )
}


const Wrapper = styled.div`
  background: #d7d5d5;
  min-height: 100vh;
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding-top: 40px ;
  display: flex;
  justify-content: space-between;
  padding: 22px;
`
