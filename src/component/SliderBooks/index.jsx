import React from 'react';
import { Carousel } from 'antd';
import { SliderBook, Title } from './style'; // Certifique-se de importar o componente de estilo e o título, se aplicável

const SliderBookComponent = (props) => (
    <div>
        <Title>{props.title}</Title> {/* Renderiza o título */}
        <SliderBook>
            <Carousel arrows infinite={true} vertical={false} slidesToShow={props.images.length} >
                {props.images.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt={`Image ${index}`} style={{ width: "176px", height: "260px", margin: "10px" }} />
                    </div>
                ))}
            </Carousel>
        </SliderBook>
    </div>
);

export default SliderBookComponent;
