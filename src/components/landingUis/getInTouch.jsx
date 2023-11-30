import React from "react";
import about from "../../assets/svg/about.svg"
export default function GetInTouch() {
    return (
        <div className="w-full px-2 py-5 sm:py-8 sm:px-10 my-3 sm:my-6 lg:my-8 md:px-20  ">
            <div className="rounded-lg bg-gray-200 bg-opacity-10 gap-3 sm:gap-5 w-full flex flex-col items-center justify-center py-4 sm:py-8">
                <img src={about} alt="about" />

                <p>Still have questions?</p>
                <p className="text-gray-300">Can’t find the answer you’re looking for? Please chat to our friendly team.</p>
                <button className="text-zinc-800 bg-[#3DDEED]  font-normal rounded-sm px-4 py-3">
                Get in touch
              </button>
            </div>

        </div>
    )
}