import { Tabela } from "./style";
import axios      from "axios";
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

    const deleteByID = (id) => {
        axios.delete(`https://api-editora.onrender.com/livro/apagar/${id}`)
            .then(() => {
                window.alert(`O livro com id ${id} foi deletado com sucesso!`);
                setLivros(prevLivros => prevLivros.filter(livro => livro._id !== id));
            })
            .catch(error => {
                console.error("Deu erro", error);
            });
    };

    return (
        <div>
            <Tabela>
                <thead>
                    <tr>
                        <th>ISBN</th>
                        <th>Autor</th>
                        <th>Capa</th>
                        <th id="mobile">Titulo</th>
                        <th><button>Adicionar</button></th>
                    </tr>
                </thead>
                <tbody>
                    {livros?.map((livro) => (
                        <tr key={livro.id}>
                            <td>{livro.ISBN}</td>
                            <td>{livro.autor}</td>
                            <td><img src={livro.capa} alt="Capa do Livro" /></td>
                            <td id="mobile">{livro.titulo}</td>
                            <td><a href="#" onClick={() => deleteByID(livro._id)}>Excluir</a></td>
                        </tr>
                    ))}
                </tbody>
            </Tabela>
        </div>
    );
}