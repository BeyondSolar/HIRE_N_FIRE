import Footer from "../components/Footer";
import Header from "../components/Header";
import Banner from "../components/Banner";

const Layout = ()=>{
    return (
        <div className="flex flex-col min-h-screen">
            <Header/>
            <Banner/>
            <Footer/>
        </div>
    )
}

export default Layout;