import React from 'react';
import styled from 'styled-components';
import { AiOutlineDown, AiOutlineUp } from 'react-icons/ai';
import { GlobalContext } from '../../GlobalContext';


const ProductWrapper = styled.article`
    width: 100%;
    height: 4em;
    padding: 0 8px;
    background: #31312eeb;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 8px;
    place-content: flex-start;
    position: relative;
    box-shadow: 0px 0px 5px 1px ${({theme}) => theme.colors.primary};

    p {
        font-size: 12px;
        text-align: initial;
        color: whitesmoke;
    }
`;

const ProductImage = styled.figure`
    width: 30px;
    margin-right: 8px;
    height: 30px;

    img {
        width: 100%;
        height: 100%;
    }
`;

const Description = styled.div`
    width: 150px;
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
`;

const QuantityBox = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;

    input {
        width: 20px;
        text-align: center;
        background-color: transparent;
        outline: none;
        border: none; 
        color: aliceblue;

        &:out-of-range {
            border: 1px solid red;
        }

        &::-webkit-inner-spin-button{
            -webkit-appearance: none; 
            margin: 0; 
        }

        &::-webkit-outer-spin-button{
            -webkit-appearance: none; 
            margin: 0; 
        }  
    }
`;

const Product = ({starShipInCart}) => {
    const {starShipsInCart, setStarShipsInCart, setTotalPrice, totalPrice, setTotalQuantity, totalQuantity} = React.useContext(GlobalContext);
    const [quantity, setQuantity] = React.useState(starShipInCart.quantity);
    const [price, setPrice] = React.useState(
        starShipInCart.cost_in_credits === 'unknown' ? 
            186 : Number(
        starShipInCart.cost_in_credits.slice(0,3)));


    function calculatePriceByQuantity() {
        return price * 1
    }

    function decrement() {
        if(quantity > 1) {
            setQuantity(quantity => quantity - 1) 
            setTotalQuantity(quantity => quantity - 1)
            setTotalPrice(totalPrice - calculatePriceByQuantity())
        }
    }

    function increment() {
        if(quantity < 9) {
            setQuantity(quantity => quantity + 1)
            setTotalQuantity(quantity => quantity + 1)
            setTotalPrice(totalPrice + calculatePriceByQuantity())

        }
    }
      
    function remove() {
        let FilteredList = starShipsInCart.filter(starShip => {
            if(starShip.name === starShipInCart.name) {

                setTotalPrice(totalPrice - (price * quantity))
                setTotalQuantity(totalQuantity - quantity)
            }
            
            return starShip.name !== starShipInCart.name;
        })

        setStarShipsInCart(FilteredList)
    }

    return (
        <ProductWrapper>
            <Remove 
                onClick={remove}
            >x
            </Remove>
            <ProductImage>
                <img src={`./images/${starShipInCart.name}.png`} />
            </ProductImage>
            <Description>
                <p>{starShipInCart.name}</p>
                <PriceWrapper>
                    <img src='./images/moeda.png' alt="Moeda mestre Yoda" />
                    <p>{starShipInCart.cost_in_credits === 'unknown' ? '186' : starShipInCart.cost_in_credits.slice(0,3)}</p>
                </PriceWrapper> 
            </Description>
            <QuantityBox>
                <span>
                    <AiOutlineDown 
                    style={{color: 'aliceblue', cursor: 'pointer'}} 
                    onClick={decrement} />
                </span>  
                <input 
                    type="number" 
                    min='1'
                    max='5'
                    value={quantity} 
                    readOnly
                    // onChange={(event) => {
                    //     setQuantity(event.target.value.slice(0,1))
                    // }}
                />  
                <span><AiOutlineUp style={{ color: 'aliceblue', cursor: 'pointer'}} onClick={increment}/></span>    
            </QuantityBox>
        </ProductWrapper>
    )
}

export default Product;