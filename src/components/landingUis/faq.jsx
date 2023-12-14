import { faqData } from "lib/data";
import React, { useState } from "react";
import { IoMdArrowUp } from "react-icons/io";
import { MdArrowDownward } from "react-icons/md";
export default function Faq() {
  return (
    <div className="w-full px-2 py-5 sm:py-8 sm:px-10 my-3 sm:my-6 lg:my-8 md:px-20 gap-4 md:gap-8 flex items-center flex-col">
      <h1 className="font-semibold text-lg sm:text-4xl">
        FAQ <span className="text-sm sm:text-lg">s</span>
      </h1>

      {faqData.map(({ title, text }, idx) => (
        <div className="w-full" key={idx}>
          <FaqWidget title={title} text={text} />
        </div>
      ))}
    </div>
  );
}

function FaqWidget({ title, text }) {
  const [isShow, setShow] = useState(false);
  return (
    <div className="w-full h-fit flex flex-col gap-2 sm:gap-4">
      <button
        onClick={() => {
          setShow(!isShow);
        }}
        className="flex items-center justify-between px-2 sm:px-4 py-2 sm:py-4 rounded-lg bg-gray-200 bg-opacity-10"
      >
        <p className="text-sm sm:text-lg">{title}</p>
        <MdArrowDownward className="text-xl" />
      </button>
      {isShow && (
        <div className="flex rounded-lg flex-col px-2 sm:px-6 py-2 sm:py-4 items-start gap-3 bg-gray-200 bg-opacity-10">
          <div className="flex items-center justify-between w-full">
            <p className="text-sm sm:text-lg">{title}</p>
            <IoMdArrowUp className="text-xl text-[#BD00FF]" />
          </div>

          <div className="flex flex-wrap leading-6 sm:leading-8 text-justify">
            {text}
          </div>
        </div>
      )}
    </div>
  );
}
