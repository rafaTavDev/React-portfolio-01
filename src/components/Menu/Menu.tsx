import * as C from "./styles";
import {Link} from "react-router-dom";



export function Menu(){


    return(
        <C.menuSeo>
            <C.ContainerItemsMenu>
                <Link to="/" style={{textDecoration: "none"}}><C.ItemMenu>Página Inicial</C.ItemMenu></Link>
                <Link to="/Filmes" style={{textDecoration: "none"}}><C.ItemMenu>API de Filmes</C.ItemMenu></Link>
                <Link  to="/Cep" style={{textDecoration: "none"}}><C.ItemMenu>API de CEP</C.ItemMenu></Link>
            </C.ContainerItemsMenu>
        </C.menuSeo>
    );
}