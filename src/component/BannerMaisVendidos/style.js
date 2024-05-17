import styled from "styled-components";

export const MaisVendidos = styled.div`
    display: flex;
    align-items: left;
    justify-content: space-between;
    background-color: var(--vinho-100);

    margin-bottom: 50px;
    height: 400px;
    width: 100vw;

    position: relative;
    z-index: -1;

    div{
        display: flex;
        flex-direction: column;
        padding: 100px;
        gap: 20px;
    }

    img{
        width: auto;
        height: 100%;
        z-index: 1;
    }

    h1{
        font-size: 48px;
        font-weight: 700;
        color: var(--branco-1000);
    }

    p{
        font-size: 36px;
        font-weight: lighter;
        color: var(--branco-1000);
    }
`


