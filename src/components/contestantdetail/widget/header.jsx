import React from "react";
import SlideInAnimation from "../../UI/slideInAnimation";
import contestant from "../../../assets/png/contestant.png";
import ellipse from "../../../assets/svg/ellipse.svg";
import star from "../../../assets/png/star2.png";
import { IoLogoTwitter, IoIosMail } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { FaFacebook, FaDiscord } from "react-icons/fa";
export function Header() {
  const parentStyle =
    "bg-detail w-full px-2 py-5 sm:py-8 sm:px-10 md:px-20 gap-4 md:gap-8 flex my-3 sm:my-6 lg:my-8  flex-col-reverse lg:flex-row items-center justify-center";
  return (
    <SlideInAnimation
      className={parentStyle}
      secondChild={
        <div className="flex flex-col w-full justify-start items-start gap-8">
          <div className="flex gap-2 items-start">
            <h1 className="text-2xl lg:text-3xl leading-6   font-semibold">
              Emmanuel Alayande
            </h1>

            <img src={star} alt="star" />
          </div>

          <div className="flex items-start gap-2 flex-col">
            <p>Share Profile Link</p>
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

          <button className="py-2 sm:py-3 px-6 sm:px-8 rounded-md text-zinc-700 bg-[#3DDEED] font-normal">Vote</button>
        </div>
      }
      firstChild={
        <div
          style={{
            background: `radial-gradient(56.64% 56.64% at 49.91% 59.77%, rgba(19, 4, 32, 0.00) 0%, #140421 100%), url(${contestant})`,
          }}
          className="relative w-full h-[300px] bg-no-repeat bg-cover rounded-lg   sm:h-[400px]"
        >
       { /*  <img
            alt="hero"
            src={contestant}
            className="w-full h-full object-cover"
        />*/}

          <div className="absolute top-0 w-[105%] h-[105%]">
            <img src={ellipse} alt="ellipse" className="w-full h-full" />
          </div>
        </div>
      }
    />
  );
}
