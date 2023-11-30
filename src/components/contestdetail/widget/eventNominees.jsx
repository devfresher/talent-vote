import React from "react";
import { Link } from "react-router-dom";
import contestant from "../../../assets/png/contestant.png"
export function EventNominees({ title, data }) {
  return (
    <div className="flex flex-col my-4 sm:my-8 items-center justify-center gap-4 sm:gap-6">
      <h2 className="font-semibold text-base sm:text-xl">{title}</h2>
      <div className="grid  nine xl:grid-cols-4  gap-4">
      {data.map((_, idx) => {
      return (
        <div
        key={idx}

        >
            <ContestantWidget/>
            </div>
      )
      })} 

      </div>
    </div>
  );
}

function ContestantWidget() {
  return (
    <Link className=" rounded-lg w-full flex pb-6 bg-gray-200 bg-opacity-10 flex-col gap-3 items-center justify-center">

        <div className="w-full h-[150px] sm:h-56 rounded-t-lg overflow-hidden">
        <img src={contestant} alt="contestant" className="w-full h-full object-cover"/>
        </div>
      <p className="font-semibold">Emmanuel Adesanya</p>
      <div className="px-2 flex flex-col sm:flex-row gap-2 items-center justify-around w-full">
        <button className="px-8 py-2 w-full rounded-md text-zinc-700 font-normal bg-[#3DDEED]">
          Vote
        </button>
        <button className="px-3 py-2 w-full rounded-md border border-[#3DDEED]">
          View Profile
        </button>
      </div>
    </Link>
  );
}
