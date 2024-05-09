import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home        from "./pages/Home"
import PageProdutos from "./pages/Produtos/produtos";

export default function Rotas() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/"            element={<Home />} />
                <Route path="/produtos/"   element={<PageProdutos />} />
                {/* <Route path="/add-product" element={<AddProduct />} /> */}
            </Routes>
        </BrowserRouter>
    )
}