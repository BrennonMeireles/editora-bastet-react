import {NavBar} from "./style";
import LogoNav from "../../assets/img/logo-nav.svg";
import { IoIosSearch } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

 
function NavBarComponents(){

    const [searchValue, setSearchValue] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        if (searchValue.trim()) {
            navigate(`/search/${searchValue}`);
        }
    };
   
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
                       <input type="text" placeholder="Buscar" value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
                       <IoIosSearch style={{cursor: "pointer"}} onClick={handleSearch} />
                    </div>            
                </div>  
        </NavBar>
    );
   
}
export default NavBarComponents;