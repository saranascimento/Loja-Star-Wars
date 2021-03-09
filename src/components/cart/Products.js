import React from 'react';
import { GlobalContext } from '../../GlobalContext';
import styled from 'styled-components';
import Product from './Product';

const ProductsWrapper = styled.div`
    position: absolute;
    width: 100%;
    top: 0;
    display: flex;
    align-items: center;
    padding: 0 10px;
    flex-direction: column;
    padding: 4px  10px 0 16px;
`;

const Products = () => {
    const { starShipsInCart} = React.useContext(GlobalContext)
    if(starShipsInCart.length < 0) return null

    return (
        <ProductsWrapper>
            {starShipsInCart.map((starShipInCart) => {
                   return <Product starShipInCart={starShipInCart}  key={starShipInCart.name}/>
            })}
        </ProductsWrapper>
    )
}

export default Products;