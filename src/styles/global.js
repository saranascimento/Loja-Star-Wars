import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
    * {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    body {
        background: #e2eae7;
        background: url("./images/store-bg.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        height: 100vh;
        background-attachment: fixed;
        font-family: "Pathway Gothic One", sans-serif;
    }

   
    .App {
        background-color: ${({theme}) => theme.colors.backgroundColor};
        text-align: center;
        background-attachment: fixed;
        padding-bottom: 50px;
        width: 100vw;
    
        position: relative;
    }

    .container {
        margin: 0 auto;
        display: flex;
        max-width: 1200px;
    }

    .btnAdicionado {
        background-color: #757509;
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