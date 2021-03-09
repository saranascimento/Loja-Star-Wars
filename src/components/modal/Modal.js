import React from 'react';
import ReactDom from 'react-dom';
import styled from 'styled-components';
import { mediaQueries } from '../../utils/mediaQueries';

const ModalWrapper = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #FFF;
    padding: 50px;
    z-index: 1000;
    height: 70%;
    width: 75%;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 0px 9px yellow;
    border-radius: 50px;
    max-width: 1024px;

    ${mediaQueries('mobile')`
       padding: 30px;
    `};
`;

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .7);
    z-index: 1000;
   
`;


const Modal = ({open, children, style}) => {
    if(!open ) return null;

    return ReactDom.createPortal(
        <>
            <Overlay />
            <ModalWrapper style={style}>
                {children}
            </ModalWrapper>
        </>,
        document.getElementById('portal')
    )
}
export default Modal;
