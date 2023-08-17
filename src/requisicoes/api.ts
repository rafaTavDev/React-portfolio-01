import axios from "axios";

export async function pegarFilmes(nomeFilme: string){

    const apiFilmes = axios.create();
    let resp, error;

    try{
        resp = await apiFilmes.get(`https://api.themoviedb.org/3/search/movie?api_key=dc63e739eb198cf9bcb1435853492ea8&query=${nomeFilme}`);
        resp = resp.data;
    }catch(e){
        error = e;
    }

    return {resp, error};
}


export async function buscarCep(restoUrlCep: string){

    const apiCep = axios.create();
    let resp, error;

    try{
        resp = await apiCep.get("https://viacep.com.br/ws/" + restoUrlCep);
        resp = resp.data;
    }catch(e){  
        error = e;
    }

    return {resp, error};
}