import NavBarComponents    from "../../component/NavBar";
import FooterComponent     from "../../component/Footer";
// import SliderBookComponent from "../../component/SliderBooks";

import "./home.css"

export default function Home() {
    return (
        <div>
            <NavBarComponents />
            {/* <SliderBookComponent /> */}
            <FooterComponent />
        </div>
    )
}