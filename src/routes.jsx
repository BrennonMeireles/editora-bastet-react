import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home          from "./pages/Home/home-index";
import Livro         from "./pages/Livro/livro";
import Login         from "./pages/Login/Login";
import Cadastro      from "./pages/Cadastro/Cadastro"

import PageProdutos  from "./pages/Produtos/produtos";
import PageLivro     from "./pages/VerLivro/paginaLivro"
import PageNovoLivro from "./pages/NovoLivro/novoLivro"
import PagePesquisa  from "./pages/Pesquisa/pesquisa"

export default function Rotas() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path = "/"          element={<Login />} />
                <Route path="/Cadastro"     element={<Cadastro />} />       
                <Route path = "/home"          element={<Home />} />
                <Route path = "/produtos"  element={<PageProdutos />} />
                <Route path = "/ver-livro" element={<PageLivro />} />
                <Route path = "/novo-livro"element={<PageNovoLivro />} />
                <Route path = "/search/:titulo" element={<PagePesquisa/>} />
                <Route path= "/livro/:id" element={<Livro/>}/>
            </Routes>
        </BrowserRouter>
    )
}