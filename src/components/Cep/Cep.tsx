import { useState, useContext } from "react";
import * as C from "./styles";
import { Link } from "react-router-dom";
import { Botao } from "../Botao";
import { ContextCep } from "../../contexts/contextCep";
import fundoCep from "../../assets/imagens//fundo-cep.jpg";



export function Cep(){

    const {uf, setUf, cidade, setCidade, logradouro, setLogradouro} = useContext(ContextCep);

    const [labelUf, setLabelUf] = useState<string>("Digite aqui sua Unidade Federativa (UF)*");
    const [labelCidade, setLabelCidade] = useState<string>("Digite aqui sua cidade*");
    const [labelLogra, setLabelLogra] = useState<string>("Digite seu logradouro*");







    return(
        <C.ContainerGeral style={{backgroundImage: `url(${fundoCep})`}}>
            <C.ContainerFormCep>
                <C.ContainerFormItem>
                    <C.InputTexto id="UF" onChange={e => setUf(e.target.value)} onFocus={() => {setLabelUf("Unidade Federativa (UF)*");}} 
                        onBlur={() => {if(!uf){setLabelUf("Digite aqui sua Unidade Federativa (UF)*");}}} required/>
                    <C.LabelInput htmlFor="UF">
                        {labelUf}
                    </C.LabelInput>
                </C.ContainerFormItem>

                <C.ContainerFormItem>
                    <C.InputTexto id="cidade" onChange={e => setCidade(e.target.value)} onFocus={() => {setLabelCidade("Cidade*");}} 
                        onBlur={() => {if(!cidade){setLabelCidade("Digite aqui sua cidade*");}}} required/>
                    <C.LabelInput htmlFor="cidade">
                        {labelCidade}
                    </C.LabelInput>
                </C.ContainerFormItem>

                <C.ContainerFormItem>
                    <C.InputTexto id="logradouro" onChange={e => setLogradouro(e.target.value)} onFocus={() => {setLabelLogra("Logradouro*");}} 
                        onBlur={() => {if(!logradouro){setLabelLogra("Digite aqui seu logradouro*");}}} required/>
                    <C.LabelInput htmlFor="logradouro">
                        {labelLogra}
                    </C.LabelInput>
                </C.ContainerFormItem>

                <Link to="/Cep/MostrarCep" style={{textDecoration: "none"}}>
                    {/* A API de filme e de CEP tem botoes para acionar a requisição, e aqui entra a importancia de padronizar esse processo, não que um seja melhor que o outro (Link, mandando pra outro componente ou fazer tudo no próprio componente), mas cada um vai exigir uma coisa, então o motivo de escolher um ou outro no momento, seria somente padronização. Mas mandando para outro componente tudo fica mais organizado e separado.*/}
                    <Botao conteudo="Buscar CEP" marginNone={true}/>
                </Link>
            </C.ContainerFormCep>
        </C.ContainerGeral>
    );
}