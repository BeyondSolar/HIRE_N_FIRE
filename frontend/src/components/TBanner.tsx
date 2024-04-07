//import React from "react";

const TBanner = ()=>{
    return(
        <div className="tbanner">
           <div className="firsthalf">
                <img src="./res/images/monalisa.jpeg" alt="Description of the image" />
           </div>
           <div className="secondhalf">
                <h1>FOR TALENT</h1>
                <h2>FIND GREAT WORK</h2>
                <h3>MEET CLIENTS YOU’RE EXCITED TO WORK WITH AND TAKE YOUR <br/>career or business to new heights.</h3>
                <hr></hr>
                <div className="base">
                    <h4>Find opportunities for <br/>every stage of your <br/>freelance career</h4>
                    <h4>Control when, where <br/>and how you work?</h4> 
                    <h4>Explore different <br/>ways to earn.</h4>          
                </div>
                <button className="findtal">Find Talent</button>
           </div>
        </div>
    );
}

export default TBanner;