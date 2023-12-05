import TopBar from "components/topbar/topBar";
import React from "react";
import { AboutContestant, Header } from "./widget";
import Footer from "components/footer/footer";
import { useLocation } from "react-router-dom";
export default function ContestantDetail() {
  const { state } = useLocation();

  console.log({ state });
  return (
    <>
      <TopBar />
      <Header
        name={state?.registeredData?.name ?? ""}
        image={state?.participant?.profileImage?.url}
        catId={state?.catId}
        id={state?.participant?._id}
      />
      <AboutContestant data={state?.participant} />
      <Footer />
    </>
  );
}
