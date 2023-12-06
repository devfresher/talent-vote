import AboutUs from "components/landingUis/aboutUs";
import Hero from "components/landingUis/hero";
import OngoingEvent from "components/landingUis/ongoingEvents";
import TopBar from "components/topbar/topBar";
import React, { useEffect, useState } from "react";
import KnowHow from "../landingUis/knowHow";
import GetInTouch from "../landingUis/getInTouch";
import Faq from "../landingUis/faq";
import Footer from "../footer/footer";
import { ongoingEvent } from "Utils/api";

import toast from "react-hot-toast";

const Landing = () => {

  const [event, setEvent] = useState(null)
  const [loading, setloading] = useState(false)

  useEffect(() => {
    async function loadevents() {
      setloading(true);
     await ongoingEvent()
      .then((res) => {
        ////console.log(res);
        setloading(false)
        const { data } = res.data;
        setEvent(data);
      })
      .catch((err) => {
         ////console.log(err);
         const { error } = err.response.data;
         if (error) {
           toast.error(error.message);
         }
         const { message } = err.response.data.error;
         if (message) {
           toast.error(message);
         }
         const { message: mm } = err.response.data;
         if (mm) {
           toast.error(mm);
         }
         setloading(false);
      });
    }
    loadevents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  return (
    <div className="w-full h-full ">
      <TopBar id={event?._id} loading={loading}/>
      <Hero id={event?._id} loading={loading}/>
      <OngoingEvent event={event} />
      <AboutUs />
      <KnowHow />
      <Faq />
      <GetInTouch />
      <Footer />
      {/**/}
    </div>
  );
};

export default Landing;
