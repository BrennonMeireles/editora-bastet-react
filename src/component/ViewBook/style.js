import styled from "styled-components"

export const ViewBook = styled.section`
    margin: 80px 40px;
    display: flex;
    /* flex-direction: column; */
    gap: 30px;
`
export const BackBtn = styled.button`
    background: none;
    border: 1px solid;
    width: fit-content;
    padding: 5px;
`
export const Description = styled.div`
    display: flex;
    gap: 10px;

    ul{
        margin-top: 35px;
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    li{
        list-style: none;
        display: flex;
        gap: 16px;
        justify-content: space-between;
    }

    label{
        font-weight: bold;
    }

    label, input {
        font-size: 24px;
    }

    ul > li > input {
        width: 500px;
        border-left:  none;
        border-top:   none;
        border-right: none;
        border-bottom: 1px solid;
        cursor: pointer;
    }

    input:focus{
        outline: none;
    }

    textarea {
        font-size: 24px;
        border: none;
        border-radius: .3125rem;
        width: 500px;
        height: 250px;
        cursor: pointer;
        resize: none;
        line-height: 30px;
        text-decoration: none;
        transition: 0.5s ease;
    }

    textarea:hover{
        border: .125rem solid;
        padding: .625rem;
    }
`
export const Book = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    
    article{
        padding: 35px 150px;
        border: 1.6px solid;
        border-radius: 10px;
    }

    article > img{
        width: 330px;
        height: auto                ;
    }

    div{
        display: flex;
        justify-content: space-between;
    }

    button {
        @import url("https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap");

        background: none;
        padding: 16px 48px;
        border-radius: 10px;
        font-size: 26px;
        border: 1px solid;
        font-family: "Libre Baskerville", serif;
        transition: 0.2s linear;
        cursor:pointer

    }

    button:hover{
        border: .125rem solid;
        font-size: 27px;
    }
`