import { useEffect, useState } from "react";
import axios from "axios";

export default function getLivros ()  {

    const [dados, setDados] = useState([])

    useEffect(() => { // Requisição para conseguir os dados de cada personagem
        axios.get("https://api-editora.onrender.com/livros").then((response) => {
            setDados(response.data)
            console.log(dados)
        }).catch((error) => {
            console.log(error)
        })
    },[]);

    const livrosRomance = dados.filter(dado => dado.genero == "Romance");
    console.log(livrosRomance);

    const livrosComedia = dados.filter(dado => dado.genero == "Comedia");
    console.log(livrosComedia);

    const livrosClassicos = dados.filter(dado => dado.genero == "Clássico");
    console.log(livrosClassicos);

    const livrosSuspense = dados.filter(dado => dado.genero == "Suspense/Mistério");
    console.log(livrosSuspense);

    const livrosFantasia = dados.filter(dado => dado.genero == "Fantasia");
    console.log(livrosFantasia);
}




