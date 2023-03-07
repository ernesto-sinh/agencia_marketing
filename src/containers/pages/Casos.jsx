import CasesList from "components/Casos/CasesList";
import Header from "components/Casos/Header";
import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/Layout";
import { useEffect } from 'react';

function Casos(){

    useEffect(() => {
        window.scrollTo(0,0)
    }, []);

    return(
        <Layout>
            <Navbar/>
            <div className="pt-28">
            <Header/>
            <CasesList/>
            </div>
            <Footer/>
        </Layout>
    )
}
export default Casos;