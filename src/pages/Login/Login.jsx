import FundoLogin from "./FundoLogin"
import livros from "./imagens/livros.png"
import invisivel from "./imagens/invisivel.png"
import olho from "./imagens/olho.png"
import { useState } from "react"
import sign from "../../service/api"
import "./Login.css"


export default function Login(){
    
    const [MostrarSenha, setMostrarSenha] = useState(false)

    const Esconder = () => setMostrarSenha(!MostrarSenha)

        const [nome, setNome] = useState('');
        const [email, setEmail] = useState('')
        const [senha, setSenha] = useState('')
        const [carregando, setCarregando] = useState('')
        const [erro, setErro] = useState('')


    const mudaNome = (e) => {
            setNome(e.target.value)
        }
    const mudaEmail = (e) => {
          setEmail(e.target.value)
      }
      
   const mudaSenha = (e) => {
        setSenha(e.target.value)
    }


const Logar = async (e) => {

     e.preventDefault();

        //validação se o usuário preencheu os campos
        if (!nome ||!email || !senha ){
            setErro('Preencha todos os campos');
            return
        }

        setCarregando(true)

        try{
            const resposta = await sign.post('/login', {
                nome,
                email,
                senha,
        });

        const { token } = resposta.data;
        localStorage.setItem('token', token);
        setErro(null)

        window.location.href = "/home"
    }catch(error){
        console.log(error)
        setErro("Email ou Senha incorretos");
        localStorage.removeItem('token');
    }finally{
        setCarregando(false);
    }
}

    return (
        
          <div>
            
            <div className="teste">
              <FundoLogin />
            </div>
            {erro && <p>{erro}</p> }
        {carregando? (
            <div className="loader">
              <div className="book-wrapper">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="white"
                  viewBox="0 0 126 75"
                  className="book"
                >
                  <rect
                    strokeWidth="5"
                    stroke="#e05452"
                    rx="7.5"
                    height="70"
                    width="121"
                    y="2.5"
                    x="2.5"
                  ></rect>
                  <line
                    strokeWidth="5"
                    stroke="#e05452"
                    y2="75"
                    x2="63.5"
                    x1="63.5"
                  ></line>
                  <path
                    strokeLinecap="round"
                    strokeWidth="4"
                    stroke="#c18949"
                    d="M25 20H50"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeWidth="4"
                    stroke="#c18949"
                    d="M101 20H76"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeWidth="4"
                    stroke="#c18949"
                    d="M16 30L50 30"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeWidth="4"
                    stroke="#c18949"
                    d="M110 30L76 30"
                  ></path>
                </svg>
     
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#ffffff74"
                  viewBox="0 0 65 75"
                  className="book-page"
                >
                  <path
                    strokeLinecap="round"
                    strokeWidth="4"
                    stroke="#c18949"
                    d="M40 20H15"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeWidth="4"
                    stroke="#c18949"
                    d="M49 30L15 30"
                  ></path>
                  <path
                    strokeWidth="5"
                    stroke="#e05452"
                    d="M2.5 2.5H55C59.1421 2.5 62.5 5.85786 62.5 10V65C62.5 69.1421 59.1421 72.5 55 72.5H2.5V2.5Z"
                  ></path>
                </svg>
              </div>
            </div>
          ) : (
        
                
            <div className="bigbox">
              <div className="box">
                <img className="livros" src={livros} />
              </div>
              
                <div className="infos">
                <h1 className="titulo"> LOGIN </h1>

                <div className="areanome">
                <p className="subtitulo">Nome</p>    
                <input className="Nome" type="text"
                 placeholder="Digite seu Nome Completo " 
                 value={nome}
                 onChange={mudaNome}
                 required />
                </div>

                <div className="areaemail">
                <p className="subtitulo">Email</p>
                <input className="Email" 
                placeholder="Digite seu Email "
                value={email}
                onChange={mudaEmail} />
                </div>

                <div className="areasenha">
                <p className="subtitulo">Senha</p>
                <input className="Senha"
                 type={ MostrarSenha ? "text" :"password"} 
                 placeholder="Insira pelo menos 8 caracteres" 
                 value={senha}
                 onChange={mudaSenha}/>
                    <button className="esconderArea" type="button" onClick={Esconder}>
                         { MostrarSenha && <img className="esconder" src={ invisivel } />}
                         { !MostrarSenha && <img className="esconder" src={ olho } />}
                    </button> 
                </div>

                <button className="login" onClick={Logar}> Sign Up</button>
                </div>
            </div>
          )}
            
      </div>
    )
}