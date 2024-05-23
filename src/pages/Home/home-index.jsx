import NavBarComponents    from "../../component/NavBar";
import FooterComponent     from "../../component/Footer";
import SliderBookComponent from "../../component/SliderBooks";
import SliderBanner        from "../../component/SliderBanner";
import BannerLacamento     from "../../component/BanLancamento";

// imagens dos sliderbook 1 - Lançamentos
import capaLivroHerman     from "../../assets/img/capa-livro-herman.svg"
import capaLivroMorro      from "../../assets/img/capa-livro-morro.svg"
import capaLivroVidasSecas from "../../assets/img/capa-livro-vida-secas.svg"
import capaDomCasmurro     from "../../assets/img/capa-DomCasmurro.svg"
import capaMorte           from "../../assets/img/capa-liev.svg"
import capaPequenoPrincipe from "../../assets/img/capa-livro-pequeno_principe.svg"
import BMaisVendidos from "../../component/BannerMaisVendidos";
import axios from "axios";
import { useState, useEffect } from "react";


const title = "Lançamentos"

const title2 = "Romance"

const title3 = "Clássicos"

const title4 = "Fantasia"

const title5 = "Mistério / Suspense"


export default function Home() {

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
    
    const livrosClassicos = dados.filter(dado => dado.genero == "Clássico");

    const livrosSuspense = dados.filter(dado => dado.genero == "Suspense/Mistério");

    const livrosFantasia = dados.filter(dado => dado.genero == "Fantasia");

    return (
        <div>
            <NavBarComponents />
            <SliderBanner />
            <SliderBookComponent title={title}  images={dados} />
            <BannerLacamento />
            <BMaisVendidos />
            <SliderBookComponent title={title2} images={livrosRomance} />
            <SliderBookComponent title={title3} images={livrosClassicos} />
            <SliderBookComponent title={title4} images={livrosFantasia} />
            <SliderBookComponent title={title5} images={livrosSuspense} />
            <FooterComponent />
        </div>
    )
}