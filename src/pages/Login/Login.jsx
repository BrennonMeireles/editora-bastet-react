import FundoLogin from "./FundoLogin"
import livros     from "./imagens/livros.png"
import invisivel  from "./imagens/invisivel.png"
import olho       from "./imagens/olho.png"
import { Link, useNavigate } from "react-router-dom";
import sign         from "../../service/api"
import { useState } from "react"
import "./Login.css"


export default function Login(){
 
  const navigate = useNavigate();

  history.pushState(null, null, document.URL);
  window.addEventListener('popstate', function () {
  history.pushState(null, null, document.URL);
});

    const [MostrarSenha, setMostrarSenha] = useState(false)

    const Esconder = () => setMostrarSenha(!MostrarSenha)
        const [nome, setNome] = useState('');
        const [email, setEmail] = useState('')
        const [senha, setSenha] = useState('')
        const [carregando, setCarregando] = useState('')
        const [erro, setErro] = useState('')
        const [msgErro, setMsgErro] = useState(false)
        const [msgErro2, setMsgErro2] = useState(false)
        const mostrarErro = () => setMsgErro(true)
        const erroNome = () => setMsgErro2(true)


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

    
        //validação se o usuário preencheu os campos
        if (!nome ||!email || !senha ){
            setErro('Preencha todos os campos para efetuar o login');
            window.alert(erro);
            return;
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
        const response = await sign.get('/user', {
          headers: {
            Authorization: `Bearer ${token}`, // Enviar o token no cabeçalho da requisição
          },
        });
    
        
        localStorage.setItem('tipo',response.data.tipo)
        
      

        navigate("/home");
      

    }catch(error){
        console.log(error)
        if (error.response && error.response.status === 404){
          erroNome()
        }
        else if(error.response && error.response.status === 422 ){
          mostrarErro()
        }
        
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
            <div className="carregador">
            <div className="loader">
            <div>
              <ul>
                <li>
                  <svg fill="currentColor" viewBox="0 0 90 120">
                    <path d="M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"></path>
                  </svg>
                </li>
                <li>
                  <svg fill="currentColor" viewBox="0 0 90 120">
                    <path d="M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"></path>
                  </svg>
                </li>
                <li>
                  <svg fill="currentColor" viewBox="0 0 90 120">
                    <path d="M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"></path>
                  </svg>
                </li>
                <li>
                  <svg fill="currentColor" viewBox="0 0 90 120">
                    <path d="M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"></path>
                  </svg>
                </li>
                <li>
                  <svg fill="currentColor" viewBox="0 0 90 120">
                    <path d="M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"></path>
                  </svg>
                </li>
                <li>
                  <svg fill="currentColor" viewBox="0 0 90 120">
                    <path d="M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"></path>
                  </svg>
                </li>
              </ul>
            </div><span>Carregando...</span></div>
            </div>
          ) : (
            
            <div className="bigbox">
              <div className="box">
                <img className="livros" src={livros} />
              </div>
              
                <div className="infos">
                <h1 className="titulo"> LOGIN </h1>
                {msgErro && <p className="msgErro"> Email ou senha incorretos </p>}
                {msgErro2 && <p className="msgErro">Nome incorreto</p>}
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
                    <div className="esconderArea">
                        <input className="Senha"
                          type={ MostrarSenha ? "text" :"password"} 
                          placeholder="Insira pelo menos 8 caracteres" 
                          value={senha}
                          onChange={mudaSenha}
                        />
                        <div className="revelacao" >
                          <div onClick={Esconder}>
                                { MostrarSenha && <img className="esconder" src={ olho } />}
                                { !MostrarSenha && <img className="esconder" src={ invisivel } />}
                                </div>
                          </div>
                    </div> 
                </div>

                <button className="login" onClick={Logar}> Sign In</button>

                <div className="centralizando"> 
                <Link to={`/Cadastro`} className="cad"> Register </Link>
                </div>
                </div>
            </div>
          )}
      </div>
    )
}