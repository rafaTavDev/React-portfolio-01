import {ChangeEvent, useContext, useEffect} from "react";
import * as C from "./styles";
import {Link} from "react-router-dom";
import { ContextJsonFilme } from "../../contexts/contextJsonFilme";
import { Botao } from "../Botao";
import fundoFilme from "../../assets/imagens/fundo-filmes.jpg";


export function Filmes(){

    const {nomeFilme, setNomeFilme} = useContext(ContextJsonFilme);

    useEffect(() => setNomeFilme(""), []);


    /* RETIREI AQUI E O ONCLICK DO COMPONENTE BOTAO
    function handleClick(){
        const regExEspaco = /\s/g
        nomeFilmeTratado = nomeFilme.replace(regExEspaco, "+")
        api.pegarFilmes(nomeFilmeTratado)
    }
*/



    /* PROBLEMA ATUAL: PQ NÃO TO CONSEGUINDO ATUALIZAR O NOMEFILME??
    Resposta: No contexto, vc só tava definindo a vc tinha criado o setStateEvent setNomeFilme e a PROPRIEDADE setNomeFilme, essa segunda, de início, estava recebendo () => null. Mas em nenhum momento vc estava fazendo a PROPRIEDADE (que era o que estava sendo chamado no clique) receber o setStateEvent, logo, no clique ele tava executando () => null.
*/


    function escreveuInput(e: ChangeEvent<HTMLInputElement>){
        const regExBarra = /\//g;
        const regExBarraInvert = /\\/g;
        const nomeSemBarra = e.target.value.replace(regExBarra, "");
        const nomeSemQualquerBarra = nomeSemBarra.replace(regExBarraInvert, "");
        e.target == null? setNomeFilme("") : setNomeFilme(nomeSemQualquerBarra);
    }


    return(
        <C.ContainerGeral style={{backgroundImage: `url(${fundoFilme})`}}>
            <C.Mascara>
                <C.NomeFilme type="text" placeholder="Digite o nome de um filme" onChange={(e) => {escreveuInput(e);}}></C.NomeFilme>
                <Link to={`/Filmes/${nomeFilme}`} style={{textDecoration: "none"}}><Botao conteudo="Ver detalhes do filme"/></Link>
            </C.Mascara>
        </C.ContainerGeral>
    );
}