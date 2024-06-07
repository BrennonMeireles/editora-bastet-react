import { Carousel }     from 'antd';
import { SliderBanner } from "./style"

import Banner1 from "../../assets/img/banner1.png";
import Banner2 from "../../assets/img/banner2.png";
import Banner3 from "../../assets/img/banner3.png";
import Banner4 from "../../assets/img/banner4.png";

const BannerAPI = () => (
  <SliderBanner>
    <Carousel autoplay arrows>
      <img className='imgBanner' src= {Banner1} alt="" />
      <img className='imgBanner' src= {Banner2} alt="" />
      <img className='imgBanner' src= {Banner3} alt="" />
      <img className='imgBanner' src= {Banner4} alt="" />
    </Carousel>
  </SliderBanner>
);
export default BannerAPI;