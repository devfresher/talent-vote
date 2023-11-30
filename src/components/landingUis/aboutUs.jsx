import React from "react";
import star from "../../assets/png/star.png";
import about from "../../assets/png/about.png"
import SlideInAnimation from "components/UI/slideInAnimation";
export default function AboutUs() {
  const parentStyle =
    "w-full px-2 py-5 sm:py-8 sm:px-10 md:px-20 gap-4 md:gap-8 flex my-3 sm:my-6 lg:my-8  flex-col lg:flex-row items-center justify-center";

  return (
    <>
      <SlideInAnimation
        secondChild={
          <div className="flex flex-col w-[90%] justify-start items-start gap-4">
            <h2 className="font-semibold text-base sm:text-xl">Who we are</h2>
            <div className="flex flex-wrap text-justify leading-6 w-[80%]">
              Lorem ipsum dolor sit amet consectetur. Odio nunc tellus sed
              condimentum nunc egestas quisque magna lacinia.
            </div>

            <div className="grid grid-cols-2 gap-2 items-start h-fit w-full">
              <ListWidget
                text={
                  "High-resolution OLED or LCD screens: Provide sharp and clear visuals."
                }
              />
              <ListWidget
                text={
                  "High-resolution OLED or LCD screens: Provide sharp and clear visuals."
                }
              />
              <ListWidget
                text={
                  "High-resolution OLED or LCD screens: Provide sharp and clear visuals."
                }
              />
              <ListWidget
                text={
                  "High-resolution OLED or LCD screens: Provide sharp and clear visuals."
                }
              />
              <ListWidget
                text={
                  "High-resolution OLED or LCD screens: Provide sharp and clear visuals."
                }
              />
              <ListWidget
                text={
                  "High-resolution OLED or LCD screens: Provide sharp and clear visuals."
                }
              />
            </div>
          </div>
        }
        className={parentStyle}
        firstChild={
          <div className=" w-full h-[300px] rounded-lg   sm:h-[400px]">
            <img alt="hero" src={about} className="w-full h-full object-cover" />
          </div>
        }
      />
    </>
  );
}

function ListWidget({ text }) {
  return (
    <div className="flex items-start justify-start w-full gap-2">
      <img src={star} alt="" />
      <p>{text}</p>
    </div>
  );
}
