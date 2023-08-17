import styled from "styled-components";

export const ContainerCeps = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        min-height: calc(100vh - 10rem);
        background-color: #000;
`;

export const ContainerErro = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align:center;
        font-size: 4rem;
        color: #fff;

        @media(max-width: 800px){
                font-size: 3rem;
                width: 90%;
        }
`;