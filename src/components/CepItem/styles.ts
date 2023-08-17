import styled from "styled-components";

export const ContainerCepItem = styled.div`
    display: flex;
    @media(max-width: 800px){
        flex-direction: column;
    }
`;

export const CepItem = styled.div`
    border: .2rem solid #E2B616;
    padding: 1rem 2rem;
    font-size: 2rem;
`;