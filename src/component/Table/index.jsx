import capaLivroMorro from "../../assets/img/capa-livro-morro.svg"
import { Tabela } from "./style";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Table() {
    const [livros, setLivros] = useState([]);

    useEffect(() => {
        axios.get("https://api-editora.onrender.com/livros")
            .then((response) => {
                setLivros(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <div>
            <Tabela>
                <thead>
                    <tr>
                        <th>ISBN</th>
                        <th>Autor</th>
                        <th>Capa</th>
                        <th>Titulo</th>
                        <th><button>Adicionar</button></th>
                    </tr>
                </thead>
                <tbody>
                    {livros?.map((livro) => (
                        <tr key={livro.id}>
                            <td>{livro.ISBN}</td>
                            <td>{livro.autor}</td>
                            <td><img src={livro.capa} alt="Capa do Livro" /></td>
                            <td>{livro.titulo}</td>
                            <td><a href="#">excluir</a></td>
                        </tr>
                    ))}
                </tbody>
            </Tabela>
        </div>
    );
}
