import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SliderBookComponent(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: props.images.length, // Define quantos livros serão exibidos ao mesmo tempo
    slidesToScroll: 1
  }

  return (
    <Slider {...settings} style={{width: "99%"}}>
      {props.images.map((image, index) => (
        <div   key={index} style={{width: "90%", border: "none", outline: "none"}}>
          <img src={image} alt={`Image ${index}`} style={{width: "100%", height: "auto", padding: "50px 10px"}} />
        </div>
      ))}
    </Slider>
  )
}
