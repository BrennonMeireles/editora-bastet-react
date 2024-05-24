import { Carousel } from 'antd';
import { SliderBook, Title } from './style'; 

const SliderBookComponent = (props) => {
    const displayedImages = props.images.slice(0, 7); // Limita as imagens aos primeiros 6 livros

    return (
        <div>
            <Title>{props.title}</Title> 
            <SliderBook>
                <Carousel arrows infinite={true} vertical={false} slidesToShow={displayedImages.length} >
                    {displayedImages.map((image, index) => (
                        <div key={index}>
                            <img src={image.capa} alt={`Image ${index}`} style={{ width: "176px", height: "auto", margin: "0px" }} />
                        </div>
                    ))}
                </Carousel>
            </SliderBook>
        </div>
    );
};

export default SliderBookComponent;
