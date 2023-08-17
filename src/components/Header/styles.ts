import styled from "styled-components";

export const ContainerGeral = styled.div`
    height: 10rem;
    background-color: #000;
    display: flex;
    justify-content: flex-end;

    @media(max-width: 800px){
        justify-content: flex-start;
    }
`;