import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home         from "./pages/Home/home-index";
import PageProdutos from "./pages/Produtos/produtos";

export default function Rotas() {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path ="https://editora-bastet-react.vercel.app/"    element={<Home />} />
                <Route path ="https://editora-bastet-react.vercel.app/produtos"  element={<PageProdutos />} />
            </Routes>
        </BrowserRouter>
    )
}