import styled from "styled-components";

export const BanLancamento = styled.div`
    /* background-image: url(../src/assets/img/banner-lancamento.png);
    background-repeat: no-repeat;
    background-size: cover; */

    display: flex;   
    
    width: 100vw;
    height: 100vh;
    /* padding: 3.125rem; */
    
    div {
        display: flex;
    }

    img{
        position: absolute;
        /* object-fit: cover; */
        z-index: -1;
        width: 100vw;
        height: 100vh;
    }
`

export const TitleBan = styled.h1`
    @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap');

    font-size: 2.25rem;
    font-family: "Libre Baskerville", serif;
    font-weight: 700;

    color: #fff;
    margin-bottom: 1.875rem;
`

export const Text = styled.p`
    font-size: 1.25rem;
    color: #fff;
`
export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 6.25rem;    
    width: 46%;
    height: 37.5rem;
    background-color: rgba(0,0,0, 0.5);
`

export const BookContainer = styled.div`
    display: flex;
    padding-top: 3.125rem;

    img {
        margin-left: 17.5rem;
        width: 28.125rem;
        height: 37.5rem;

        z-index: 1;
    }

    img:hover {
        transform: scale(1.03);
        transition: 1s ease;
    }
`

export const Button = styled.button`

    @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap');

    font-size: 1.625rem;
    font-family: "Libre Baskerville", serif;
    
    color: #fff;
    background: none;
    border: .0625rem solid #fff;
    border-radius: .625rem;
    
    margin-top: 3.125rem;
    padding: 1rem 5.3125rem;
    width: 17.375rem;
    height: auto;

    cursor: pointer;
    z-index: 1;

    &:hover {
        background-color: #fff;
        color: #000;
        transition: 0.3s;
    }
`