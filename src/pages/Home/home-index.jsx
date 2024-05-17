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

const title = "Lançamentos"
const images = [
    capaLivroHerman,
    capaLivroMorro,
    capaLivroVidasSecas,
    capaMorte,
    capaDomCasmurro,
    capaPequenoPrincipe
]

const title2 = "Romance"
const images2 = [
    capaLivroHerman,
    capaLivroMorro,
    capaLivroVidasSecas,
    capaMorte,
    capaDomCasmurro,
    capaPequenoPrincipe
]

const title3 = "Clássicos"
const images3 = [
    capaLivroHerman,
    capaLivroMorro,
    capaLivroVidasSecas,
    capaMorte,
    capaDomCasmurro,
    capaPequenoPrincipe
]

const title4 = "Fantasia"
const images4 = [
    capaLivroHerman,
    capaLivroMorro,
    capaLivroVidasSecas,
    capaMorte,
    capaDomCasmurro,
    capaPequenoPrincipe
]

const title5 = "Mistério / Suspense"
const images5 = [
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
            <SliderBookComponent title={title}  images={images} />
            <BannerLacamento />
            <SliderBookComponent title={title2} images={images2} />
            <SliderBookComponent title={title3} images={images3} />
            <SliderBookComponent title={title4} images={images4} />
            <SliderBookComponent title={title5} images={images5} />
            <FooterComponent />
        </div>
    )
}