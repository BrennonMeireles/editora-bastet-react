import NavBarComponents from "../../component/NavBar";
import Table from "../../component/Table";
import FooterComponent from "../../component/Footer";

import "./produtos.css"

export default function PageProdutos() {
    return(
        <div>
            <NavBarComponents />
            <div className="table-container">
                <Table />
            </div>
            <FooterComponent />
        </div>
    )
}