import React from "react";
import { ContestantWidget } from "./contestantWidget";
export function EventNominees({ title, data, catId }) {
  return (
    <div className="flex w-full flex-col my-4 sm:my-8 items-center justify-center gap-4 sm:gap-6">
      <h2 className="font-semibold text-base sm:text-xl">{title}</h2>
      <div className="grid w-full nine xl:grid-cols-4  gap-4">
        {Array.isArray(data) && data.map(({ participant, registeredData }, idx) => {
      
          return (
            <div key={idx}>
              <ContestantWidget
                image={participant?.profileImage?.url}
                id={participant?._id}
                catId={catId}
                name={registeredData?.name}
                registeredData={registeredData}
                participant={participant}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
