import TopBar from "components/topbar/topBar";
import React from "react";
import { AboutContestant, Header } from "./widget";
import Footer from "components/footer/footer";

export default function ContestantDetail() {
  return (
    <>
      <TopBar />
      <Header />
      <AboutContestant />
      <Footer/>
    </>
  );
}
