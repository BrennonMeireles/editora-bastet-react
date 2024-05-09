import styled from "styled-components";

export const Tabela = styled.table` 

    margin: 60px;

    overflow: hidden;        /* para cortar o texto que ultrapassa o contêiner */

    width: 95vw;
    height: auto;

    border: 1px solid black;    
    border-collapse: collapse;
    border: 1px solid var(--vinho-100);
    border-radius: 10px;

    thead {
        width: 100%;

        background-color: var(--vermelho-vinho-100);
        color: var(--branco-1000);
        
        border-radius: 10px 10px 0px 0px;
        border-bottom: 1px solid var(--vermelho-vinho-100);
    }
    
    th {
        width: 100px;
        height: 100px;
        
        padding: 20px 50px;

        font-size: 24px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;

        border-bottom: 1px solid;
    }

    td {
        padding: 18px;
        
        font-size: 24px;
        text-align: center;
        height: 50px;

        border-bottom: 1px solid var(-vinho-100);

        overflow: hidden;        /* para cortar o texto que ultrapassa o contêiner */
        text-overflow: ellipsis; /* para adicionar reticências (...) ao final do texto cortado */
        white-space: nowrap;     /* para evitar que o texto quebre em várias linhas */
    }

    button {
        background: none;
        border: 1px solid var(--amarelo-200);
        color: var(--amarelo-200);
        font-size: 14px;

        padding: 16px 22px;
        border-radius: 10px;
    }
`