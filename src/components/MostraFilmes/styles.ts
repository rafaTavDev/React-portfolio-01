import styled from "styled-components";

export const ContainerGeral = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #000;
`;

export const Botao = styled.div`
    font-size: 1.3rem;
    margin-top: 3rem;
    background-color: #E2B616;
    width: 40rem;
    text-align: center;
    padding: 2rem 0;
    border-radius: 1rem;
    cursor: pointer;
`;

export const ContainerGridFilmes = styled.div`
    display: grid;
    grid-template-columns: 25vw 25vw 25vw;
    width: 100%;
    justify-content: space-evenly;
    gap: 4rem;
    padding: 5rem 0;
    @media(max-width: 800px){
        grid-template-columns: 90vw;
    }
`;

export const ContainerArea = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 10rem);
    background-color: #000;
`;

export const TextosPaginaSatelite = styled.div`
    text-align: center;
    font-size: 5rem;
    width: 65%;
    @media(max-width: 800px){
        font-size: 3rem;
        width: 90%;
    }
`;
