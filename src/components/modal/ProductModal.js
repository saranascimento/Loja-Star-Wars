import React from 'react';

import styled, { keyframes } from 'styled-components';
import { GlobalContext } from '../../GlobalContext';
import { mediaQueries } from '../../utils/mediaQueries';


const animation = keyframes`
      to {
    opacity: initial;
    transform: initial;
  }
`

const ProductModalWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    opacity: 0;
    transform: scale(0.8);
    animation: ${animation} 0.3s forwards;
    position: relative;
`;

const CloseModal = styled.span`
    width: 20px;
    height: 20px;
    background-color: #b2afaa;
    position: absolute;
    top: -25px;
    right: -20px;
    border-radius: 50%;
    color: #292903eb;
    cursor: pointer;
    text-align: center;
`;

const DescriptionWrapper = styled.div`
   flex: 2 1 180px;

   
`;

const Title = styled.h1`
        color: yellow;

        ${mediaQueries('mobile')`
        padding-top: 20px;
   `};
`;

const InfosBox = styled.div`
    color: aliceblue;
    height: auto;
    margin: 16px 0px;


    p {
        line-height: 1.7em;
        font-size: 1.25em;
        
        ${mediaQueries('laptop')`
            line-height: 1.8em;
             font-size: 1em;
        `};
    }
`;

const ImageWrapper = styled.div`
    flex: 1 1 160px;
    border: 2px solid yellow;
    height: 60%;
    margin-right: 20px;

    ${mediaQueries('laptop')`
       height: 40%;
    `};

    ${mediaQueries('mobile')`
       height: 25%;
    `};

    img {
        width: 100%;
        height: 100%;
    }
`;



const AddBtn = styled.button`
    background-color: #b2afaa;
    border: none;
    padding: 10px;
    border-radius: 4px;
    outline: none;
    cursor: pointer;

    &:hover {
        background-color: #757509;
        color: aliceblue;  
    }

    &:disabled {
        background-color: #757509;
        color: aliceblue; 
        cursor: no-drop;
    }
`;

const ProductModal = () => {

    const {setProductModalIsOpen, productClicked, setCart, cart, setTotalPrice, isIncludedInCart, setTotalQuantity} = React.useContext(GlobalContext);



    const addToCart = (product) => {
        let newCart = [...cart];
        let itemInCart = newCart.find((item) =>  product.name === item.name);

        if(itemInCart && itemInCart.quantity < 9 ) {
             itemInCart.quantity++;
        }   
        else if(!itemInCart) {
                itemInCart = {
                    ...product,
                    quantity: 1,
            };
           newCart.push(itemInCart);
        }
        setCart(newCart)
    }
    
    return (
        <ProductModalWrapper >
            <CloseModal onClick={() => setProductModalIsOpen(false)}>x</CloseModal>
            <ImageWrapper>
                <img src={`./images/Sentinel-class landing craft.png`} />
            </ImageWrapper>

            <DescriptionWrapper>
                <div>
                    <Title>{productClicked.name}</Title>
                </div>
                <InfosBox>
                    <p>Comprimento: {productClicked.length}</p> 
                    <p>Capacidade de carga: {productClicked.consumables}</p>
                    <p>Tripulação: {productClicked.cargo_capacity}</p> 
                    <p>Velocidade atmosférica máxima: {productClicked.max_atmosphering_speed}</p>
                    <p>Fabricante: {productClicked.manufacturer}</p> 
                    <p>Modelo: {productClicked.model}</p> 
                    <p>Capacidade de passageiros: {productClicked.passengers}</p>
                    <p>Classe: {productClicked.starship_class}</p>
                </InfosBox>
                <AddBtn 
                    className={`${!!isIncludedInCart(productClicked) ? 'btnAdicionado' : ''}`}
                    onClick={() => addToCart(productClicked)}>
                    {
                    !!isIncludedInCart(productClicked) ?
                    'Você adicionou esse produto' : 
                    'adicionar ao carrinho'
                    }
                    </AddBtn>
            </DescriptionWrapper>
        </ProductModalWrapper>
    )
}

export default ProductModal;