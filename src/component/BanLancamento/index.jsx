import { BanLancamento, TitleBan, Text, TextContainer, BookContainer, Button } from "./style"

import capaLivroMorroVentos from "../../assets/img/capa-livro-morro-vu.png"
import backimg from "../../assets/img/teste.png"

export default function BannerLacamento() {
    return (
        <BanLancamento>
            <div>
                <img src={backimg} alt="" />
                <TextContainer>
                    <TitleBan>Lançamento</TitleBan>
                    <Text>
                        Descubra o poderoso encanto de O Vento dos Morros Uivantes, uma jornada literária
                        hipnotizante pelas paisagens vívidas e as histórias cativantes dos morros selvagens.<br></br><br></br>

                        Esta obra envolvente transporta os leitores para um mundo de mistério e emoção, onde os
                        segredos dos morros ecoam como o vento, deixando uma marca indelével no coração de quem
                        se aventura por suas páginas. Prepare-se para ser envolvido por uma narrativa que brinca
                        com os sentidos e alimenta a imaginação, enquanto explora os desafios e as maravilhas que
                        habitam as encostas dos morros uivantes.
                    </Text>
                    <Button>ver livro</Button>
                </TextContainer>
                <BookContainer>
                    <img src={capaLivroMorroVentos} alt="capa do livro morro dos ventos uivantes" />
                </BookContainer>
            </div>
        </BanLancamento>
    )
}