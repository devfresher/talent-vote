import React from "react";
import { MdOutlineExplore } from "react-icons/md";
import star from "../../assets/png/star.png";
import Slider from "react-slick";
import { IoLogoTwitter } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook, FaDiscord } from "react-icons/fa";
import ImageWidget from "./widget/imageWidget";
import event from "../../assets/svg/event.svg";
import event2 from "../../assets/svg/2ndevent.svg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import hero from "../../assets/png/hero.png";
import { Link, useNavigate } from "react-router-dom";
import SlideInAnimation from "components/UI/slideInAnimation";
export default function Hero() {
  const navigate = useNavigate()
  const images = [hero, hero, hero];
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    fade: false,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    //prevArrow: false,
    //nextArrow: false,
  };

  const parentStyle =
    "w-full px-2 py-5 sm:py-8 sm:px-10 my-3 sm:my-6 lg:my-8 md:px-20 gap-4 md:gap-8 flex  flex-col lg:flex-row items-center justify-center";
  return (
    <>
      <SlideInAnimation
        className={parentStyle}
        firstChild={
          <div className="flex flex-col w-[90%] justify-start items-start gap-6">
            <h3 className="uppercase text-base text-gray-200">
              Virtual Contest
            </h3>

            <h1 className="text-3xl md:text-5xl lg:text-3xl leading-6 sm:leading-10 min-[1100px]:text-5xl font-semibold">
              Impacting the Lives of Young People in Africa
            </h1>

            <div className="flex items-start justify-start w-full gap-3">
              <img src={star} alt="star" />
              <p>
                Making youngsters leverage their skills, abilities and talents
                stand out as a goal getter
              </p>
            </div>

            <div className="flex items-center gap-4">
              <button
               onClick={() => {
                navigate(`/event`)
               }}
            
                className="text-zinc-800 font-normal bg-[#3DDEED] rounded-sm px-4 py-3"
              >
                Start Voting
              </button>
              <button className="flex items-center gap-2 justify-center border border-gray-50 rounded-sm px-4 sm:py-3 hover:bg-gray-200 hover:bg-opacity-10 py-2">
                <MdOutlineExplore className="text-xl" />
                <span>Explore</span>
              </button>
            </div>

            <div className="flex gap-3 items-start flex-col justify-start w-full">
              <p>FOLLOW US</p>
              <div className="flex items-center gap-2">
                <Link
                  to="www.twitter.com "
                  className="border border-zinc-600 rounded-md p-2 hover:bg-gray-200 hover:bg-opacity-10"
                >
                  <IoLogoTwitter className="text-xl" />
                </Link>
                <Link
                  to="www.twitter.com"
                  className="border border-zinc-600 rounded-md p-2 hover:bg-gray-200 hover:bg-opacity-10"
                >
                  <RiInstagramFill className="text-xl" />
                </Link>
                <Link
                  to="www.twitter.com"
                  className="border border-zinc-600 rounded-md p-2 hover:bg-gray-200 hover:bg-opacity-10"
                >
                  <FaDiscord className="text-xl" />
                </Link>
                <Link
                  to="www.twitter.com"
                  className="border border-zinc-600 rounded-md p-2 hover:bg-gray-200 hover:bg-opacity-10"
                >
                  <FaFacebook className="text-xl" />
                </Link>
              </div>
            </div>
          </div>
        }
        secondChild={
          <div className="relative w-full mx-auto h-[400px] rounded-lg sm:w-[450px] xl:w-[600px] sm:h-[500px] xl:h-[600px]">
            <Slider
              className="slider  z-[4] w-full h-[400px] rounded-lg sm:w-[450px] xl:w-[600px] sm:h-[500px] xl:h-[600px]"
              {...settings}
            >
              {images?.map((image, index) => {
                return (
                  <div
                    key={index}
                    className="relative w-full h-[400px] rounded-lg   sm:h-[500px] xl:h-[600px]"
                  >
                    <ImageWidget image={image} className="" />
                  </div>
                );
              })}
            </Slider>
            <div className="absolute top-0 right-0 sm:top-[20%] h-16 z-50 sm:h-20 sm:-right-8">
              <img src={event} className="w-full h-full" alt="" />
            </div>
            <div className="absolute bottom-2 left-2 sm:-top-8 z-50 h-48 w-[280px]  sm:w-full sm:h-32 sm:-left-24">
              <img src={event2} className="w-full h-full" alt="" />
            </div>
          </div>
        }
      />
    </>
  );
}
