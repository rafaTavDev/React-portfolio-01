import * as C from "./styles";

type Props = {
    conteudo: string,
    funcaoClick?: () => void,
    marginNone?: boolean
}

export function Botao({conteudo, funcaoClick, marginNone}: Props){
    return (
        <C.Botao style={{marginTop: marginNone? "none" : "3rem"}} onClick={funcaoClick? () => funcaoClick(): undefined}>
            {conteudo}
        </C.Botao>
    );
}