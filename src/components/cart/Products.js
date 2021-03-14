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
    const { cart } = React.useContext(GlobalContext)
    if(cart.length < 0) return null

    return (
        <ProductsWrapper>
            {cart.map((product, index) => {
                   return <Product product={product}  key={index}/>
            })}
        </ProductsWrapper>
    )
}

export default Products;