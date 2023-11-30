import { useNavigate } from "react-router-dom";
import contestant from "../../../assets/png/contestant.png";
import { useState } from "react";
import { VoteContestant } from "./voteContestant";

export function ContestantWidget() {
  const navigate = useNavigate();
  const [isOpen, setOpen] = useState(false);

  function onClose() {
    setOpen(!isOpen);
  }
  return (
    <>
      <div className=" rounded-lg w-full flex pb-6 bg-gray-200 bg-opacity-10 flex-col gap-3 items-center justify-center">
        <div className="w-full h-[150px] sm:h-56 rounded-t-lg overflow-hidden">
          <img
            src={contestant}
            alt="contestant"
            className="w-full h-full object-cover"
          />
        </div>
        <p className="font-semibold">Emmanuel Adesanya</p>
        <div className="px-2 flex flex-col sm:flex-row gap-2 items-center justify-around w-full">
          <button
          onClick={onClose}
          className="px-8 py-2 w-full rounded-md text-zinc-700 font-normal bg-[#3DDEED]">
            Vote
          </button>
          <button
            onClick={() => {
              navigate("/contestant");
            }}
            className="px-3 py-2 w-full rounded-md border border-[#3DDEED]"
          >
            View Profile
          </button>
        </div>
      </div>
      {isOpen && <VoteContestant close={onClose} />}
    </>
  );
}
