import React from "react";
import about from "../../assets/png/about.png";
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
            <div className="flex flex-wrap text-justify leading-6 w-full">
              The stagetime project is a transforming projected birthed by the
              Stagetime team in order to make fulfilling youths for a fulfilling
              future.
            </div>
            <div  className="flex flex-wrap text-justify leading-6 w-full">
              We are a team of individual whose aim and objective is to make
              sure the African youth does not only showcase their inborn talent
              but also have the platform to showcase their acquired knowledge
              and skills.
            </div>
            <div  className="flex flex-wrap text-justify leading-6 w-full">
              We are people whose priorities are not limited to the
              entertainment cohort but also creating a strategic platform which
              makes sure that Being part of this community means that you are
              constantly exposed to local and global opportunities capable of
              transforming your life and that of your immediate community.
            </div>
          </div>
        }
        className={parentStyle}
        firstChild={
          <div className=" w-full h-[300px] rounded-lg   sm:h-[400px]">
            <img
              alt="hero"
              src={about}
              className="w-full h-full object-cover"
            />
          </div>
        }
      />
    </>
  );
}

