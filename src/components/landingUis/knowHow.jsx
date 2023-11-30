import React from "react";

import rect from "../../assets/png/rect.png";
import SlideInAnimation from "components/UI/slideInAnimation";
export default function KnowHow() {
  const parentStyle =
    "w-full px-2 py-5 sm:py-8 sm:px-10 md:px-20 gap-4 md:gap-8 flex my-3 sm:my-6 lg:my-8  flex-col lg:flex-row items-center justify-center";

  return (
    <>
      <SlideInAnimation
        firstChild={
          <div className="flex flex-col w-[90%] justify-start items-start gap-4">
            <h2 className="font-semibold text-lg sm:text-2xl">
              How our contest is being
            </h2>
            <div className="flex flex-wrap text-justify leading-6">
              Lorem ipsum dolor sit amet consectetur. Odio nunc tellus sed
              condimentum nunc egestas quisque magna lacinia. Tellus nec
              sagittis augue lorem tincidunt vestibulum. Scelerisque venenatis
              dolor auctor scelerisque. Lorem ipsum dolor sit amet consectetur.
              Odio nunc tellus sed condimentum nunc egestas quisque magna
              lacinia. Tellus nec sagittis augue lorem tincidunt vestibulum.
              Scelerisque venenatis dolor auctor scelerisque. Lorem ipsum dolor
              sit amet consectetur. Odio nunc tellus sed condimentum nunc
              egestas quisque magna lacinia. Tellus nec sagittis augue lorem
              tincidunt vestibulum. Scelerisque venenatis dolor auctor
              scelerisque.
            </div>
          </div>
        }
        className={parentStyle}
        secondChild={
          <div className=" w-full h-[300px] rounded-lg   sm:h-[450px]">
            <img
              alt="hero"
              src={rect}
              className="w-full h-full object-cover"
            />
          </div>
        }
      />
    </>
  );
}
