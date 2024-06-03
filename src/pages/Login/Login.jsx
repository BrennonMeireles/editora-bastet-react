import FundoLogin from "./FundoLogin"
import livros from "./imagens/livros.png"
import invisivel from "./imagens/invisivel.png"
import olho from "./imagens/olho.png"
import { useState } from "react"
import "./Login.css"


export default function Login(){
    
    const [MostrarSenha, setMostrarSenha] = useState(false)

    const Esconder = () => setMostrarSenha(!MostrarSenha)

    return (
        <body>
            <div className="teste">
                <FundoLogin />
            </div>
            <div className="bigbox">
                <img className="livros" src={livros} />
                
                <div className="infos">
                <h1 className="titulo"> LOGIN </h1>

                <div className="areanome">
                <p className="subtitulo">Nome</p>    
                <input className="Nome" placeholder="Digite seu Nome Completo " />
                </div>

                <div className="areaemail">
                <p className="subtitulo">Email</p>
                <input className="Email" placeholder="Digite seu Email " />
                </div>

                <div className="areasenha">
                <p className="subtitulo">Senha</p>
                <input className="Senha" type={ MostrarSenha ? "text" :"password"} placeholder="Insira pelo menos 8 caracteres" />
                    <button className="esconderArea" type="button" onClick={Esconder}>
                         { MostrarSenha && <img className="esconder" src={ invisivel } />}
                         { !MostrarSenha && <img className="esconder" src={ olho } />}
                    </button> 
                </div>

                <button className="login"> Sign Up</button>
                </div>
            </div>
        </body>
            
            
    )
}