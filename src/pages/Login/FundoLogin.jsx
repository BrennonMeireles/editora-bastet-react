import "./FundoLogin.css"
import logo from "./imagens/logo.png"

export default function FundoLogin() {

    return (
        <div className="Fundo">
            <img className="logo" src={logo} />
            <div className="bola2"></div>
            <div className="retangulo"></div>
            <div className="bola1"></div>
        </div>
    )
}