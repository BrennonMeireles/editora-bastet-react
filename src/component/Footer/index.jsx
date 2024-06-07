import { Footer } from "./style"
import LogoNav    from "../../assets/img/logo-nav.svg"
import { Link }   from "react-router-dom"

export default function FooterComponent() {
    return (
        <Footer>
            <div className="title-container">
                <h1>Editora Bastet</h1>
                <img src={LogoNav} alt="logo da editora bastet" />
            </div>
            <div className="list-container">
                <ul>
                    <li>Contato</li>
                    <li>Autores</li>
                </ul>
                <ul>
                    <Link to="/home">Home</Link>
                    <Link to="/produtos">Livros</Link>
                </ul>
                <ul>
                    <li>Quem Somos</li>
                </ul>
            </div>
        </Footer>
    )
}