import * as C from "./styles";


export function PaginaInicial(){
    return (
        <C.ContainerInicial>
            <C.listra style={{transform: "rotate(-15deg) translateX(-40rem)"}}></C.listra>
            <C.listra style={{transform: "rotate(80deg) translateY(60rem)"}}></C.listra>
            <C.listra style={{transform: "rotate(130deg) translateY(-70rem)"}}></C.listra>
            <C.tituloPrincipal>
                No menu acima, explore filmes e descubra CEPs!
            </C.tituloPrincipal>
        </C.ContainerInicial>
    );
}