import HeroBanner from "../components/HeroBanner";
import HeroTalentBanner from "../components/HeroTalentBanner";
import LastPanel from "../components/HeroCompanyBanner";
import HeroSignUpBanner from "../components/HeroSignUpBanner";

const Home = () => {
    return (
        <div className="flex flex-col py-10 overflow-hidden">
            <HeroBanner/>
            <HeroSignUpBanner/>
            <HeroTalentBanner/>
            <LastPanel/>
        </div>
    );
  };
  
  export default Home;