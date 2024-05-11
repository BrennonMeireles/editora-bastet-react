import { ImageContainer, SliderBook } from "./style"

import "./style.css"

export default function SliderBookComponent() {
    // Exemplo de dados que podem mudar
    const title = "Título Dinâmico"
    const images = [
        'image1.jpg',
        'image2.jpg',
        'image3.jpg'
    ]

    return (
        <SliderBook>
            <h2>{title}</h2>
            <ImageContainer>
                {images.map((image, index) => (
                    <img key={index} src={image} alt={`Image ${index}`} />
                ))}
            </ImageContainer>
        </SliderBook>
    );
}
