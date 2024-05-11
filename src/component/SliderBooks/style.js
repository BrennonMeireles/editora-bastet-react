import styled from "styled-components";

export const SliderBook = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid;
    width: 100vw;
    height: 50px;
    padding: 50px;
    margin-bottom: 100px;
`
export const Title = styled.h2`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap');

  font-family: "Inter", sans-serif;
  font-size: 36px;
  font-weight: 300;
`

export const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  img {
    max-width: 100%;
    height: auto;
    margin: 10px;
  }
`
