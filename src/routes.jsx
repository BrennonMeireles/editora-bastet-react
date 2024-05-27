import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home         from "./pages/Home/home-index";
import PageProdutos from "./pages/Produtos/produtos";
import PageLivro    from "./pages/VerLivro/paginaLivro"

export default function Rotas() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path = "/"          element={<Home />} />
                <Route path = "/produtos"  element={<PageProdutos />} />
                <Route path = "/ver-livro" element={<PageLivro />} />
            </Routes>
        </BrowserRouter>
    )
}