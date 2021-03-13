import React from 'react';
import styled from 'styled-components';
import { GlobalContext } from '../../GlobalContext';
import Products from './Products';
import {mediaQueries} from '../../utils/mediaQueries';
import {FaArrowLeft} from 'react-icons/fa'

const CartWrapper = styled.section`
    height: 485px;
    background: ${({theme}) => theme.colors.secondary};
    width: 30%;
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
        display: none;
    `};
`;


const CartTop = styled.div`
    height: 60px;
    background: black;
    display: flex;
    align-items: center;
    padding: 0 8px;
    margin-bottom: 16px;
    box-shadow: 0px 1px 7px 0px ${({theme}) => theme.colors.primary};
    border-radius: 10px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    color: ${({theme}) => theme.colors.light};

    p {
        margin: 2px 8px 0px 8px;
        font-size: 18px;
    }
   
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

const CartBottom = styled.div`
    position: absolute;
    bottom: 55px;
    left: 0;
    right: 0;
    box-shadow: 0px 1px 7px 0px black;
    justify-content: space-between;
    height: 62px;
    background: ${({theme}) => theme.colors.primary};
    display: flex;
    color: white;
    z-index: 10;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;

    p {
        font-weight: 700;
        font-size: 12px;
    }
`;

const Total = styled.div`
    width: 100%;
    justify-content: space-between;
    display: flex;

    p {
        font-weight: 400;
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

    &:hover {
        background-color: ${({theme}) => theme.colors.hover}
    }

    &:disabled {
        cursor: no-drop;
    }
`; 

const Cart = () => {
    const { theme, totalPrice, setThankfulModalIsOpen, totalQuantity, mobileCartIsOpen, setMobileCartIsOpen, isMobile } = React.useContext(GlobalContext);

    return (
        <CartWrapper 
            className={`${ mobileCartIsOpen ? 'mobileCart' : ''}`}>
            <CartTop>
                {isMobile()  ? 
                    <FaArrowLeft  
                        onClick={() => {
                            setMobileCartIsOpen(false)
                            console.log('cliquei')
                        }}
                    /> : null} 
                <p>
                    Meu Carrinho </p>
            </CartTop>
            <CartBody>
                <h1>{theme.text.cart}</h1>
                <ImageWrapper> 
                    <img src={theme.pictures.cart}/>
                </ImageWrapper>
                <Products />
               
            </CartBody>
            <CartBottom >
                <p>Seu pedido:</p>
                <Total>
                    <p>{totalQuantity} {totalQuantity > 1? 'Naves Espaciais' : 'Nave espacial'}</p>
                    <TotalPrice>Total: {totalPrice}</TotalPrice>
                </Total>
            </CartBottom>
            <BtnFinish
                disabled={totalPrice === 0 }
                onClick={() => {
                    setThankfulModalIsOpen(true)
                }}
            >
               Finalizar compra
            </BtnFinish>
        </CartWrapper>
    )
}

export default Cart;