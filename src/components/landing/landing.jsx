import AboutUs from "components/landingUis/aboutUs";
import Hero from "components/landingUis/hero";
import OngoingEvent from "components/landingUis/ongoingEvents";
import TopBar from "components/topbar/topBar";
import React, { useEffect, useState } from "react";
import KnowHow from "../landingUis/knowHow";
import GetInTouch from "../landingUis/getInTouch";
import Faq from "../landingUis/faq";
import Footer from "../footer/footer";
import { singleCategory } from "Utils/api";
import { useParams, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginSuccess } from "Redux/Actions/ActionCreators";

const Landing = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const [singleCategoryData, setSingleCategoryData] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getSingleCategory() {
      await singleCategory(id.replace("catId=", ""))
        .then((res) => {
          const { data } = res?.data;
          setSingleCategoryData(data?.event);
        })
        .catch((error) => {
          console.error(error);
        });
    }
    getSingleCategory();
    dispatch(loginSuccess(search.replace("?token=", "")));
  }, [id]);

  return (
    <div className="w-full h-full ">
      <TopBar id={id.replace("catId=", "")} />
      <Hero id={id.replace("catId=", "")} />
      <OngoingEvent event={singleCategoryData} />
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
