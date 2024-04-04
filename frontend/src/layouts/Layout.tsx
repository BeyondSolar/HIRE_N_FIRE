import Footer from "../components/Footer";
import Header from "../components/Header";
import Banner from "../components/Banner";
import SBanner from "../components/SBanner";
import TBanner from "../components/TBanner";
import Photo2 from "../components/Photo2";
import LastPanel from "../components/LastPanel";

const Layout = ()=>{
    return (
        <div className="flex flex-col min-h-screen">
            <Header/>
            <Banner/>
            <Photo2/>
            <SBanner/>
            <TBanner/>
            <LastPanel/>
            <Footer/>
        </div>
    )
}

export default Layout;