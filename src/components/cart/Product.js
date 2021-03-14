import React from 'react';
import styled from 'styled-components';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import { GlobalContext } from '../../GlobalContext';
import { mediaQueries } from '../../utils/mediaQueries';

const ProductWrapper = styled.article`
    width: 100%;
    height: 4em;
    padding: 0 8px;
    background: #31312eeb;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 6px;
    position: relative;
    box-shadow: 0px 0px 5px 1px ${({theme}) => theme.colors.primary};

    p {
        font-size: 12px;
        text-align: initial;
        color: whitesmoke;
    }
`;

const ProductImage = styled.figure`
    width: 60px;
    margin-right: 8px;
    height: 50px;

    img {
        width: 100%;
        height: 100%;
    }
`;

const Description = styled.div`
    width: 150px;
    margin-right: 8px;
`;

const PriceWrapper = styled.div`
    border-radius: 50%;
    margin-top: 4px;
    display: flex;
    align-items: center;

    img {
        width: 14px;
        height: 14px;
        margin-right: 4px;
    }

    p {
        color: yellow;
    }
`;

const Remove = styled.span`
    width: 20px;
    height: 20px;
    background-color: #b2afaa;
    position: absolute;
    top: -4px;
    right: -4px;
    border-radius: 50%;
    color: #292903eb;
    cursor: pointer;
    box-shadow: 0px 0px 5px 1px ${({theme}) => theme.colors.primary};
`;

const QuantityBox = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    
    ${mediaQueries('tablet')`
        margin-right: 30px;
    `};

    input {
        width: 35px;
        text-align: center;
        background-color: transparent;
        outline: none;
        border: none; 
        color: aliceblue;

        &:out-of-range {
            border: 1px solid red;
        }

        &::-webkit-inner-spin-button {
            -webkit-appearance: none; 
            margin: 0; 
        }

        &::-webkit-outer-spin-button{
            -webkit-appearance: none; 
            margin: 0; 
        }  
    }
`;

const Product = ({product}) => {
    const {
        cart, 
        setCart, 
    } = React.useContext(GlobalContext);

    function decrement(product) {
        let newCart = [...cart];
        let itemInCart = newCart.find((item) =>  product.name === item.name);

        if(itemInCart && itemInCart.quantity > 1) {
             itemInCart.quantity--;
        }   
        
        setCart(newCart)
    }

    function increment(product) {
        let newCart = [...cart];
        let itemInCart = newCart.find((item) =>  product.name === item.name);

        if(itemInCart && itemInCart.quantity < 9 ) {
             itemInCart.quantity++;
        }   
        
        setCart(newCart)
    }
      
    function remove() {
        let currentItems = cart.filter(starShip => starShip.name !== product.name)
        setCart(currentItems)
    }

    return (
        <ProductWrapper>
            <Remove 
                onClick={remove}
            >x
            </Remove>
            <ProductImage>
                <img src={`./images/${product.name}.png`} />
            </ProductImage>
            <Description>
                <p>{product.name}</p>
                <PriceWrapper>
                    <img src='./images/moeda.png' alt="Moeda mestre Yoda" />
                    <p>
                        { product.cost_in_credits === 'unknown' ? '186' : 
                          product.cost_in_credits.slice(0,3)}
                    </p>
                </PriceWrapper> 
            </Description>
            <QuantityBox>
                <span>
                    <AiOutlineDown 
                    style={{color: 'aliceblue', cursor: 'pointer'}} 
                    onClick={() => decrement(product)} />
                </span>  
                <input 
                    type="tel" 
                    value={product.quantity} 
                    readOnly
                    // onChange={(event) => {
                    //     setQuantity(quantity => event.target.value.slice(0,1))
                    // }}
                />  
                <span>
                    <AiOutlineUp 
                        style={{ color: 'aliceblue', cursor: 'pointer'}} 
                        onClick={() => increment(product)}/>
                </span>    
            </QuantityBox>
        </ProductWrapper>
    )
}

export default Product;