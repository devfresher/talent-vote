import React, { useState } from "react";
import { MdNavigateBefore } from "react-icons/md";
export default function DropDownFilter({ data,initial, active, id, setActive }) {
  const [show, setShow] = useState(false);

  function toggleShow() {
    setShow(!show);
  }
  return (
    <div className="w-full">
     
      <div
        onClick={toggleShow}
        className="flex items-center justify-between relative mb-3 sm:mb-4 rounded-md outline-none bg-gray-200 bg-opacity-10   w-full h-11 px-4"
      >
        <span className="w-full text-gray-50 text-ellipsis overflow-hidden whitespace-nowrap">{active || initial}</span>
        <MdNavigateBefore
          className={` ${
            show ? "rotate-90" : "-rotate-90"
          } text-[22px] text-gray-50 `}
        />

        {show && (
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="absolute w-full -left-4 top-12 sm:left-0"
          >
            <div
              onClick={toggleShow}
              className="w-full h-full z-[60] inset-0 fixed bg-none"
            ></div>
            <div className="w-full z-[90] bg-white rounded-sm shadow-lg h-fit max-h-[200px] py-4 overflow-y-auto relative">
              <div className="flex flex-col text-zinc-700 font-medium items-start justify-start w-full">
                {Array.isArray(data) &&
                 ["-select-" ,...data]?.map((value, idx) => {
                  //  ////console.log(value?.name, value?._id)
                    return (
                      <div
                        onClick={() => {
                          setActive(id, value?.name, value?._id);
                          toggleShow();
                        }}
                        key={idx}
                        className="w-full"
                      >
                        <div className="cursor-pointer px-2 w-full py-3 border-b hover:bg-gray-100">
                          {value?.name || value}
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
