import React from "react";
import hero from "../../assets/png/hero.png"

import SlideInAnimation from "components/UI/slideInAnimation";
import { useNavigate } from "react-router-dom";
export default function OngoingEvent() {
  const navigate = useNavigate()
  const parentStyle =
    "w-full px-2 py-5 sm:py-8 sm:px-10 md:px-20 gap-4 my-3 sm:my-6 lg:my-8 md:gap-8 flex  flex-col lg:flex-row items-center justify-center bg-gray-200 bg-opacity-10";
  return (
    <>
      <SlideInAnimation
        firstChild={
          <div className="flex flex-col w-[90%] justify-start items-start gap-6">
            <h2 className="font-semibold text-base sm:text-xl">
              Ongoing Event
            </h2>

            <div className="flex flex-wrap text-justify leading-6">
              Untitled is growing fast, and we are always looking for
              passionate, dynamic, and talented individuals to join our
              distributed team all around the world.
            </div>
            <div className="flex flex-wrap text-justify leading-6">
              Our philisophy is simple — hire a team of diverse, passionate
              people and foster a culture that empowers you to do you best work.
            </div>

            <button
            onClick={() => {
              navigate("/event")
            }}
            className="text-zinc-800 bg-[#3DDEED] font-normal rounded-sm px-4 py-3">
              View Event
            </button>
          </div>
        }
        className={parentStyle}
        secondChild={
          <div className=" w-full h-[400px] rounded-lg   sm:h-[500px] ">
            <img alt="hero" src={hero} className="w-full h-full" />
          </div>
        }
      />
    </>
  );
}
