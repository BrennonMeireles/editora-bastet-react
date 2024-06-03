import NavBarComponents from "../../component/NavBar";
import FooterComponent  from "../../component/Footer";
import ViewBook          from "../../component/ViewBook";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Livro(){

  const [livro, setLivro] = useState('')
  const {id} = useParams();

  useEffect(() => {
    axios.get(`https://api-editora.onrender.com/livro/${id}`)
      .then((response) => {
        setLivro(response.data);
      })
        .catch((error) => {
          console.log(error);
        });
  }, [id]);

    return(
        <section>
            <NavBarComponents />
              <ViewBook id={livro._id} autor={livro.autor} capa={livro.capa} titulo={livro.titulo} genero={livro.genero} ISBN={livro.ISBN} sinopse={livro.sinopse}/>
            <FooterComponent />
        </section>
    )
}