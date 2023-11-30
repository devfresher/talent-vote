import React, { useState } from "react";
import TopBar from "../topbar/topBar";
import { Header, EventNominees, AboutEvent } from "./widget";
import Footer from "components/footer/footer";

export default function ContestDetail() {
  const [active, setActive] = useState(1);
  return (
    <>
      <TopBar />
      <Header />
      <div className=" w-full px-2 py-5 sm:py-8 sm:px-10 md:px-20 gap-4 md:gap-8 my-3 sm:my-6 lg:my-8  ">
        <div className="flex w-full flex-col justify-start md:justify-between md:flex-row items-start md:items-center">
          <div className="flex items-center gap-4 sm:gap-10">
            <button
              onClick={() => {
                setActive(1);
              }}
              className={`${
                active === 1 ? "font-semibold border-b-2 border-[#3DDEED]" : ""
              } py-2 px-1`}
            >
              Nominees
            </button>
            <button
              onClick={() => {
                setActive(2);
              }}
              className={`${
                active === 2 ? "font-semibold border-b-2 border-[#3DDEED]" : ""
              } py-2 px-1`}
            >
              About
            </button>
          </div>

          <div className="w-full flex items-center gap-2 max-w-lg">
            <input
              type="text"
              className="w-[70%] rounded-md h-11 px-4 outline-none bg-gray-200 bg-opacity-10 "
              placeholder="search for contestant"
            />
            <button className="flex items-center rounded-md justify-center h-11 bg-[#3DDEED] w-[25%] text-zinc-700 font-normal ">
              Search
            </button>
          </div>
        </div>
        {active === 1 && (
          <EventNominees
            title={"Africa Matz Award 2023"}
            data={[1, 2, 3, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5]}
          />
        )}
        {active === 2 && <AboutEvent />}
      </div>
      <Footer/>
    </>
  );
}
