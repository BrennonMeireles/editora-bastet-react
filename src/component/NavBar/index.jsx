import React from "react";
import "./style";
import {NavBar} from "./style";



function NavBarComponents(){
    
    return ( 
        <div>
            <NavBar>
                    <img src="./src/assets/img/logo-nav.svg" alt="logo" />
                    <div>
                        <a>Home</a>
                        <a>Livros</a>
                        <a>Contatos</a>
                        <a>Estoque</a>
                    </div>               
            </NavBar>
        </div>  
    );
    
}
export default NavBarComponents;