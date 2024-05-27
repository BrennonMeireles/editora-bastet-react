export default function ViewBookC() {
    return (
        <section>
            <button>voltar</button>
            <div>
                <img src="" alt="" />
                <button>excluir</button>
                <button>atualizar</button>
                <button>adicionar</button>
            </div>
            <div>
                <ul>
                    <label htmlFor="id"></label>
                    <input>ID</input>
                    <label htmlFor="isbn"></label>
                    <input>ISBN</input>
                    <label htmlFor="autor"></label>
                    <input>Autor</input>
                    <label htmlFor="capa"></label>
                    <input>Capa</input>
                    <label htmlFor="titulo"></label>
                    <input>Titulo</input>
                    <label htmlFor="genero"></label>
                    <input>Gênero</input>
                    <textarea name="sinopse" id="sinopse">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it
                    </textarea>
                </ul>
            </div>
        </section>
    )
}