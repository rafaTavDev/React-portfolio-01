import styled from "styled-components";

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
        width: 100%;
    }
`;