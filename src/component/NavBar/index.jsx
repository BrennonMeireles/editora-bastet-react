import {NavBar} from "./style";
import LogoNav from "../../assets/img/logo-nav.svg";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router-dom";
 
function NavBarComponents(){
   
    return (
        <NavBar>
                <div className="container-NavBar">
                    <img src={LogoNav} alt="logo" />
                    <div>
                        <Link to="/">Home</Link>
                        <Link to="/ver-livro" >Livros</Link>
                        <Link to="/novo-livro" >Novo Livro</Link>
                        <Link to="/produtos">Estoque</Link>
                    </div>  
                 
                    <div className="input-buscar">
                       <input type="text" placeholder="Buscar" />
                       <IoIosSearch />
                    </div>            
                </div>  
        </NavBar>
    );
   
}
export default NavBarComponents;