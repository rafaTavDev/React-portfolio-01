import {useState, useEffect, useContext} from "react";
import * as C from "./styles";
import * as api from "../../requisicoes/api";
import {Link} from "react-router-dom";
import { ContextJsonFilme } from "../../contexts/contextJsonFilme";
import { FilmeItem } from "../FilmeItem";
import { Botao } from "../Botao";
import { Carregando } from "../Carregando";

export function MostraFilmes(){
    type Filme = {
        adult: boolean,
        backdrop_path: string,
        genre_ids: number[],
        id: number,
        original_language: string,
        original_title: string,
        overview: string,
        popularity: number,
        poster_path: string,
        release_date: string,
        title: string,
        video: boolean,
        vote_average: number,
        vote_count: number
    }
    type ArrFilmeType = Filme[] | []

    const [arrFilme, setArrFilme] = useState<ArrFilmeType>([]);
    const [carregando, setCarregando] = useState<boolean>(true);

    useEffect(() => {pegarFilmes();}, []);

    const {nomeFilme} = useContext(ContextJsonFilme);
    let nomeFilmeTratado;
    let objRetorno;


    async function pegarFilmes(){
        const regExEspaco = /\s/g;
        const regEx2 = /\//g;
        const regEx3 = /\\/g;
        nomeFilmeTratado = nomeFilme.replace(regExEspaco, "+");
        nomeFilmeTratado = nomeFilmeTratado.replace(regEx2, "");
        nomeFilmeTratado = nomeFilmeTratado.replace(regEx3, "");
        setCarregando(true);
        objRetorno = await api.pegarFilmes(nomeFilmeTratado);
        /* o único problema aqui é que nem sempre o json vai ter recebido de fato o json mas as vezes pode receber o erro, e ai, não vamos ter json.results */
        if(objRetorno.error === undefined){
            console.log(objRetorno.resp.results);
            setArrFilme(objRetorno.resp.results);
        }
        setCarregando(false);
    }

    return(
        <C.ContainerGeral>
            {carregando ?
                
                <Carregando/>

                :

                arrFilme.every(item => item.title != undefined) && arrFilme.length > 0?
                    <>
                        <Link style={{textDecoration: "none"}} to="/Filmes">
                            <Botao conteudo="Buscar outro Filme"/>
                        </Link>
                        <C.ContainerGridFilmes>
                            {arrFilme.map(item => item.poster_path != null ? <FilmeItem key={item.title} overview={item.overview} img={item.poster_path} title={item.title} sinopse={item.overview} /> : <></>)}
                        </C.ContainerGridFilmes>
                    </>

                    :

                    <>
                        <C.ContainerArea>
                            <C.TextosPaginaSatelite>
                                Perdão, não encontramos nenhum filme com esse nome<br/>Caso o erro persista, verifique sua internet, por favor
                            </C.TextosPaginaSatelite>
                            <Link style={{textDecoration: "none"}} to="/Filmes">
                                <Botao conteudo="Tentar novamente"/>
                            </Link>
                        </C.ContainerArea>
                    </>
            }
        </C.ContainerGeral>
    );
}