import NavBarComponents    from "../../component/NavBar";
import FooterComponent     from "../../component/Footer";
import SliderBookComponent from "../../component/SliderBooks";
import SliderBanner        from "../../component/SliderBanner";
import BannerLacamento     from "../../component/BanLancamento";

import capaLivroHerman     from "../../assets/img/capa-livro-herman.svg"
import capaLivroMorro      from "../../assets/img/capa-livro-morro.svg"
import capaLivroVidasSecas from "../../assets/img/capa-livro-vida-secas.svg"
import capaDomCasmurro     from "../../assets/img/capa-DomCasmurro.svg"
import capaMorte           from "../../assets/img/capa-liev.svg"
import capaPequenoPrincipe from "../../assets/img/capa-livro-pequeno_principe.svg"

const title = "Lançamentos"
const images = [
    capaLivroHerman,
    capaLivroMorro,
    capaLivroVidasSecas,
    capaMorte,
    capaDomCasmurro,
    capaPequenoPrincipe
]

export default function Home() {
    return (
        <div>
            <NavBarComponents />
            <SliderBanner />
            <SliderBookComponent title={title} images={images} />
            <BannerLacamento />
            <FooterComponent />
        </div>
    )
}