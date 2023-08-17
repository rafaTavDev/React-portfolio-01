import { useState } from "react";
import * as C from "./styles";
import seta from "../../assets/imagens/seta-baixo-branca.svg";

type Props = {
    overview: string,
    img: string,
    title: string,
    sinopse: string
}

export function FilmeItem({overview, img, title, sinopse}: Props){
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const imagemCompleta = "https://image.tmdb.org/t/p/w500/" + img;


    function handleClickSinopse(){
        setIsOpen(!isOpen);
    }

    return (
        <C.ContainerFilmeItem style={{height: isOpen ? "fit-content" : "65rem", paddingBottom: isOpen ? "7rem" : "0"}}>
            <C.ImagemContainer>
                <C.ImgFilme src={imagemCompleta} alt="poster-filme"/>
            </C.ImagemContainer>
            <C.TituloFilme>{title}</C.TituloFilme>
            <C.SinopseFilme>{sinopse}</C.SinopseFilme>
            {overview && <C.ContainerSeta onClick={handleClickSinopse}>
                <C.ImagemSeta src={seta} style={{transform: isOpen ? "rotate(180deg)" : "rotate(0deg)"}}></C.ImagemSeta>
            </C.ContainerSeta>}
        </C.ContainerFilmeItem>
    );
}