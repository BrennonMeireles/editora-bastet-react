import { FaRegPaste } from "react-icons/fa6";
import { ViewBook, BackBtn, Description, Book } from "../ViewBook/style"


export default function NewBook() {
    return (
        <ViewBook>
            {/* <BackBtn>voltar</BackBtn> */}
            <Book>
                <article>
                    <FaRegPaste />
                    <p>Adicione a URL da imagem em "CAPA"</p>
                </article>
                <div>
                    <button>excluir</button>
                    <button>atualizar</button>
                    <button>adicionar</button>
                </div>
            </Book>
            <Description>
                <ul>
                    <li>
                        <label htmlFor="id">ID: </label><input        placeholder="Digite aqui..." id="id"></input>
                    </li>
                    <li>
                        <label htmlFor="autor">Autor: </label><input   placeholder="Digite aqui..." ></input>
                    </li>
                    <li>
                        <label htmlFor="capa">Capa: </label><input     placeholder="Digite aqui..." ></input>
                    </li>
                    <li>
                        <label htmlFor="titulo">Titulo: </label><input placeholder="Digite aqui..." ></input>
                    </li>
                    <li>
                        <label htmlFor="genero">Gênero: </label><input placeholder="Digite aqui..." ></input>
                    </li>
                    <li>
                        <label htmlFor="isbn">ISBN: </label><input     placeholder="Digite aqui..." ></input>
                    </li>
                    <li>
                        <label htmlFor="">Sinopse: </label><textarea name="sinopse" id="sinopse" spellCheck="false" placeholder="Digite aqui..." style={{border: "1px solid grey"}}>
                        </textarea>
                    </li>
                </ul>
            </Description>
        </ViewBook>
    )
}