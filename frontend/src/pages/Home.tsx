import Banner from "../components/Banner";
import SBanner from "../components/SBanner";
import TBanner from "../components/TBanner";
import Photo2 from "../components/Photo2";
import LastPanel from "../components/LastPanel";

const Home = () => {
    return (
        <div className="space-y-3">
            <Banner/>
            <Photo2/>
            <SBanner/>
            <TBanner/>
            <LastPanel/>
        </div>
    );
  };
  
  export default Home;