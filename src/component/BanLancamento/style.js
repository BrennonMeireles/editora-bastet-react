import styled from "styled-components";

export const BanLancamento = styled.div`
    display: flex;   
    background-image: url(../src/assets/img/banner-morro.svg);
    background-repeat: no-repeat;
    background-size: cover;
    padding: 85px 40px;
    width: 100vw;
    height: auto;
    gap: 60px;
`

export const TitleBan = styled.h1`
    @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap');

    font-size: 36px;
    font-family: "Libre Baskerville", serif;
    font-weight: 700;

    color: #fff;
    margin-bottom: 30px;
`

export const Text = styled.p`
    font-size: 26px;
    color: #fff;
`
export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 100px;    
    width: 48%;
    height: 800px;
    background-color: rgba(0,0,0, 0.5);
    /* border: 1px solid #fff;  */
`

export const BookContainer = styled.div`
    display: flex;
    padding-top: 100px;

    img {
        width: 600px;
        height: 800px;
    }

    img:hover {
        transform: scale(1.03);
        transition: 1s ease;
        
    }
`

export const Button = styled.button`

    @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap');

    font-size: 26px;
    font-family: "Libre Baskerville", serif;
    
    color: #fff;
    background: none;
    border: 1px solid #fff;
    border-radius: 10px;
    
    margin-top: 50px;
    padding: 16px 85px;
    width: 278px;
    height: auto;

    cursor: pointer;
`