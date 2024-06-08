import { ViewBook, Description, Book } from "./style";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ViewBookC(props) {

  const navigate = useNavigate();
  
  const deleteByID = (id) => {
    axios.delete(`https://api-editora.onrender.com/livro/apagar/${id}`)
        .then(() => {
            window.alert(`O livro com id ${id} foi deletado com sucesso!`);
            navigate("/produtos")
        })
        .catch(error => {
            console.error("Deu erro", error);
        });
};

  return (
    <ViewBook>
      {/* <BackBtn>voltar</BackBtn> */}
      <Book>
        <article>
          <img src={props.capa} alt="capa do livro" />
        </article>
        <div>
          <button onClick={() => deleteByID(props.id)}>Excluir</button>
          <button>Atualizar</button>
          <Link to={"/novo-livro"} style={{textDecoration: 'none', color: 'black', cursor: 'pointer'}} >
            <button>Adicionar</button>
          </Link>
        </div>
      </Book>
      <Description>
        <ul>
          <li id="id">
            <label htmlFor="id">ID: </label>
            <input id="id" value={props.id} readOnly />
          </li>
          <li>
            <label htmlFor="titulo">Titulo: </label>
            <input value={props.titulo} readOnly />
          </li>
          <li>
            <label htmlFor="autor">Autor: </label>
            <input value={props.autor} readOnly />
          </li>
          <li>
            <label htmlFor="genero">Gênero: </label>
            <input value={props.genero} readOnly />
          </li>
          <li>
            <label htmlFor="isbn">ISBN: </label>
            <input value={props.ISBN} readOnly />
          </li>
          <li>
            <label htmlFor="capa">Capa: </label>
            <input value={props.capa} readOnly />
          </li>
          <li>
            <label htmlFor="sinopse">Sinopse: </label>
            <textarea id="sinopse" value={props.sinopse} readOnly spellCheck="false" />
          </li>
        </ul>
      </Description>
    </ViewBook>
  );
}
