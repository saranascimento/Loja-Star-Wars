import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    html, body {
        width: 100%;
        height: 100%;
    }

    body {
        background: #060606;
        background: url("./images/store-bg.png");
        font-family: "Pathway Gothic One", sans-serif;
    }

   
    .App {
        background-color: ${({theme}) => theme.colors.backgroundColor};
        text-align: center;
        padding-bottom: 50px;
        position: relative;
    }

    .container {
        margin: 0 auto;
        display: flex;
        max-width: 1200px;
    }

    .btnAdicionado {
        background-color: #757509 !important;
        color: aliceblue; 
    }

    .activeCart {
        height: 485px;
    }

    .mobileCart {
        display: block;
        position: absolute;
        inset: 0px;
        margin: 0px;
        width: 100vw;
        height: 100vh;
        border-radius: 0;
    }

`;