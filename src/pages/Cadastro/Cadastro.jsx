import FundoLogin from "../Login/FundoLogin";
import livros from "../Login/imagens/livros.png";
import invisivel from "../Login/imagens/invisivel.png";
import olho from "../Login/imagens/olho.png";
import { useState } from "react";
import sign from "../../service/api"
import "./Cadastro.css";


export default function Cadastro(){

        const [nome, setNome] = useState('');
        const [email, setEmail] = useState('')
        const [senha, setSenha] = useState('')
        const [sobrenome, setSobrenome] = useState('')
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
    const mudaSobrenome = (e) => {
          setSobrenome(e.target.value)
        }
    
    const Cadastrar = async (e) =>{
        e.preventDefault();

        if (!email || !senha || !nome || !sobrenome) {
            window.alert('Por favor, insira todos o dados requisitados para a construção do cadastro');
            return;
          }

let user = "user"
          setCarregando(true)

          try {
            const response = await sign.post('/register', {
              email,
              senha,
              nome,
              sobrenome,
              tipo: user
            });
                if(response){
                    window.alert("Usuario criado com Sucesso!")
                    window.location.href = "/"
                }
            }
     
            catch (error) {
                console.log(error)
                setErro("Erro ao fazer cadastro");
            }
            finally{
                setCarregando(false);
            }
    }

    
    const [MostrarSenha, setMostrarSenha] = useState(false)

    const Esconder = () => setMostrarSenha(!MostrarSenha)


    return (
    
        <div className="teste">
              <FundoLogin />

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
                <img className="livros" src={livros} />
                
                <div className="infor">

                        <div className="superPai">
                            <h1 className="titulo2"> REGISTER </h1>

                            <div className="areanome">
                            <p className="subtitulo">Nome</p>    
                            <input className="Nome" type="text"
                            placeholder="Digite seu Nome  " 
                             value={nome}
                             onChange={mudaNome}
                            required />
                            </div>

                            <div className="areaSobrenome">
                            <p className="subtitulo">Sobrenome</p>    
                            <input className="Nome" type="text"
                            placeholder="Digite seu Sobrenome" 
                             value={sobrenome}
                             onChange={mudaSobrenome}
                            required />
                            </div>

                            <div className="areaemail">
                            <p className="subtitulo">Email</p>
                            <input className="Email" 
                            placeholder="Digite seu Email "
                            value={email}
                            onChange={mudaEmail} 
                            required
                            />
                            </div>

                            <div className="areasenha">
                            <p className="subtitulo">Senha</p>
                            <input className="Senha"
                            type={ MostrarSenha ? "text" :"password"} 
                            placeholder="Insira pelo menos 8 caracteres" 
                             value={senha}
                             onChange={mudaSenha}
                             required
                            />
                                <button className="esconderArea" type="button" onClick={Esconder}>
                                    { MostrarSenha && <img className="esconder" src={ invisivel } />}
                                    { !MostrarSenha && <img className="esconder" src={ olho } />}
                                </button> 
                            </div>

                            <button type="submit" className="login" onClick={Cadastrar}> Sign Up</button>
                        </div>
                    </div>
            </div>
            )}
        </div>
      )
    }
        
  
