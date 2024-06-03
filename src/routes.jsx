import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home          from "./pages/Home/home-index";
import PageProdutos  from "./pages/Produtos/produtos";
import PageLivro     from "./pages/VerLivro/paginaLivro"
import PageNovoLivro from "./pages/NovoLivro/novoLivro"
import PagePesquisa  from "./pages/Pesquisa/pesquisa"
import Login         from "./pages/Login/Login"

export default function Rotas() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path = "/"          element={<Login />} />
                <Route path = "/home"          element={<Home />} />
                <Route path = "/produtos"  element={<PageProdutos />} />
                <Route path = "/ver-livro" element={<PageLivro />} />
                <Route path = "/novo-livro"element={<PageNovoLivro />} />
                <Route path = "/search/:titulo" element={<PagePesquisa/>} />
            </Routes>
        </BrowserRouter>
    )
}