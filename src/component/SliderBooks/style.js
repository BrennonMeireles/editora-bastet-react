import styled from "styled-components"

export const SliderBook = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  /* width: 100vw; */
  padding: 20px 50px;

  .ant-carousel .slick-prev,
  .ant-carousel .slick-next{
    color: #000;
  }

  
`
export const Title = styled.h2`
  @import url("https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap");

  font-family: "Inter", sans-serif;
  font-size:  36px;
  font-weight: 300;
  color: #000;

  margin-left: 60px;
`

export const ImageContainer = styled.div`
  display:   flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-top: 50px;

  img {
    width: 176px;
    height: 260px;
    margin: 10px;
  }

`
