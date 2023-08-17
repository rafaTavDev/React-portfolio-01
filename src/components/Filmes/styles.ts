import styled from "styled-components";

export const ContainerGeral = styled.div`
    height: calc(100vh - 10rem);
    background-size: cover;
    background-position: center bottom;
`;

export const Mascara = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    width: 100%;
`;

export const NomeFilme = styled.input`
    outline: none;
    width: 40rem;
    padding: 1rem 2rem;
    color: #000;
`; 
