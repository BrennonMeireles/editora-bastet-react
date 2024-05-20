import styled from "styled-components";

export const Tabela = styled.table` 

    overflow: hidden;        /* para cortar o texto que ultrapassa o contêiner */

    width: 100%;
    height: auto;
   
    border-collapse: collapse;
    border: .0625rem solid var(--vinho-100);
    border-radius: .625rem;

    thead {
        width: 100%;

        background-color: var(--vinho-100);
        color: var(--branco-1000);
        
        border-radius: .625rem .625rem 0rem 0rem;
        border-bottom: .0625rem solid var(--vinho-100);
    }
    
    th {
        width: 6.25rem;
        height: 6.25rem;
        
        padding: 1.25rem 3.125rem;

        font-size: 1.5rem;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;

        border-bottom: .0625rem solid;
    }

    td {
        padding: 1.125rem;
        
        font-size: 1.5rem;
        text-align: center;
        height: 3.125rem;

        border-bottom: .0625rem solid var(--vinho-100);

        overflow: hidden;        /* para cortar o texto que ultrapassa o contêiner */
        text-overflow: ellipsis; /* para adicionar reticências (...) ao final do texto cortado */
        white-space: nowrap;     /* para evitar que o texto quebre em várias linhas */
    }

    button {
        background: none;
        border: .0625rem solid var(--amarelo-200);
        color: var(--amarelo-200);
        font-size: .875rem;

        padding: 1rem 1.375rem;
        border-radius: .625rem;
    }

    img{
        width: 5.3125rem;
        height: auto;
    }
    
`