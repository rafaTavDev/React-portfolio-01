import styled from "styled-components";


export const menuSeo = styled.nav`
    @media(max-width: 800px){
        width: 100%;
    }
`;

export const ContainerItemsMenu = styled.div`
    height: 100%;
    width: fit-content;
    display: flex;
    margin-right: 25rem;

    @media(max-width: 800px){
        margin-right: 0;
        width: 100%;
        justify-content: space-around;

    }
`;

export const ItemMenu = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    padding: 4rem;
    cursor: pointer;
    font-size: 1.6rem;
     &:hover{
        color: #E2B616;
     }

     @media(max-width: 800px){
        padding: 0;
     }
`;



