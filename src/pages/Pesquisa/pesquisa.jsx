import { Tabela } from "./style";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import NavBarComponents from "../../component/NavBar";
import FooterComponent from "../../component/Footer";


export default function PesquisaPage() {
    const [livros, setLivros] = useState([]);
    const { titulo } = useParams();

    useEffect(() => {
        axios.get(`https://api-editora.onrender.com/buscar/${titulo}`)
            .then((response) => {
                setLivros(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, [titulo]);

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
            <NavBarComponents />
            <Tabela>
                <thead>
                    <tr>
                        <th>ISBN</th>
                        <th>Autor</th>
                        <th>Capa</th>
                        <th id="mobile">Titulo</th>
                        <th>
                            <Link to={"/novo-livro"} style={{textDecoration: 'none', color: 'black', cursor: 'pointer'}} >
                                <button>Adicionar</button>
                            </Link>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {livros.map((livro) => (
                        <tr key={livro._id}>
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
            <FooterComponent />
        </div>
    );
}
