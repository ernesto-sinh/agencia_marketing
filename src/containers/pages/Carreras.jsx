import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/Layout";

function Carreras(){
    return(
        <Layout>
            <Navbar/>
            <div className="pt-32">
            Carreras
            </div>
            <Footer/>
        </Layout>
    )
}
export default Carreras;