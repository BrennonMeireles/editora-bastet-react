import { ViewBook, Description, Book } from "./style";

export default function ViewBookC(props) {
  return (
    <ViewBook>
      {/* <BackBtn>voltar</BackBtn> */}
      <Book>
        <article>
          <img src={props.capa} alt="capa do livro" />
        </article>
        <div>
          <button>Excluir</button>
          <button>Atualizar</button>
          <button>Adicionar</button>
        </div>
      </Book>
      <Description>
        <ul>
          <li>
            <label htmlFor="id">ID: </label>
            <input id="id" value={props.id} readOnly />
          </li>
          <li>
            <label htmlFor="autor">Autor: </label>
            <input value={props.autor} readOnly />
          </li>
          <li>
            <label htmlFor="capa">Capa: </label>
            <input value={props.capa} readOnly />
          </li>
          <li>
            <label htmlFor="titulo">Titulo: </label>
            <input value={props.titulo} readOnly />
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
            <label htmlFor="sinopse">Sinopse: </label>
            <textarea id="sinopse" value={props.sinopse} readOnly spellCheck="false" />
          </li>
        </ul>
      </Description>
    </ViewBook>
  );
}
