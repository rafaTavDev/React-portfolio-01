import * as C from "./styles";
import { useState, useEffect, useContext } from "react";
import {Link} from "react-router-dom";
import { Botao } from "../Botao";
import { CepItem } from "../CepItem";
import * as api from "../../requisicoes/api";
import { ContextCep } from "../../contexts/contextCep";
import { Carregando } from "../Carregando";



export function MostrarCep(){

    const {uf, cidade, logradouro} = useContext(ContextCep);

    type jsonItemType = {
        bairro: string,
        cep: string,
        complemento: string,
        ddd: string,
        gia: string,
        ibge: string,
        localidade: string,
        logradouro: string,
        siafi: string,
        uf: string
    }

    const [arrayCeps, setArrayCeps] = useState<jsonItemType[]>([]);
    const [carregando, setCarregando] = useState<boolean>(false);

    useEffect(() => {buscarCep();}, []);



    async function buscarCep(){
        const restoUrlCep = `${uf}/${cidade}/${logradouro}/json/`;
        setCarregando(true);
        const objRetorno = await api.buscarCep(restoUrlCep);
        if(objRetorno.error === undefined){
            setArrayCeps(objRetorno.resp);
        }
        setCarregando(false);
    }


    return(
        <C.ContainerCeps>
            {
                carregando?

                    <Carregando/>

                    :
                
                    arrayCeps.every(item => item.cep) && arrayCeps.length > 0? 

                        <> 
                            {arrayCeps.map(item => <CepItem key={item.cep} cep={item.cep} bairro={item.bairro} cidade={item.localidade} rua={item.logradouro} />)}
                            <Link to="/Cep" style={{textDecoration: "none"}}>
                                <Botao conteudo="Tentar novamente"/>
                            </Link>
                        </> 

                        :                    
                    
                        <C.ContainerErro>
                            Com os valores informados anteriormente, não conseguimos encontrar nenhum CEP... você pode tentar novamente
                            <Link to="/Cep" style={{textDecoration: "none"}}>
                                <Botao conteudo="Tentar novamente"/>
                            </Link>
                        </C.ContainerErro>
            }
        </C.ContainerCeps>
    );
}