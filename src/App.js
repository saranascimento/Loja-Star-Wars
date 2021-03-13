import React from 'react';
import Cards from './components/cards/Cards';
import Cart from './components/cart/Cart';
import Header from './components/header/Header';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';


import {GlobalContext} from './GlobalContext';
import Modal from './components/modal/Modal';
import InitialModalBody from './components/modal/InitialModalBody';
import ProductModal from './components/modal/ProductModal';
import ThankfulModal from './components/modal/ThankfulModal';
import styled from 'styled-components';
import { mediaQueries } from './utils/mediaQueries';


const ContentWrapper = styled.div`
    margin: 0 auto;
    display: flex;
    max-width: 1200px;

    ${mediaQueries("desktop")`
      width: 90vw;
    `};

    ${mediaQueries("tablet")`
      flex-direction: column-reverse;
      width: 80vw;
    `};
`;

const Main = styled.section`
  width: 70%;

  ${mediaQueries('tablet')`
    margin-top: 2em;
    display: none;
    width: 100%;
  `};

`;


function App() {
 
  const { theme, initialModalIsOpen, productModalIsOpen, ThemesBtnClicked, thankfulModalIsOpen, mobileCartIsOpen } = React.useContext(GlobalContext);

  return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div className="App">
          <Header />
          <ContentWrapper >
            <Main style={{display: mobileCartIsOpen ? 'none' : 'block'}}>
              <Cards />
            </Main >
            <Cart  />
          </ContentWrapper> 
        </div>

        
        <Modal open={initialModalIsOpen} ThemesBtnClicked={ThemesBtnClicked}>
          <InitialModalBody />
        </Modal>
        
        <Modal open={productModalIsOpen} style={{backgroundColor: "#31312eeb"}}>
          <ProductModal />
        </Modal>

        <Modal open={thankfulModalIsOpen} 
            style={{
              boxShadow: 'none',
              backgroundColor: 
              theme.title === 'leia' ? "darkblue" : 
              theme.title === 'yoda' ?  "darkgreen" :
              "#131313"  }}>
          <ThankfulModal />
        </Modal>
      </ThemeProvider>
  );
}

export default App;
