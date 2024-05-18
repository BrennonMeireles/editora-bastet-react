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
                    <li>Contato</li>
                    <li>Autores</li>
                </ul>
                <ul>
                    <li>Home</li>
                    <li>Livros</li>
                </ul>
                <ul>
                    <li>Quem Somos</li>
                </ul>
            </div>
        </Footer>
    )
}