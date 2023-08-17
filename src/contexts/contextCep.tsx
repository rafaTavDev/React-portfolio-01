import { ReactNode, createContext, useState, Dispatch, SetStateAction } from "react";

const defaultValue = {
    uf: "",
    setUf: () => null,
    cidade: "",
    setCidade: () => null,
    logradouro: "",
    setLogradouro: () => null
};

type ContextCepType = {
    uf: string,
    setUf: Dispatch<SetStateAction<string>>,
    cidade: string,
    setCidade: Dispatch<SetStateAction<string>>,
    logradouro: string,
    setLogradouro: Dispatch<SetStateAction<string>>
}


export const ContextCep = createContext<ContextCepType>(defaultValue);


export function CepProvider({children}: {children: ReactNode}){
    const [uf, setUf] = useState<string>("");
    const [cidade, setCidade] = useState<string>("");
    const [logradouro, setLogradouro] = useState<string>("");

    return (
        <ContextCep.Provider value={{uf, setUf, cidade, setCidade, logradouro, setLogradouro}}>
            {children}
        </ContextCep.Provider>
    );
}