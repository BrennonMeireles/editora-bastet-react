import {NavBar} from "./style";
import LogoNav from "../../assets/img/logo-nav.svg";
 
function NavBarComponents(){
   
    return (
        <NavBar>
                <div className="container-NavBar">
                    <img src={LogoNav} alt="logo" />
                    <div>
                        <a>Home</a>
                        <a>Livros</a>
                        <a>Contatos</a>
                        <a>Estoque</a>
                    </div>  
                 
                    <div className="input-buscar">
                       <input type="text" placeholder="Buscar" />
                       
                    </div>            
                </div>  
        </NavBar>
    );
   
}
export default NavBarComponents;