import styled from "styled-components";

export const NavBar = styled.nav`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap");

  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.875rem;
  margin-bottom: 1.25rem;

  .container-NavBar {
    display: flex;
    height: 6.25rem;
    width: 95%;
    background-color: #37192c;
    border-radius: 3.125rem;
    align-items: center;
    justify-content: space-between;
    padding-left: 1.5625rem;
    padding-right: 1.5625rem;
    box-shadow: 0rem .3125rem .625rem 0rem rgba(0, 0, 0, 0.3);
  }
  a {
    position: relative;
    color: #fff;
    font-family: "Inter", sans-serif;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration: none;

    cursor: pointer;
  }

  a::before {
    content: "";
    position: absolute;
    bottom: -3px;
    left: 0;

    background-color: var(--branco-1000);
    border-radius: .3125rem;

    height: .0625rem;
    width: 0%;
  }

  a:hover::before {
    width: 100%;
    transition: 0.4s ease;
  }
  
  div {
    display: flex;
    gap: 3.75rem;
  }

  .input-buscar {
    padding: .5rem .75rem;
    display: flex;
    align-items: center;
    gap: .375rem;
    background-color: #fff;
    border-radius: 1.25rem;
  }

  input {
    background-color: transparent;
    border: none;
    color: black;
    font-size: 1.125rem;
    width: 21.125rem;
    height: 1.5rem;
    padding-left: .9375rem;
  }

  input:focus-visible {
    outline: none;
  }

  svg {
    width: 1.25rem;
    height: auto;
  }
`;
