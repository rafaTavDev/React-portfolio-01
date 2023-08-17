import * as C from "./styles";

type Props = {
    cep: string,
    bairro: string,
    cidade: string,
    rua: string
}

export function CepItem({cep, bairro, cidade, rua}: Props){
    return (
        <C.ContainerCepItem>
            <C.CepItem>
                Cep: {cep}
            </C.CepItem>
            <C.CepItem>
                Bairro: {bairro}
            </C.CepItem>
            <C.CepItem>
                Cidade: {cidade}
            </C.CepItem>    
            <C.CepItem>
                Logradouro: {rua}
            </C.CepItem>
        </C.ContainerCepItem>
    );
}