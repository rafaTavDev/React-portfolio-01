import * as C from "./styles";
import { Menu } from "../Menu";


export function Header(){



    return(
        <header>
            <C.ContainerGeral>
                <Menu/>
            </C.ContainerGeral>
        </header>
    );
}