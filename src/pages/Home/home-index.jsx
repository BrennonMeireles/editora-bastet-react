import NavBarComponents    from "../../component/NavBar";
import FooterComponent     from "../../component/Footer";
import SliderBookComponent from "../../component/SliderBooks";

import "./home.css"
import SliderBanner from "../../component/Sliders";

export default function Home() {
    return (
        <div>
            <NavBarComponents />
            <SliderBanner />
            <SliderBookComponent />
            <FooterComponent />
        </div>
    )
}