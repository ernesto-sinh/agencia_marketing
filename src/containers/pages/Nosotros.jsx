import Clients from "components/about/Clients";
import Cta from "components/about/Cta";
import Header from "components/about/Header";
import Imagen from "components/about/Images";
import Team from "components/about/Team";
import TestStats from "components/about/TestStats";
import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Layout from "hocs/layouts/Layout";
import { useEffect } from 'react';

function Nosotros(){

    useEffect(() => {
        window.scrollTo(0,0)
    }, []);

    return(
        <Layout>
            <Navbar/>
            <div className="pt-28">
            <Header />
            <TestStats />
            <Imagen />
            <Clients />
            <Team />
            <Cta />
            </div>
            <Footer/>
        </Layout>
    )
}
export default Nosotros;