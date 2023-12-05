import { Input } from "components/composables/input";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { voting } from "Utils/api";
import { LoaderIcon } from "lucide-react";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";
export function VoteContestant({ close, name, id, catId }) {
  const [loading, setloading] = useState(false);
  const { authtoken } = useSelector((state) => state.user);
  const [voteData, setVoteData] = useState({
    numberOfVotes: "",
    email: "",
    fullName: "",
    phoneNumber: "",
  });

  function handleChange(id, value) {
    setVoteData({ ...voteData, [id]: value });
  }

  async function voteParticipant() {
    if (!authtoken) {
      toast.error("Register/Login to vote a participant")
      return
    }
    
    for (let i in voteData) {
      if (voteData[i] === "") {
        toast.error(`${i} is required`);
        return;
      }
    }
    setloading(true);
    await voting(authtoken, catId, id, voteData)
      .then((res) => {
        ////console.log(res);
        setloading(false);
        window.location.href = res.data;
        //toast.success("Voting Successfull");
      })
      .catch((err) => {
        ////console.log(err);
        setloading(false);
      });
  }
  return (
    <div
      onClick={close}
      className="w-full fixed h-full inset-0 bg-gray-200 bg-opacity-60"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="absolute w-[95%] sm:w-[500px] bg-[#0F041C] border overflow-hidden border-gray-200 rounded-t-lg inset-0 m-auto h-fit"
      >
        <div className="bg-white p-3 text-[#170F49] font-normal w-full flex justify-between items-center">
          <p>{`Vote for ${name}  `}</p>
          <button onClick={close}>
            <MdClose className="text-[#170F49] text-xl text-" />
          </button>
        </div>

        <div className="py-4 px-2 flex flex-col items-center justify-center w-full gap-4">
          <p>
            Ensure the contestant is who you actually want to vote. There would
            be no refund or reversal of vote if you choose a wrong contestant.
          </p>
          <Input
            type={"number"}
            placeholder={"Yout total number of votes"}
            value={voteData.numberOfVotes}
            setValue={handleChange}
            id="numberOfVotes"
            label={"Total number of votes"}
          />
          <Input
            type={"text"}
            placeholder={"Name"}
            value={voteData.fullName}
            setValue={handleChange}
            id="fullName"
            label={"Full Name"}
          />
          <Input
            type={"email"}
            placeholder={"Email Address"}
            value={voteData.email}
            setValue={handleChange}
            id="email"
            label={"Email Address"}
          />
          <Input
            type={"number"}
            placeholder={"081 2321 2212"}
            value={voteData.phoneNumber}
            setValue={handleChange}
            id="phoneNumber"
            label={"phone Number"}
          />
        </div>

        <div className="w-full text-center font-normal text-[#FFCC15]">
          Each Vote costs ₦100.00
        </div>

        <div className="py-4 flex w-full items-center justify-center">
          <button
          onClick={voteParticipant}
          className="w-[200px] h-10 rounded-md bg-[#3DDEED] font-normal text-zinc-700 ">
            {loading ? (
              <LoaderIcon className="text-xl animate-spin" />
            ) : (
              " Proceed to Payment"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
