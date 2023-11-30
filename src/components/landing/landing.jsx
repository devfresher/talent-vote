import AboutUs from "components/landingUis/aboutUs";
import Hero from "components/landingUis/hero";
import OngoingEvent from "components/landingUis/ongoingEvents";
import TopBar from "components/topbar/topBar";
import React from "react";
import KnowHow from "../landingUis/knowHow";
import GetInTouch from "../landingUis/getInTouch";
import Faq from "../landingUis/faq";
import Footer from "../footer/footer";


const Landing = () => {

  return (
    <div className="w-full h-full ">
      <TopBar/>
      <Hero/>
      <OngoingEvent/>
      <AboutUs/>
      <KnowHow/>
      <Faq/>
      <GetInTouch/>
      <Footer/>
        {/**/}
    </div>
    
   

    
  );
};

export default Landing;
