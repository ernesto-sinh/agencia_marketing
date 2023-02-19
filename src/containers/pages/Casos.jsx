import CasosHeader from "components/Casos/Header";
import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/Layout";

function Casos(){
    return(
        <Layout>
            <Navbar/>
            <div className="pt-32">
            <CasosHeader/>
            </div>
            <Footer/>
        </Layout>
    )
}
export default Casos;