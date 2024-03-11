import Footer from "../components/Footer";
import Header from "../components/Header";
import Banner from "../components/Banner";
import SBanner from "../components/SBanner";
import Photo2 from "../components/Photo2";

const Layout = ()=>{
    return (
        <div className="flex flex-col min-h-screen">
            <Header/>
            <Banner/>
            <Photo2/>
            <SBanner/>
            <Footer/>
        </div>
    )
}

export default Layout;