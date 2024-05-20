import capaLivroHerman from "../../assets/img/capa-livro-herman.svg"
import capaLivroMorro from "../../assets/img/capa-livro-morro.svg"
import capaLivroVidasSecas from "../../assets/img/capa-livro-vida-secas.svg"
import capa1984 from "../../assets/img/capa-DomCasmurro.svg"
import capaMorte from "../../assets/img/capa-liev.svg"
import capaPequenoPrincipe from "../../assets/img/capa-livro-pequeno_principe.svg"


import { Tabela } from "./style";

export default function Table() {
    return (
        <div>
            <Tabela>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>ISBN</th>
                        <th>Autor</th>
                        <th>Capa</th>
                        <th>Titulo</th>
                        <th><button>Adicionar</button></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>10</td>
                        <td>189482</td>
                        <td>Emily Brontë</td>
                        <td><img src={capaLivroMorro} alt="" /></td>
                        <td>O Morro dos Ventos Uivantes</td>
                        <td><a href="">excluir</a></td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>189549</td>
                        <td>Graciliano Ramos</td>
                        <td><img src={capaLivroVidasSecas} alt="" /></td>
                        <td>Vidas Secas</td>
                        <td><a href="">excluir</a></td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>189356</td>
                        <td>Herman Melville</td>
                        <td><img src={capaLivroHerman} alt="" /></td>
                        <td>Bartleby o Escrivão</td>
                        <td><a href="">excluir</a></td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>199482</td>
                        <td>George W.</td>
                        <td><img src={capa1984} alt="" /></td>
                        <td>1984</td>
                        <td><a href="">excluir</a></td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>200765</td>
                        <td>Liev Tolstói</td>
                        <td><img src={capaMorte} alt="" /></td>
                        <td>A Morte de John Jlitch </td>
                        <td><a href="">excluir</a></td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>987654</td>
                        <td>Antoine de S.</td>
                        <td><img src={capaPequenoPrincipe} alt="" /></td>
                        <td>O Pequeno Príncipe</td>
                        <td><a href="">excluir</a></td>
                    </tr>
                </tbody>
            </Tabela>
        </div>
    )
}