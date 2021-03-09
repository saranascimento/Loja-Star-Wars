import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    }

    .App {
        background-color: ${({theme}) => theme.colors.backgroundColor};
    }

    .btnAdicionado {
        background-color: #757509;
        color: aliceblue; 
    }

    .activeCart {
        height: 425px;
    }

`;