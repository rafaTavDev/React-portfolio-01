
import { Header } from "./components/Header";
import {Outlet} from "react-router-dom";
import { JsonFilmeProvider } from "./contexts/contextJsonFilme";
import { CepProvider } from "./contexts/contextCep";




function App() {

    return (
        <div>
            <Header/>
            <CepProvider>
                <JsonFilmeProvider>
                    <Outlet/>
                </JsonFilmeProvider>
            </CepProvider>
        </div>
    );
}

export default App;
