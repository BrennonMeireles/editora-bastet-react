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
                        <td><img src="src/assets/img/capa-livro-morro.svg" alt="" /></td>
                        <td>O Morro dos Ventos Uivantes</td>
                        <td><a href="">excluir</a></td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td>189549</td>
                        <td>Graciliano Ramos</td>
                        <td><img src="src/assets/img/capa-livro-vida-secas.svg" alt="" /></td>
                        <td>Vidas Secas</td>
                        <td><a href="">excluir</a></td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>189356</td>
                        <td>Herman Melville</td>
                        <td><img src="src/assets/img/capa-livro-herman.svg" alt="" /></td>
                        {/* C:\Users\CT Desenvolvimento\Desktop\Nova pasta\editora-bastet-react\src\assets\img */}
                        <td>Bartleby o Escrivão</td>
                        <td><a href="">excluir</a></td>
                    </tr>
                </tbody>
            </Tabela>
        </div>
    )
}