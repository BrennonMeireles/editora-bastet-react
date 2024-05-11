import styled from "styled-components";

export const SliderBanner = styled.div`
    
    .imgBanner{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    ul.slick-dots.slick-dots-bottom{
        top: 356px;
        gap: 30px;
        li{
 
            button{
                width: 50px;
                height: 5px; 
            }
        }
    }

    arrows{
        border: 20px solid red;
    }

   
    // .ant-carousel .slick-prev::after,
    // .ant-carousel .slick-next::after {
        
    //     width: 20px;
    //     height: 20px;
    //     border: solid white;
    //     border-inline-width: 2px 0;
    //     border-block-width: 2px 0;
    //     border-radius: 1px;
        
    // }
    
`;