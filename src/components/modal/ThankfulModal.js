import React from 'react';

import styled from 'styled-components';
import leia from '../../styles/themes/leia';
import yoda from '../../styles/themes/yoda';
import vader from '../../styles/themes/vader';
import { GlobalContext } from '../../GlobalContext';
import { mediaQueries } from '../../utils/mediaQueries';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  position: relative;
  color: aliceblue;
    background-color: ${({theme}) => theme.colors.secondary};
    border: 4px solid ${({theme}) => theme.colors.primary};
    border-radius: 8px;
    box-shadow: 0px 3px 19px -3px ${({theme}) => theme.colors.primary} inset;

  ${mediaQueries('mobile')`
       flex-direction: column;
    `};
`;

const Remove = styled.span`
       width: 35px;
    height: 35px;
    background-color: #b2afaa;
    position: absolute;
    top: 18px;
    right: 16px;
    border-radius: 50%;
    color: #292903eb;
    cursor: pointer;
    padding: 8px 13px;
    font-weight: 600;
`;

const YodaImageWrapper = styled.div`
    width: 200px;
    height: 100%;
    flex: 1 1 220px;
        height: 70%;
    
    ${mediaQueries('tablet')`
      height: 40%;
    `};

   
    
    img {
        height: 100%;
        width: 100%;
        transform: scaleX(-1);
    }
`;

const VaderImageWrapper = styled.div`
      width: 159px;
     height: 190px;
     margin-top: 8px;
     flex: 1 1 220px;
        height: 70%;

        ${mediaQueries('tablet')`
            height: 40%;
        `};
    
    img {
        height: 100%;
        width: 100%;
    }
`;

const LeiaImageWrapper = styled.div`
        width: 160px;
        height: 180px;
        margin-top: 8px;
        align-self: center;
        transform: scaleX(-1);
        flex: 1 1 220px;
        height: 70%;

    ${mediaQueries('tablet')`
      height: 40%;
    `};
    
    img {
        height: 100%;
        width: 100%;
    }
`;

const TextWrapper = styled.div`
        flex: 2 1 450px;
        margin-left: 20px;

        ${mediaQueries('tablet') `
            font-size: 0.8em;
        `}
        
        p {
            line-height: 1.8em;
            font-size: 1.25em;
        }

        h1 {
            margin: 20px 0;
            color: yellow;
        }
`;

const TotalPrice = styled.div`

    img {
        width: 24px;
        height: 25px;
        position: relative;
        top: 5px;
    }
`;

const ThankfulModal = () => {

    const { 
        theme, 
        setThankfulModalIsOpen, 
        setMobileCartIsOpen,
        setCart,
        getTotalPrice,
        getTotalQuantity } = React.useContext(GlobalContext);

    const resetCart = () => {
        setMobileCartIsOpen(false);
        setCart([]);
    }

    return (
            <Container >
                 <Remove 
                    onClick={() => {
                        setThankfulModalIsOpen(false)
                        resetCart()
                    }}
                >x
                </Remove>
                { theme.title  === 'yoda' ?
                     
                        <YodaImageWrapper>
                            <img src="./images/yoda/yoda-cart.png" />
                        </YodaImageWrapper> 
                

                     : theme.title  === 'vader' ?
                        
                            <VaderImageWrapper >
                                <img src="./images/vader/vader-cart.png" />  
                            </VaderImageWrapper>
                        
                    :
                        <LeiaImageWrapper>
                            <img src="./images/leia/leia-cart.png" 
                            />
                        </LeiaImageWrapper>
              
                }
                <TextWrapper>
                    <p>Você Comprou: {getTotalQuantity()} {getTotalQuantity() > 1? 'Naves Espaciais' : 'Nave espacial'}.</p>
                    <TotalPrice><p>Gastou: <img src='./images/moeda.png' alt="Moeda mestre Yoda" /> {getTotalPrice()} Moedas.</p></TotalPrice>
                    <p>Receberá um cashback de: {Number(Math.random() * getTotalPrice()).toFixed(0)}.</p>
                    <h1> {theme.title  === 'vader' ? 'Não se atreva a falhar comigo.' : 'Que a força esteja com você!'}</h1>
                    
                </TextWrapper>
            </Container>
            
    )
}

export default ThankfulModal;