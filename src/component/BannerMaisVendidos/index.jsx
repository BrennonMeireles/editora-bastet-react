import { MaisVendidos } from "./style";

import LivrosBanner from "../../assets/img/livros.svg"

export default function BMaisVendidos() {
    return (
        <div>
            <MaisVendidos>
                <div>
                    <h1>Livros mais Vendidos</h1>
                    <p>Conheça os bestsellers<br></br> da nossa editora</p>
                </div>

                <img src={LivrosBanner} alt="" />
            </MaisVendidos>
        </div>
    )
}