import styled from "styled-components";

export const Footer = styled.footer`
    display: flex;
    justify-content: space-between;

    background-color: var(--vinho-100);
    color: var(--branco-1000);

    padding: 60px;

    .title-container {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    div > img {
        width: 60px;
        height: auto;
    }
    
    h4 {
        font-size: 30px;
        font-weight: 400;
    }

    ul {
        display: flex;
        flex-direction: column;
        list-style: none;
        gap: 42px;

        font-size: 30px;
        font-weight: 400;
    }

    li {
        cursor: pointer;
    }

    .list-container {
        display: flex;
        gap: 60px;
    }
`