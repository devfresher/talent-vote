import React from "react";
import hero from "../../assets/png/hero.png";

import SlideInAnimation from "components/UI/slideInAnimation";
import { MAIN_SITE_LINK } from "constants/constant";

export default function OngoingEvent({ event }) {
  const parentStyle =
    "w-full px-2 py-5 sm:py-8 sm:px-10 md:px-20 gap-4 my-3 sm:my-6 lg:my-8 md:gap-8 flex  flex-col lg:flex-row items-center justify-center bg-gray-200 bg-opacity-10";
  return (
    <>
      <SlideInAnimation
        firstChild={
          <div className="flex flex-col w-[90%] justify-start items-start gap-6">
            <h2 className="font-semibold text-base sm:text-xl">
              {event?.eventName ?? ""}
            </h2>

            <div className="flex flex-wrap text-justify leading-6">
              {event?.description ?? ""}
            </div>

            <button
              onClick={() => {
                window.open(`${MAIN_SITE_LINK}/event`, "_blank");
              }}
              className="text-zinc-800 bg-[#3DDEED] font-normal rounded-sm px-4 py-3"
            >
              View Event
            </button>
          </div>
        }
        className={parentStyle}
        secondChild={
          <div className=" w-full h-[400px] rounded-lg overflow-hidden  sm:h-[500px] ">
            <img
              alt="hero"
              src={event?.coverImage?.url || hero}
              className="w-full h-full"
            />
          </div>
        }
      />
    </>
  );
}
