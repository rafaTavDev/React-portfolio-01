import styled from "styled-components";

export const ContainerInicial = styled.div`
    display: flex;
    justify-content: center;
    height: calc(100vh - 10rem);
    background-color: #000;
    position: relative;
    overflow: hidden;
`;

export const Mascara = styled.div`
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
`;

export const listra = styled.div`
    background-color: #E2B616;
    width: 100vw;
    height: 2rem;
    position: absolute;
    @media(max-width: 800px){
        display: none;
    }
`;

export const tituloPrincipal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70%;
    font-size: 7rem;
    text-align: center;
    z-index: 10;

    @media(max-width: 800px){
        font-size: 4rem;
        width: 95%;
    }
`;

