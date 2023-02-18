import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/Layout";

function Contacto(){
    return(
        <Layout>
            <Navbar/>
            <div className="pt-32">
            Contacto
            </div>
            <Footer/>
        </Layout>
    )
}
export default Contacto;