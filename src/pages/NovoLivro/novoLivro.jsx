import NavBarComponents from "../../component/NavBar";
import FooterComponent  from "../../component/Footer";
import NewBook          from "../../component/NewBook";

export default function PageNovoLivro(){
    return(
        <section>
            <NavBarComponents />
            <NewBook />
            <FooterComponent />
        </section>
    )
}