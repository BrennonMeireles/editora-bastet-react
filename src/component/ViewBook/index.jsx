import { ViewBook, Description, Book } from "./style";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function ViewBookC(props) {
  let tipo = localStorage.getItem('tipo')
  const navigate = useNavigate();
  const [autor, setAutor] = useState('');
  const [capa, setCapa] = useState('');
  const [titulo, setTitulo] = useState('');
  const [genero, setGenero] = useState('');
  const [isbn, setISBN] = useState('');
  const [sinopse, setSinopse] = useState('');
  const [editar, setEditar] = useState(false);

  useEffect(() => {
    setAutor(props.autor);
    setCapa(props.capa);
    setTitulo(props.titulo);
    setGenero(props.genero);
    setISBN(props.ISBN);
    setSinopse(props.sinopse);
  }, [props]);

  const deleteByID = (id) => {
    axios.delete(`https://api-editora.onrender.com/livro/apagar/${id}`)
      .then(() => {
        window.alert(`O livro com id ${id} foi deletado com sucesso!`);
        navigate("/produtos");
      })
      .catch(error => {
        console.error("Deu erro", error);
      });
  };

  const updateByID = (id) => {
    if (!editar) {
      setEditar(true);
    } else {
      axios.put(`https://api-editora.onrender.com/livro/alterar/${id}`, {
        autor: autor,
        capa: capa,
        titulo: titulo,
        genero: genero,
        ISBN: isbn,
        sinopse: sinopse
      })
        .then(() => {
          window.alert("Livro alterado com sucesso !!!");
          setEditar(false);
        })
        .catch(error => {
          console.log("Erro ao alterar o livro", error);
        });
    }
  };

  return (
    <ViewBook>
      <Book>
        <article>
          <img src={props.capa} alt="capa do livro" />
          <div>
            { tipo ==="SENAI511@"?(
              <>
              <button onClick={() => deleteByID(props.id)}>Excluir</button>
              <button onClick={() => updateByID(props.id)}>
                {editar ? "Alterar" : "Atualizar"}
              </button>
              <Link to={"/novo-livro"} style={{ textDecoration: 'none', color: 'black', cursor: 'pointer' }}>
                <button>Adicionar</button>
              </Link>
              </>
            ) : (
              null
            )}
          </div>
        </article>
       
      </Book>
      <Description>
        <ul>
          <li id="id">
            <label htmlFor="id">ID: </label>
            <input id="id" value={props.id} readOnly />
          </li>
          <li>
            <label htmlFor="titulo">Titulo: </label>
            <input id="titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)} readOnly={!editar}/>
          </li>
          <li>
            <label htmlFor="autor">Autor: </label>
            <input id="autor" value={autor} onChange={(e) => setAutor(e.target.value)} readOnly={!editar}/>
          </li>
          <li>
            <label htmlFor="genero">Gênero: </label>
            <input id="genero" value={genero} onChange={(e) => setGenero(e.target.value)} readOnly={!editar}/>
          </li>
          <li>
            <label htmlFor="isbn">ISBN: </label>
            <input id="isbn" value={isbn} onChange={(e) => setISBN(e.target.value)} readOnly={!editar}/>
          </li>
          <li>
            <label htmlFor="capa">Capa: </label>
            <input id="capa" value={capa} onChange={(e) => setCapa(e.target.value)} readOnly={!editar}/>
          </li>
          <li>
            <label htmlFor="sinopse">Sinopse: </label>
            <textarea id="sinopse" value={sinopse} onChange={(e) => setSinopse(e.target.value)} readOnly={!editar} spellCheck="false"/>
          </li>
        </ul>
      </Description>
    </ViewBook>
  );
}
