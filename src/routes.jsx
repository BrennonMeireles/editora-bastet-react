import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home          from "./pages/Home/home-index";
import PageProdutos  from "./pages/Produtos/produtos";
import PageLivro     from "./pages/VerLivro/paginaLivro"
import PageNovoLivro from "./pages/NovoLivro/novoLivro"
import PagePesquisa from "./pages/Pesquisa/pesquisa"
import Livro from "./pages/Livro/livro";

export default function Rotas() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path = "/"          element={<Home />} />
                <Route path = "/produtos"  element={<PageProdutos />} />
                <Route path = "/ver-livro" element={<PageLivro />} />
                <Route path = "/novo-livro"element={<PageNovoLivro />} />
                <Route path = "/search/:titulo" element={<PagePesquisa/>} />
                <Route path= "/livro/:id" element={<Livro/>}/>
            </Routes>
        </BrowserRouter>
    )
}