import styled from "styled-components";

export const ContainerGeral = styled.div`
    height: calc(100vh - 10rem);
    background-size: cover;
`;

export const ContainerFormCep = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    gap: 3rem;
    background-color: rgba(0, 0, 0, 0.97)
`;

export const ContainerFormItem = styled.div`
    width: fit-content;
    position: relative;
`;

export const InputTexto = styled.input`
    outline: none;
    width: 40rem;
    padding: 1rem 2rem;
    color: #000;
        &:focus ~ label{
            top: 0;
            transform: translateY(-100%);
            color: #fff;
            font-size: 1.2rem;
            padding-bottom: .5rem;
        }

        &:valid ~ label{
            top: 0;
            transform: translateY(-100%);
            color: #fff;
            font-size: 1.2rem;
            padding-bottom: .5rem;
        }
`;

export const LabelInput = styled.label`
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    color: #000;
    font-size: 1.4rem;
    transition: all 0.2s linear
`;


