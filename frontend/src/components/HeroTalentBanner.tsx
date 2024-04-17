//import React from "react";
import {Link} from 'react-router-dom';

const HeroTalentBanner = ()=>{
    return(
        <div className="hero_talent_banner mt-8 mb-8 flex flex-row bg-black text-white ">
           <div className="hero_talent_img">
                <img className="max-w-96 object-cover" src="../res/images/monalisa.jpeg" alt="Description of the image" />
           </div>
           <div className="flex flex-col justify-between">
                <div>
                    <div className="text-4xl ml-4 mt-4 mb-8">
                        FOR TALENT
                    </div>
                    <div className="text-7xl ml-4 mb-8">
                        FIND GREAT TALENTS
                    </div>
                    <div className="text-4xl ml-4 mb-0">
                        MEET TALENTS YOU’RE EXCITED TO WORK WITH AND TAKE YOUR <br/>CAREER OR BUSINESS TO NEW HEIGHTS.
                    </div>
                </div>

                <div>
                    <div className="flex flex-row ml-4 py-4 border-t border-white-500 uppercase">
                        <div className="text-2xl ml-4">
                            Find opportunities for <br/>every stage of your <br/>freelance career
                        </div>
                        <div className="text-2xl ml-4">
                            Control when, where <br/>and how you work?
                        </div>
                        <div className="text-2xl ml-4">
                            Explore different <br/>ways to earn
                        </div>         
                    </div>
                </div>
                <Link id = 'bun' className='mb-4 ml-4' to='/findteams'>Find Talent</Link>
           </div>
        </div>
    );
}

export default HeroTalentBanner;