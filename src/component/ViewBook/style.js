import styled from "styled-components"

export const ViewBook = styled.section`
    margin: 5rem 2.5rem;
    display: flex;
    /* flex-direction: column; */
    gap: 1.875rem;
`
export const BackBtn = styled.button`
    background: none;
    border: .0625rem solid;
    width: fit-content;
    padding: .3125rem;
`
export const Description = styled.div`
    display: flex;
    gap: .625rem;

    #id{
        display: none;
    }

    ul{
        margin-top: 2.1875rem;
        display: flex;
        flex-direction: column;
        gap: 1.875rem;
    }

    li{
        list-style: none;
        display: flex;
        gap: 1rem;
        justify-content: space-between;
    }

    label{
        font-weight: bold;
    }

    label, input {
        font-size: 1.5rem;
    }

    textarea::placeholder, input::placeholder{
        font-size: 1.125rem;
    }

    ul > li > input {
        width: 31.25rem;
        border-left:  none;
        border-top:   none;
        border-right: none;
        border-bottom: .0625rem solid;
        cursor: pointer;
    }

    input:focus{
        outline: none;
    }

    textarea {
        font-size: 1.5rem;
        border: none;
        border-radius: .3125rem;
        width: 31.25rem;
        height: 20.625rem;
        cursor: pointer;
        resize: none;
        line-height: 1.875rem;
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
    gap: 1.5rem;
    
    article{
        padding: 2.1875rem 9.375rem;
        border: .1rem solid;
        border-radius: .625rem;
    }

    article > img{
        width: 20.625rem;
        height: auto                ;
    }

    article > svg {
        width: 6.25rem;
        height: auto;
        margin: 9.375rem 6.25rem;
    }

    div{
        display: flex;
        justify-content: space-between;
    }

    button {
        @import url("https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap");

        background: none;
        padding: 1rem 3rem;
        border-radius: .625rem;
        font-size: 1.625rem;
        border: .0625rem solid;
        font-family: "Libre Baskerville", serif;
        transition: 0.2s linear;
        cursor:pointer

    }

    button:hover{
        border: .125rem solid;
        font-size: 1.6875rem;
    }
`