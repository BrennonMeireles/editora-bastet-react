import { Tabela } from "./style";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
                        <th>
                            <Link to={"/novo-livro"} style={{textDecoration: 'none', color: 'black', cursor: 'pointer'}} >
                                <button style={{cursor: 'pointer'}}>
                                    Adicionar
                                </button>
                            </Link>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {livros?.map((livro) => (
                            <tr key={livro.id}>
                                <td>
                                    <Link to={`/livro/${livro._id}`} style={{textDecoration: 'none', color: 'black'}}>
                                        {livro.ISBN}
                                    </Link>
                                </td>
                                <td>
                                    <Link to={`/livro/${livro._id}`} style={{textDecoration: 'none', color: 'black'}}>
                                        {livro.autor}
                                    </Link>
                                </td>
                                <td>
                                    <Link to={`/livro/${livro._id}`} style={{textDecoration: 'none', color: 'black'}}>
                                        <img src={livro.capa} alt="Capa do Livro" />
                                    </Link>
                                </td>
                                <td id="mobile">
                                    <Link to={`/livro/${livro._id}`} style={{textDecoration: 'none', color: 'black'}}>
                                        {livro.titulo}
                                    </Link>
                                </td>
                                <td><a href="#" onClick={() => deleteByID(livro._id)}>Excluir</a></td>
                            </tr>
                    ))}
                </tbody>
            </Tabela>
        </div>
    );
}
