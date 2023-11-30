import React from "react";
import logo from "../../assets/svg/logo.svg";
import { IoLogoTwitter } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook, FaDiscord } from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full bg-gray-200 bg-opacity-10 px-8 sm:px-20 py-6 sm:py-10 ">
      <div className="grid grid-cols-1 sm:grid-cols-7 lg:grid-cols-10 gap-8 items-start w-full">
        <div
          onClick={() => {
            navigate("/");
          }}
          className=" flex flex-col w-full items-start justify-start gap-3 sm:col-span-9 lg:col-span-2"
        >
          <div className="w-[70px]">
            <img src={logo} alt="next" className="w-full h-full" />
          </div>
          <div className="flex items-center gap-2">
            <Link to="www.twitter.com " className="">
              <IoLogoTwitter className="text-xl" />
            </Link>
            <Link to="www.twitter.com" className="">
              <RiInstagramFill className="text-xl" />
            </Link>
            <Link to="www.twitter.com" className="">
              <FaDiscord className="text-xl" />
            </Link>
            <Link to="www.twitter.com" className="">
              <FaFacebook className="text-xl" />
            </Link>
          </div>
          <p>+234 892 322 233</p>
        </div>

        <div className="space-y-6 sm:col-span-2">
          <h2 className="font-semibold text-lg sm:text-xl uppercase">
            Company
          </h2>
          <p
            onClick={() => {
              navigate("/about");
            }}
            className="cursor-pointer"
          >
            About Us
          </p>
          <p
            onClick={() => {
              navigate("/faq");
            }}
            className="cursor-pointer"
          >
            FAQ
          </p>
        </div>
        <div className="space-y-6 sm:col-span-2">
          <h2 className="font-semibold text-lg sm:text-xl uppercase">
            Resources
          </h2>
          <p>Blog Post name</p>
          <p
            onClick={() => {
              navigate("/faq");
            }}
            className="cursor-pointer"
          >
            FAQ
          </p>
          <p
            className="cursor-pointer"
            onClick={() => {
              navigate("/event");
            }}
          >
            Event
          </p>
        </div>
        <div className="flex flex-col justify-start items-start gap-4 sm:gap-6 w-full col-span-full xl:col-span-3">
          <p className="font-normal">Subscribe to our NewsLetter</p>
          <p>Please provide your email address to subscribe to newsletter</p>

          <div className="w-full max-w-md flex ">
            <input
              className="outline-none bg-transparent border w-[75%] border-gray-100 px-4 h-12"
              placeholder="Enter your mail..."
            />
            <button className="h-12 bg-[#3DDEED] font-normal text-zinc-700 w-[25%] rounded-r-sm items-center justify-center flex">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="text-center mt-8 text-xs sm:text-sm">{`Copyright ${new Date().getFullYear()} The NextGen Show`}</div>
    </div>
  );
};

export default Footer;
