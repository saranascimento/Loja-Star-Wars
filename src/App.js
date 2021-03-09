import React from 'react';
import './App.css';
import Cards from './components/cards/Cards';
import Cart from './components/cart/Cart';
import Header from './components/header/Header';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';


import {GlobalContext} from './GlobalContext';
import Modal from './components/modal/Modal';
import InitialModalBody from './components/modal/InitialModalBody';
import ProductModal from './components/modal/ProductModal';
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
  ${mediaQueries('tablet')`
    margin-top: 2em;
  `};

`;


function App() {
 
  const { theme, initialModalIsOpen, productModalIsOpen, ThemesBtnClicked } = React.useContext(GlobalContext);

  return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <GlobalStyle />
          <Header />
          <ContentWrapper >
            <Main>
              <Cards />
            </Main>
            <Cart  />
          </ContentWrapper> 
        </div>

        
        <Modal open={initialModalIsOpen} ThemesBtnClicked={ThemesBtnClicked}>
          <InitialModalBody />
        </Modal>
        <Modal open={productModalIsOpen} style={{backgroundColor: "#31312eeb"}}>
          <ProductModal />
        </Modal>
      </ThemeProvider>
  );
}

export default App;
