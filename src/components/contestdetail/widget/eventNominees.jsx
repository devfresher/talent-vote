import React from "react";
import { ContestantWidget } from "./contestantWidget";
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

