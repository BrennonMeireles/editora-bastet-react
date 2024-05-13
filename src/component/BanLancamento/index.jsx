import { BanLancamento, TitleBan, Text, TextContainer, BookContainer } from "./style"

import capaLivroMorroVentos from "../../assets/img/capa-livro-morro-vu.png"

export default function BannerLacamento() {
    return (
        <BanLancamento>
            <TextContainer>
                <TitleBan>Lançamento</TitleBan>
                <Text>
                    Lorem ipsum dolor sit amet consectetur. Amet vitae turpis ante nullam venenatis amet.
                    Id justo nulla bibendum ultrices suspendisse id eget vitae. Cras proin cursus libero
                    aliquam maecenas felis imperdiet. Adipiscing cursus non lectus mauris facilisi cursus.<br></br><br></br>

                    Lorem ipsum dolor sit amet consectetur. Amet vitae turpis ante nullam venenatis amet.
                    Id justo nulla bibendum ultrices suspendisse id eget vitae. Cras proin cursus libero
                    aliquam maecenas felis imperdiet. Adipiscing cursus non lectus mauris facilisi cursus.
                </Text>
            </TextContainer>
            <BookContainer>
                <img src={capaLivroMorroVentos} alt="capa do livro morro dos ventos uivantes" />
            </BookContainer>
        </BanLancamento>
    )
}