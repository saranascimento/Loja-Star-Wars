import React from 'react';
import styled from 'styled-components';
import { GlobalContext } from '../../GlobalContext';
import Search from './Search';
import {mediaQueries} from '../../utils/mediaQueries';


const HeaderWrapper = styled.header`
    height: 300px;
    padding-top: 50px;
    color: #ffe500;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    position: relative;
    margin-bottom: 50px;

    h1 {
        text-shadow: ${({theme}) => theme.colors.primary} 0px 0px 0.2em;;
        margin-bottom: 20px;
        transform: perspective(380px) rotateX( 22deg);
        padding: 0 50px;

        ${mediaQueries('laptop')`
            padding: 0 60px;
        `};

        ${mediaQueries('mobile')`
            padding: 0 20px;
        `};
    }

    ${mediaQueries('desktop')`
        width: 90vw;
    `};

    ${mediaQueries("tablet")`
        height: auto;
        padding-top: 50px;
        flex-direction: column;
    `};

`;

const BtnThemesWrapper = styled.div`
    position: absolute;
    top: 0;
    right: 0;
`;

const ThemesBtn = styled.button`
    margin-top: 12px;
    margin-right: 0;
    border-radius: 20px;
    padding: 10px;
    cursor: pointer;
    color: bisque;
    background-color: ${({theme}) => theme.colors.primary};
    border: none;
    box-shadow: 0px 0px 4px 1px  ${({theme}) => theme.colors.primary};
    outline: none;

    ${mediaQueries("mobile")`
        padding: 0.6em;
        font-size: 0.8em;

    `};

`;

const ImageWrapper = styled.div`
        width: 15em;
        height: 12em;

    ${mediaQueries('laptop')`
       width: 27em;
        height: 12em;
    `};

    ${mediaQueries('tablet')`
        width: 11em;
        height: 11em;
    `};


    img {
        height: 100%;
        width: 100%;
        transform: scaleX(-1);
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;



const Header = () => {

    const { theme, setThemesBtnClicked,ThemesBtnClicked, setInitialModalIsOpen } = React.useContext(GlobalContext);
   

    return (
        <HeaderWrapper>
            <BtnThemesWrapper>
                <ThemesBtn onClick={() => {
                    setThemesBtnClicked(true)
                    setInitialModalIsOpen(true)
                }}
                >Temas</ThemesBtn>
            </BtnThemesWrapper>

            <ImageWrapper>
                    <img src={theme.pictures.header} />
                </ImageWrapper>
            <Content >
                <h1>{theme.text.header}</h1>
                <Search />
            </Content>
            
        </HeaderWrapper>
    )
}

export default Header;