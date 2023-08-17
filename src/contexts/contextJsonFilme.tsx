import React, { ReactNode, createContext, useState, SetStateAction, Dispatch} from "react";

/* Pq posso usar o state e o set antes de setar eles? */
const defaultValue = {
    nomeFilme: "",
    setNomeFilme: () => null
};



type ContextType = {
    nomeFilme: string,
    setNomeFilme: Dispatch<SetStateAction<string>>
}


export const ContextJsonFilme = createContext<ContextType>(defaultValue);


export function JsonFilmeProvider({children}: {children: ReactNode}){
    const [nomeFilme, setNomeFilme] = useState("");

    return (
        <ContextJsonFilme.Provider value={{nomeFilme, setNomeFilme}}>
            {children}
        </ContextJsonFilme.Provider>
    );
}