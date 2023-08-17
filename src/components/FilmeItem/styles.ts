import styled from "styled-components";

export const ContainerFilmeItem = styled.div`
    width: 25vw;
    padding: 2rem;
    border-radius: 2rem;
    background-color: #222;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 1rem;
    overflow: hidden;
    position: relative;
    transition: all .2s linear;
    @media(max-width: 800px){
        width: 90vw;
    }
`;

export const ImagemContainer = styled.div`
    width: 90%;
    border-radius: 2rem;
    margin-bottom: 2rem;
    height: 45rem;
`;

export const ImgFilme = styled.img`
    border-radius: 2rem;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const TituloFilme = styled.div`
    text-align: center;
    font-size: 2.5rem;
    font-weight: bold;
`;

export const SinopseFilme = styled.div`
    text-align: center;
    font-size: 1.8rem;
`;

export const ContainerSeta = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 25vw;
    height: 5rem;
    position: absolute;
    bottom: -.5rem;
    background-color: rgba(0, 0, 0, 0.3);
    cursor: pointer;
    backdrop-filter: blur(.15rem);

    @media(max-width: 800px){
        width: 90vw;
    }
`;

export const ImagemSeta = styled.img`
    height: 100%;
    width: auto;
    transition: all .3s linear;
`;