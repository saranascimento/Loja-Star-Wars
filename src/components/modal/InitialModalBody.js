import React from 'react';

import styled from 'styled-components';
import Modal from './Modal';
import leia from '../../styles/themes/leia';
import yoda from '../../styles/themes/yoda';
import vader from '../../styles/themes/vader';
import { GlobalContext } from '../../GlobalContext';
import { mediaQueries } from '../../utils/mediaQueries';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;

  ${mediaQueries('mobile')`
       flex-direction: column;
    `};
`;

const Title = styled.h1`
    margin-bottom: 20px;
    color: ${({theme}) => theme.colors.color};

    ${mediaQueries('mobile')`
        font-size: 18px;
    `};
`;

const Card = styled.div`
  margin-left: 20px;
  cursor: pointer;
  border: 4px solid transparent;

  &:hover {
    border: 4px solid ${({theme}) => theme.colors.primary};
    border-radius: 8px;
    box-shadow: 0px 3px 19px -3px ${({theme}) => theme.colors.primary};
  }

  ${mediaQueries('mobile')`
    margin-left: 0;

  `};
 
`;

const YodaImageWrapper = styled.div`
    width: 200px;
    height: 100%;

    ${mediaQueries('mobile')`
      width: 6em;
      height: 6em;
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

    ${mediaQueries('mobile')`
    width: 6em ;
      height: 6em;
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

    ${mediaQueries('mobile')`
      width: 6em ;
      height: 6em;
    `};
    
    img {
        height: 100%;
        width: 100%;
    }
`;

const InitialModalBody = () => {

    const {setInitialModalIsOpen, setTheme} = React.useContext(GlobalContext);
  
    const [initialModalTitle, setInitialModalTitle] = React.useState('Escolha um tema.');

    const handleMouseOut = () => {
        setInitialModalTitle("Escolha um tema.")
      }

    return (
        <>
            <Title >{initialModalTitle}</Title>
            <Container >
               
                    <Card 
                        style={{marginLeft: '0'}} 
                        onMouseOver={() => {
                            setInitialModalTitle("Fazer ou não fazer. Tentativa não há.")
                            setTheme(yoda) 
                        }} 
                        onMouseOut={handleMouseOut}
                        onClick={() => {
                        setTheme(yoda) 
                        setInitialModalIsOpen(false) 
                    }}> 

                        <YodaImageWrapper>
                            <img src="./images/yoda/yoda-header.png" />
                        </YodaImageWrapper> 
                    </Card >

                    <Card  
                        onMouseOver={() => {
                            setInitialModalTitle("Eu acho a sua falta de fé perturbadora.")
                            setTheme(vader) 
                        }} 
                        onMouseOut={handleMouseOut}
                        onClick={() => {
                            setTheme(vader)
                            setInitialModalIsOpen(false) 
                    }}>

                        <VaderImageWrapper >
                            <img src="./images/vader/vader-header.png" />  
                        </VaderImageWrapper>
                  
                </Card>
             
                    <Card 
                        onMouseOver={() => {
                            setInitialModalTitle("Não é baixinho demais para Stormtrooper?")
                            setTheme(leia) 
                        }} 
                        onMouseOut={handleMouseOut}
                        onClick={() => {
                        setTheme(leia) 
                        setInitialModalIsOpen(false) 
                        }}>

                        <LeiaImageWrapper>
                            <img src="./images/leia/leia-header.png" 
                            />
                        </LeiaImageWrapper>
                    </Card >
              
                  
            </Container>
            </>
    )
}

export default InitialModalBody;