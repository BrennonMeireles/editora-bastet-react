import styled from "styled-components";

export const NavBar = styled.nav `
 
 @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');
 
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px;
    
    .container-NavBar{
        display: flex;
        height: 80px;
        width: 95%;
        background-color: #37192C;
        border-radius: 50px;
        align-items: center;
        justify-content: space-between;
        padding-left: 25px;
        padding-right: 25px;
        box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.30);

    }
    a{
        color: #FFF;
        font-family: "Inter", sans-serif;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
 
    div{
        display: flex;
        gap:60px
    }
 
    .input-buscar{
        padding: 8px 12px;
        display: flex;
        align-items: center;
        gap: 6px;
        background-color: #FFF;
        border-radius: 20px;
       
       
    }
 
    input{
        background-color: transparent;
        border: none;
        color: black;
        font-size: 18px;
        width: 338px;
        height: 24px;
    }
 
    input:focus-visible {
    outline: none;
    }

    
    


`