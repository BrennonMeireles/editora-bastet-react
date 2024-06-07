import NavBarComponents from "../../component/NavBar";
import FooterComponent  from "../../component/Footer";
import ViewBook         from "../../component/ViewBook";

export default function PageLivros() {
    return (
        <div>
            <NavBarComponents />
            <ViewBook/>
            <FooterComponent />
        </div>

    )
}