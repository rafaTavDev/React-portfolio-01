import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Filmes } from "./components/Filmes";
import { Cep } from "./components/Cep";
import { MostraFilmes } from "./components/MostraFilmes";
import { MostrarCep } from "./components/MostrarCep";
import { PaginaInicial } from "./components/PaginaInicial";

const Global = createGlobalStyle`
  body{
    padding: 0;
    margin: 0;
  }

  *{
    box-sizing: border-box;
    color: #fff;
    font-family: "Montserrat", sans-serif;
  }

  html{
    font-size: 62.5%;
  }
`;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Global/>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App/>}>
                    <Route path='/' element={<PaginaInicial/>}></Route>
                    <Route path='/Filmes' element={<Filmes/>}></Route>
                    <Route path='/Cep' element={<Cep/>}></Route>
                    <Route path='/Cep/MostrarCep' element={<MostrarCep/>}></Route>
                    <Route path='/Filmes/:id' element={<MostraFilmes/>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
);
