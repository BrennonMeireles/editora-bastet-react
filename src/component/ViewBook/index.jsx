import capaLivroMorro from "../../assets/img/capa-livro-morro.svg"
import { ViewBook, BackBtn, Description, Book } from "./style"


export default function ViewBookC() {
    return (
        <ViewBook>
            {/* <BackBtn>voltar</BackBtn> */}
            <Book>
                <article>
                    <img src={capaLivroMorro} alt="capa do livro" />
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
                        <label htmlFor="id">ID: </label><input id="id"></input>
                    </li>
                    <li>
                        <label htmlFor="autor">Autor: </label><input></input>
                    </li>
                    <li>
                        <label htmlFor="capa">Capa: </label><input></input>
                    </li>
                    <li>
                        <label htmlFor="titulo">Titulo: </label><input></input>
                    </li>
                    <li>
                        <label htmlFor="genero">Gênero: </label><input></input>
                    </li>
                    <li>
                        <label htmlFor="isbn">ISBN: </label><input></input>
                    </li>
                    <li>
                        <label htmlFor="">Sinopse: </label><textarea name="sinopse" id="sinopse" spellCheck="false">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it
                        </textarea>
                    </li>
                </ul>
            </Description>
        </ViewBook>
    )
}