import React from "react";
import SlideInAnimation from "../../UI/slideInAnimation";
import header from "../../../assets/png/header.png";
import ellipse from "../../../assets/svg/ellipse.svg"
import star from "../../../assets/png/star2.png";
//import { IoLogoTwitter, IoIosMail } from "react-icons/io";
//import { RiInstagramFill } from "react-icons/ri";
//import { Link } from "react-router-dom";
//import { FaFacebook, FaDiscord } from "react-icons/fa";
export function Header({categoryData}) {
  const parentStyle =
    "bg-detail w-full px-2 py-5 sm:py-8 sm:px-10 md:px-20 gap-4 md:gap-8 flex my-3 sm:my-6 lg:my-8  flex-col lg:flex-row items-center justify-center";
  return (
    <SlideInAnimation
      className={parentStyle}
      secondChild={
        <div className="flex flex-col w-full justify-start items-start gap-8">
          <h1 className="text-3xl md:text-5xl lg:text-3xl leading-6 sm:leading-10 min-[1100px]:text-5xl font-semibold">
          {categoryData?.name ?? ""}
          </h1>
          <div className="flex gap-2 w-full items-start justify-start">
            <div
            className="flex flex-col gap-1"
            >
              <p>{`Talent: ${categoryData?.talent?.name ?? ""} ( ${categoryData?.country?.name ?? ""})`}</p>
          
            </div>
            <img src={star} alt="star" />
          </div>
          <div className="flex flex-wrap text-justify leading-6">
              {categoryData?.description ?? ""}
            </div>

          <h2 className="font-medium text-base text-[#3DDEED] tracking-wide sm:text-2xl">₦100 per vote</h2>

        </div>
      }
      firstChild={
        <div className="relative w-full h-[300px] rounded-lg   sm:h-[400px]">
          <img alt="hero" src={header} className="w-full h-full object-cover" />

          <div className="absolute top-0 w-[105%] h-[105%]">
            <img src={ellipse} alt="ellipse" className="w-full h-full"/>

          </div>
        </div>
      }
    />
  );
}

function TimingWidget({ num }) {
  return (
    <div className="relative bg-gradient shadow-xl rounded-md w-12 h-20 flex items-center justify-center font-semibold text-4xl">
      {num}

      <div className="absolute top-[45%] inset-x-0 flex items-center justify-between">
        <span className="shadow-lg gradient_abs w-1 h-2"></span>
        <span className="shadow-lg gradient_abs w-1 h-2"></span>

      </div>
    </div>
  );
}


{/**
 <div className="flex items-start gap-1">
            <div className="flex items-center flex-col gap-2 justify-center">
            <div className="flex gap-[1px]">
              <TimingWidget num={1} />
              <TimingWidget num={1} />
            </div>
                <p className="font-semibold">DAYS</p>
            </div>
            <span className="font-semibold text-4xl">:</span>
            <div className="flex items-center flex-col gap-2 justify-center">
            <div className="flex gap-[1px]">
              <TimingWidget num={1} />
              <TimingWidget num={1} />
            </div>
                <p className="font-semibold">HOURS</p>
            </div>
            <span className="font-semibold text-4xl">:</span>
            <div className="flex items-center flex-col gap-2 justify-center">
            <div className="flex gap-[1px]">
              <TimingWidget num={1} />
              <TimingWidget num={1} />
            </div>
                <p className="font-semibold">MINS</p>
            </div>
          </div>

          
          <div className="flex flex-col gap-2 items-start">
            <p>Share Contest</p>
            <div>
              <div className="flex items-center gap-2">
                <Link to="www.twitter.com " className="">
                  <IoLogoTwitter className="text-lg" />
                </Link>
                <Link to="www.twitter.com" className="">
                  <RiInstagramFill className="text-lg" />
                </Link>
                <Link to="www.twitter.com" className="">
                  <FaDiscord className="text-lg" />
                </Link>
                <Link to="www.twitter.com" className="">
                  <FaFacebook className="text-lg" />
                </Link>
                <Link to="www.twitter.com" className="">
                  <IoIosMail className="text-lg" />
                </Link>
              </div>
            </div>
          </div>
*/}