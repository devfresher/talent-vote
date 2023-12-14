import React from "react";
import star from "../../assets/png/star.png";
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
              How Vote is Done
            </h2>
            <ListWidget
              text={
                <span>
                  Create an account{" "}
                  <a className="hover:underline" href="https://www.talent-revised.vercel.app">
                    www.talent-revised.vercel.app
                  </a>
                </span>
              }
            />
            <ListWidget text={"Verify your account"} />

            <ListWidget
              text={
                <span>
                  Go to voting site{" "}
                  <a className="hover:underline" href="https://www.talent-vote.vercel.app">
                    www.talent-vote.vercel.app
                  </a>
                </span>
              }
            />
          </div>
        }
        className={parentStyle}
        secondChild={
          <div className=" w-full h-[300px] rounded-lg   sm:h-[450px]">
            <img alt="hero" src={rect} className="w-full h-full object-cover" />
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

{
  /**
<div className="flex flex-wrap text-justify leading-6">
            
            </div>
*/
}
