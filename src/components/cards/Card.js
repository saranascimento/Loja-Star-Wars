import React from 'react';
import styled from 'styled-components';
import { GlobalContext } from '../../GlobalContext';
import {mediaQueries} from '../../utils/mediaQueries';
import {RiShoppingBag2Fill} from 'react-icons/ri';

const Overlay = styled.div`
    position: absolute;
    transition: all .3s ease;
    opacity: 0;
    background-color: #41414191;
    width: 100%;
    height: 100%;
`;

const BtnSeeMore = styled.button`
        color: yellow;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        background-color: transparent;
        border: 1px solid yellow;
        padding: 8px;
        cursor: pointer;
        outline: none;
        border-radius: 3px;

        &:hover{
            background: yellow;
            color: #434343;
            
        }
`;

const CardWrapper = styled.div`
   height: 18em;
    display: flex;  
    flex-direction: column;
    width: calc(33% - 20px);
    border: 1px solid ${({theme}) => theme.colors.primary};
    position: relative;
    margin: 10px;
    overflow: hidden;

    &:hover {
        border: 4px solid  ${({theme}) => theme.colors.primary};
        box-shadow: 0px 3px 19px -3px ${({theme}) => theme.colors.primary};
        border-radius: 20px;
    }

    &:hover ${Overlay} {
        opacity: 1;
    }

    ${mediaQueries("laptop")`
        width: calc(50% - 20px);
    `};

    ${mediaQueries("mobile")`
        width: calc(100% - 20px);
    `};

    
`;

const ImageWrapper = styled.div`
    width: 100%;
    height: 65%;
    background-color: burlywood;

    img {
        width: 100%;
        height: 100%;
    }
`;
const Infos = styled.div`
    width: 100%;
    height: 35%;
    background-color: #060606;
    color: #ffe500;
    padding: 1em;

    h3 {
        color: #aca58c;
    }
`;

const Price = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 6px 0;

    span {
        width: 25px;
        height: 25px;
        display: inline-block;
        margin-right: 4px;
    }

    img {
        width: 100%;
        height: 100%;
    }
`;
const AddedToCart = styled.span`
    position: absolute;
    top: 4px;
    left: 4px;
    color: #888888bd;
    display: none;
`;

const Card = ({product}) => {
    
    const { setProductModalIsOpen, setProductClicked, isIncludedInCart } = React.useContext(GlobalContext)

    if(product.length < 0) return null

    return (
        <>
            <CardWrapper>
                <AddedToCart 
                    style={{
                        display: !!isIncludedInCart(product) ?  
                        'block' : 
                        'none'
                    }}
                >
                   
                    <RiShoppingBag2Fill size='2em' />
                </AddedToCart>

                <ImageWrapper>
                    <img src={`./images/${product.name}.png`} />
                </ImageWrapper>

                <Infos>
                    <h3> {product.name}</h3>
                    <Price>
                        <span><img src='./images/moeda.png' /></span>
                        <p>{product.cost_in_credits === 'unknown' ? '186' : product.cost_in_credits.slice(0,3)}</p>
                    </Price>
                    </Infos>
                <Overlay>
                    <BtnSeeMore 
                       onClick={() => {
                           setProductModalIsOpen(true)
                           setProductClicked(product)
                        } }>Ver Mais
                    </BtnSeeMore>
                </Overlay>
            </CardWrapper>
        </>
    )
}

export default Card;