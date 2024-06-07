import styled from "styled-components";

export const Footer = styled.footer`

  display: flex;
  justify-content: space-between;

  background-color: var(--vinho-100);
  color: var(--branco-1000);

  padding: 3.75rem;

  .title-container {
    display: flex;
    flex-direction: column;
    gap: .625rem;
  }

  div > img {
    width: 3.75rem;
    height: auto;
  }

  h4 {
    font-size: 1.875rem;
    font-weight: 400;
  }

  ul {
    display: flex;
    flex-direction: column;
    list-style: none;

    gap: 2.625rem;

    font-size: 1.875rem;
    font-weight: 400;
  }

  li, a {
    position: relative;
    cursor: pointer;
    list-style: none;
    text-decoration: none;
    color: var(--branco-1000);
  }

  .list-container {
    display: flex;
    gap: 3.75rem;
  }
  
  li::before, a::before {
    content: "";
    position: absolute;
    bottom: -0.1875rem;
    left: 0;

    background-color: var(--branco-1000);
    border-radius: .3125rem;

    height: .0625rem;
    width: 0%;
  }

  li:hover::before, a:hover::before {
    width: 100%;
    transition: 0.4s ease;
    list-style: none;
    text-decoration: none;
    color: var(--branco-1000);
  }

  /*responsividade*/

  @media screen and (max-width: 37.5rem) {

    margin-top: auto;
    width:100%;

    padding: 1.25rem;

    .title-container {
      align-items: center;
      text-align: center;
      gap:1rem;
    }

    div > img {
      width: 3.125rem; /* Ajustar o tamanho da imagem */
    }

    .list-container {
      flex-direction: column;      
      gap: 1.25rem; /* Reduzir o espaço entre as listas */
    }

    li::before {
      content: "";
      position: absolute;
      bottom: -0.1875rem;
      left: 0;
  
      background-color: var(--branco-1000);
      border-radius: .3125rem;
  
      height: .0625rem;
      width: 0%;
    }
  
    li:hover::before {
      width: 100%;
      transition: 0.4s ease;
    }


    ul {
      display:flex;
      flex-direction: row;
      gap: 1.25rem; /* Reduzir o espaço entre os itens da lista */
      font-size: 1.5rem; /* Ajustar o tamanho da fonte */
    }

    h4 {
      font-size: 1.5rem; /* Ajustar o tamanho da fonte */
    }
  }
`;
