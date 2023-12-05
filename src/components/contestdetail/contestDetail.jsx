import React, { useState, useEffect } from "react";
import TopBar from "../topbar/topBar";
import { Header, EventNominees, AboutEvent } from "./widget";
import Footer from "components/footer/footer";

import { useParams } from "react-router-dom";
import { getActiveStage, getShortlistedParticipant, singleCategory } from "Utils/api";
export default function ContestDetail() {
  const [active, setActive] = useState(1);
  const {id} = useParams()
  const [participants, setParticipants] = useState([]);
  const [page, setPage] = useState(1);
  const [currentPage, setcurrentPage] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [searchValue, setsearchValue] = useState("")
  const [singleCategoryData, setSingleCategoryData] = useState(null);

  useEffect(() => {
    async function getSingleCategory() {
      await singleCategory(id)
        .then((res) => {
          const { data } = res?.data;
          setSingleCategoryData(data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
    getSingleCategory();
  }, [id]);
  async function activeStagePariticipants() {
    await getActiveStage()
      .then(async (res) => {
        const { data } = res?.data;

        await getShortlistedParticipant(id, data, searchValue).then((res) => {
          ////console.log(res);
          const { data, paging } = res?.data?.data;
          setParticipants(data);
         // const totalPage = Math.ceil(paging?.totalItems / 10);

          //setcurrentPage(paging?.currentPage);
          //setTotalItems(totalPage);
        });
      })
      .catch((err) => {
        ////console.log(err);
      });
  }
  useEffect(() => {
   
    activeStagePariticipants();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  return (
    <>
      <TopBar />
      <Header categoryData={singleCategoryData} />
      <div className=" w-full px-2 py-5 sm:py-8 sm:px-10 md:px-20 gap-4 md:gap-8 my-3 sm:my-6 lg:my-8  ">
        <div className=" gap-3 flex w-full flex-col justify-start md:justify-between md:flex-row items-start md:items-center">
          <div className="flex items-center gap-4 sm:gap-10">
            <button
              onClick={() => {
                setActive(1);
              }}
              className={`${
                active === 1 ? "font-semibold border-b-2 border-[#3DDEED]" : ""
              } py-2 px-1`}
            >
              Nominees
            </button>
          
          </div>

          <div className="w-full flex items-center gap-2 max-w-lg">
            <input
              type="text"
              value={searchValue}
              onChange={(e) => {
                setsearchValue(e.target.value);
              }}
              className="w-[70%] rounded-md h-11 px-4 outline-none bg-gray-200 bg-opacity-10 "
              placeholder="search for contestant"
            />
            <button
            disabled={searchValue === ""}
            onClick={activeStagePariticipants}
            className={`${searchValue === "" ? "bg-opacity-50" : ""} flex items-center rounded-md justify-center h-11 bg-[#3DDEED] w-[25%] text-zinc-700 font-normal `}>
              Search
            </button>
          </div>
        </div>
        {active === 1 && (
          <EventNominees
            title={singleCategoryData?.name ?? "Category"}
            data={participants}
            catId={singleCategoryData?._id}
            
          />
        )}
     
      </div>
      <Footer/>
    </>
  );
}
