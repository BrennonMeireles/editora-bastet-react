import { Footer } from "./style"
import LogoNav from "../../assets/img/logo-nav.svg"

export default function FooterComponent() {
    return (
        <Footer>
            <div className="title-container">
                <h1>Editora Bastet</h1>
                <img src= {LogoNav} alt="logo da editora bastet" />
            </div>
            <div className="list-container"> 
                <ul>
                    <li>Autores</li>
                    <li>Livros</li>
                </ul>
                <ul>
                    <li>Contato</li>
                    <li>Home</li>
                </ul>
                <ul>
                    <li>Quem Somos</li>
                </ul>
            </div>
        </Footer>
    )
}