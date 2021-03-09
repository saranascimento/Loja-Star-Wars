import React from 'react';
import styled from 'styled-components';
import { GlobalContext } from '../../GlobalContext';
import Products from './Products';
import {mediaQueries} from '../../utils/mediaQueries'

const CartWrapper = styled.section`
    height: 420px;
    background: ${({theme}) => theme.colors.secondary};
    width: 30%;
    margin-left: auto;
    margin-right: 20px;
    position: relative;
    border-radius: 8px;
    margin-top: 10px;
    border: 1px solid ${({theme}) => theme.colors.primary};
    

    ${mediaQueries("tablet")`
        width: 80%;
        margin: auto;
        align-items: center;
        flex-direction: column;
        overflow: hidden;
        height: 95px;
        width: 80%;
    `};
`;


const CartTop = styled.div`
    height: 60px;
    background: black;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 8px;
    margin-bottom: 16px;
    box-shadow: 0px 1px 7px 0px ${({theme}) => theme.colors.primary};
    border-radius: 10px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    color: ${({theme}) => theme.colors.light};

    ${mediaQueries('tablet')`
        position: relative;
        z-index: 20;
    `};
   
`;

const TotalPrice = styled.p`
    display: inherit;
    height: 20px;

    span {
        width: 20px;
        height: 20px;
        margin-right: 4px;
    }

    img {
        width: 100%;
        height: 100%;
    }
`;

const CartBody = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: scroll;
    background: ${({theme}) => theme.colors.secundary};
    

    h1 {
        opacity: 0.3;
        width: 103px;
        font-size: 18px;
        margin-left: 10px;
        color: #aca58c;
        
    }

    &::-webkit-scrollbar {
        width: 10px;              
    }
    
    &::-webkit-scrollbar-track {
        background:  ${({theme}) => theme.colors.secondary};
    }
    
    &::-webkit-scrollbar-thumb {
        background-color: ${({theme}) => theme.colors.primary};
        border-radius: 5px;
    }
`;

const ImageWrapper = styled.div`
    height: 291px;
    width: 200px;
    position: sticky;
    top: 0;

    img {
        height: 100%;
        width: 100%;
        opacity: 0.3;
    }
`;

const BtnFinish = styled.button`
    position: absolute;
    bottom: -1px;
    width: 100%;
    left: 0;
    padding: 20px;
    background: ${({theme}) => theme.colors.primary};
    color: whitesmoke;
    cursor: pointer;
    border: 0;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
    outline: none;

    &:disabled {
        cursor: no-drop;
    }
`; 
 


const Cart = () => {
    const { theme, totalPrice} = React.useContext(GlobalContext);
    
    let [activeMobileCart, changeActiveMobileCart] = React.useState(false);

    const updateActive = (activeMobileCart) => {
      if (window.matchMedia('(max-width: 768px)').matches) {
        changeActiveMobileCart(!activeMobileCart);
      }
    };

    return (
        <CartWrapper className={`${activeMobileCart ? 'activeCart' : ''}`} >
            <CartTop 
                onClick={() => updateActive(activeMobileCart)}
            >
                <p>Meu Carrinho</p>
                <TotalPrice><span><img src='./images/moeda.png' alt="Moeda mestre Yoda" /></span> {totalPrice}</TotalPrice>
            </CartTop>
            <CartBody>
                <h1>{theme.text.cart}</h1>
                <ImageWrapper> 
                    <img src={theme.pictures.cart}/>
                </ImageWrapper>
                <Products />
            </CartBody>
            <BtnFinish
                disabled={totalPrice === 0 }
            >
               Finalizar compra
            </BtnFinish>
        </CartWrapper>
    )
}

export default Cart;