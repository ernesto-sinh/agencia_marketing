import Header from "components/Home/Header";
import Footer from "components/navigation/Footer";
import Navbar from "components/navigation/Navbar";
import Incentives from "components/Home/Incentives";
import Layout from "hocs/layouts/Layout";
import UseCases from "components/Home/UseCases";
import Features from "components/Home/Features";
import CTA from "components/Home/CTA";
import LogoCloud from "components/Home/LogoCloud";
import BlockList from "components/Home/BlogList";

function Home(){
    return(
        <Layout>
            <Navbar/>
            <div className="pt-32">
            <Header/>
            <Incentives/>
            <UseCases/>
            <Features/>
            <CTA/>
            <LogoCloud/>
            <BlockList/>
            </div>
            <Footer/>
        </Layout>
    )
}
export default Home;