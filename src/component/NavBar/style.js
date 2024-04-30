import styled from "styled-components";

export const NavBar = styled.nav`
    
    display: flex;
    height: 100px;
    width: 1360px;
    background-color: #37192C;
    border-radius: 50px;
    align-items: center;
    justify-content: space-between;

    a{
        color: #FFF;
        font-family: Inter;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }

    div{
        display: flex;
        gap:60px
    }
`