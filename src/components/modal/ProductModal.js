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

`;

const CloseModal = styled.span`
    width: 20px;
    height: 20px;
    background-color: #b2afaa;
    position: absolute;
    top: 16px;
    right: 30px;
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
    //    margin-right: 0px;

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

    const {setProductModalIsOpen, starShipClicked, setStarShipsInCart, starShipsInCart, setTotalPrice, isIncludedInCart, setTotalQuantity} = React.useContext(GlobalContext);



    function includeShip(starShipClicked) {
        if(!isIncludedInCart(starShipClicked)) {
            setStarShipsInCart([...starShipsInCart, starShipClicked]);
            return
        }
        
    }
    
    return (
        <ProductModalWrapper >
            <CloseModal onClick={() => setProductModalIsOpen(false)}>x</CloseModal>
            <ImageWrapper>
                <img src={`./images/Sentinel-class landing craft.png`} />
            </ImageWrapper>

            <DescriptionWrapper>
                <div>
                    <Title>{starShipClicked.name}</Title>
                </div>
                <InfosBox>
                    <p>Comprimento: {starShipClicked.length}</p> 
                    <p>Capacidade de carga: {starShipClicked.consumables}</p>
                    <p>Tripulação: {starShipClicked.cargo_capacity}</p> 
                    <p>Velocidade atmosférica máxima: {starShipClicked.max_atmosphering_speed}</p>
                    <p>Fabricante: {starShipClicked.manufacturer}</p> 
                    <p>Modelo: {starShipClicked.model}</p> 
                    <p>Capacidade de passageiros: {starShipClicked.passengers}</p>
                    <p>Classe: {starShipClicked.starship_class}</p>
                </InfosBox>
                <AddBtn 
                    disabled={!!isIncludedInCart(starShipClicked)}
                    onClick={() =>  {
                    setProductModalIsOpen(false)
                    includeShip(starShipClicked)
                    setTotalQuantity(quantity => quantity + 1)
                    setTotalPrice(price => price += 
                        starShipClicked.cost_in_credits === 'unknown' ? 186 :
                        Number(starShipClicked.cost_in_credits.slice(0,3))
                    )    
                }}>
                    {
                    !!isIncludedInCart(starShipClicked) ?
                    'Você já adicionou esse produto' : 
                    'adicionar ao carrinho'
                    }</AddBtn>
            </DescriptionWrapper>
        </ProductModalWrapper>
    )
}

export default ProductModal;