import { FaRegPaste } from "react-icons/fa6";
import { ViewBook, Description, Book } from "../ViewBook/style"
import {useState }   from "react";
import axios         from "axios";

export default function NewBook() {
    
    const [autor, setAutor] = useState('');
    const [capa, setCapa] = useState('');
    const [titulo, setTitulo] = useState('');
    const [genero, setGenero] = useState('');
    const [isbn, setISBN] = useState('');
    const [sinopse, setSinopse] = useState('');

    const adicionarLivro = () => {
        try{
            axios.post("https://api-editora.onrender.com/livro/salvar", {
                autor: autor,
                capa: capa,
                titulo: titulo, 
                genero: genero,
                ISBN: isbn,
                sinopse: sinopse
            },
                window.alert("Livro adicionado com sucesso !!!"),
                setAutor(''),
                setCapa(''),
                setTitulo(''),
                setGenero(''),
                setISBN(''),
                setSinopse('')
            )
        } catch(error){
            console.log("Erro ao salvar livro", error)
        }
    }

    return (
        <ViewBook>
            {/* <BackBtn>voltar</BackBtn> */}
            <Book>
                <article>
                    <FaRegPaste />
                    <p>Adicione a URL da imagem em "CAPA"</p>
                </article>
                <div>
                    <button>Excluir</button>
                    <button>Atualizar</button>
                    <button onClick={adicionarLivro}>Adicionar</button>
                </div>
            </Book>
            <Description>
                <ul>
                    <li>
                        <label htmlFor="autor">Autor: </label><input   placeholder="Digite aqui..." value={autor} onChange={(e) => (setAutor(e.target.value))} ></input>
                    </li>
                    <li>
                        <label htmlFor="capa">Capa: </label><input     placeholder="Digite aqui..." value={capa} onChange={(e) => (setCapa(e.target.value))}></input>
                    </li>
                    <li>
                        <label htmlFor="titulo">Titulo: </label><input placeholder="Digite aqui..." value={titulo} onChange={(e) => (setTitulo(e.target.value))}></input>
                    </li>
                    <li>
                        <label htmlFor="genero">Gênero: </label><input placeholder="Digite aqui..." value={genero} onChange={(e) => (setGenero(e.target.value))}></input>
                    </li>
                    <li>
                        <label htmlFor="isbn">ISBN: </label><input     placeholder="Digite aqui..." value={isbn} onChange={(e) => (setISBN(e.target.value))}></input>
                    </li>
                    <li>
                        <label htmlFor="">Sinopse: </label><textarea name="sinopse" id="sinopse" spellCheck="false" placeholder="Digite aqui..." style={{border: "1px solid grey"}} value={sinopse} onChange={(e) => (setSinopse(e.target.value))}>
                        </textarea>
                    </li>
                </ul>
            </Description>
        </ViewBook>
    )
}