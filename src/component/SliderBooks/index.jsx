import React from 'react';
import { Carousel} from 'antd';
import { SliderBook } from './style';

const App = (props) => (
    <SliderBook>
        <Carousel arrows infinite={true} vertical={false} slidesToShow={props.images.length} >
            {props.images.map((image, index) => (
                <div key={index}>
                    <img src={image} alt={`Image ${index}`} style={{ width: "176px", height: "260px", margin: "10px" }} />
                </div>
            ))}
        </Carousel>
    </SliderBook>
)

export default App;
