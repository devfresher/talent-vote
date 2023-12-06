import React, { useState, useEffect } from "react";
import TopBar from "../topbar/topBar";
import { Header, EventNominees, AboutEvent } from "./widget";
import Footer from "components/footer/footer";
import toast from "react-hot-toast";
import { ongoingEvent } from "Utils/api";
import { useParams } from "react-router-dom";

import {
  getActiveStage,
  getShortlistedParticipant,
  singleCategory,
  eventCategories,
  singleEvent,
  allTalents,
  allCountries,
} from "Utils/api";

import DropDownFilter from "components/composables/dropDowns";
export default function ContestDetail() {
  const [participants, setParticipants] = useState([]);
  const [page, setPage] = useState(1);
  const [currentPage, setcurrentPage] = useState(0);
  const [totalItems, setTotalItems] = useState(0);
  const [eventDetail, setEventDetail] = useState([]);
  const [event, setEvent] = useState(null);

  const [singleCategoryData, setSingleCategoryData] = useState(null);
  const [filterData, setFilterData] = useState([]);

  const [filters, setFilters] = useState({
    countryId: "",
    talentId: "",
    country: "",
    talent: "",
  });

  function handleDropDown(id, value, valueId) {
    if (value !== "-select-") {
      setFilters({ ...filters, [id]: value, [`${id}Id`]: valueId });
    } else {
      setFilters({ ...filters, [id]: "", [`${id}Id`]: "" });
    }
  }
  useEffect(() => {
    async function loadevents() {
      await ongoingEvent()
        .then((res) => {
          ////console.log(res);
          const { data } = res.data;

          setEvent(data);
        })
        .catch((err) => {
          ////console.log(err);
          const { error } = err.response.data;
          if (error) {
            toast.error(error.message);
          }
          const { message } = err.response.data.error;
          if (message) {
            toast.error(message);
          }
          const { message: mm } = err.response.data;
          if (mm) {
            toast.error(mm);
          }
        });
    }
    loadevents();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function getSingleCategory(id) {
    await singleCategory(id)
      .then((res) => {
        const { data } = res?.data;
        setSingleCategoryData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  async function activeStagePariticipants(catId, name) {
    await getActiveStage()
      .then(async (res) => {
        const { data } = res?.data;

        await getShortlistedParticipant(catId, data, "").then((res) => {
          ////console.log(res);
          const { data, paging } = res?.data?.data;

          setEventDetail((prev) => [...prev, { name, catId, data }]);

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
    async function getCatAndTalent() {
      const [country, talent] = await Promise.all([
        allCountries(),
        allTalents(),
      ]);

      setFilterData({
        country: country?.data?.data?.data,
        talent: talent?.data?.data?.data,
      });
    }

    getCatAndTalent();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (event?._id) {
      getEventCategories(event?._id, filters?.countryId, filters?.talentId);
    }
  }, [filters, event?._id]);

  async function getEventCategories(id, countryId, talentId) {
    await eventCategories(id, countryId, talentId)
      .then(async (res) => {
        const { data } = res.data;

        const categoryMap = data?.data?.map(({ name, _id }) => {
          return { name, id: _id };
        });
        const categoryData = [];
        try {
          const response = await Promise.all(
            categoryMap.map(({ id, name }) => {
              activeStagePariticipants(id, name);
            })
          );
          console.log({ response, categoryData });
        } catch (error) {
          console.log(error);
        }
        // setdata(data?.data);

        //const totalPage = Math.ceil(data?.paging?.totalItems / 10);
        ////console.log(totalPage);
        // setcurrentPage(data?.paging?.currentPage);
        //  const pageNumbers = [...Array(totalPage).keys()].map(
        //    (page) => page + 1
        //  );

        //setTotalItems(totalPage);
      })
      .catch((err) => {
        ////console.log(err);
      });
  }
  console.log({ eventDetail });

  return (
    <>
      <TopBar />
      <Header eventData={event} />
      <div className=" w-full px-2 py-5 sm:py-8 sm:px-10 md:px-20 gap-4 md:gap-8 my-3 sm:my-6 lg:my-8  ">
        <div className=" gap-3 flex w-full flex-col justify-start md:justify-between md:flex-row items-start md:items-center">
          <div className="flex items-center gap-4 sm:gap-10">
            <button
              className={`
                font-semibold border-b-2 border-[#3DDEED]
            py-2 px-1`}
            >
              Nominees
            </button>
          </div>

          <div className="w-full flex items-center gap-2 max-w-lg">
            <DropDownFilter
              data={filterData?.country}
              id={"country"}
              initial={"select country"}
              setActive={handleDropDown}
              active={filters.country}
            />
            <DropDownFilter
              data={filterData?.talent}
              id={"talent"}
              initial={"select talent"}
              setActive={handleDropDown}
              active={filters.talent}
            />
          </div>
        </div>
        <div className="flex flex-col gap-y-4 items-center justify-center w-full">
          {Array.isArray(eventDetail) &&
            eventDetail?.map(({ name, catId, data }, idx) => {
              return (
                <div key={idx}>
                  <EventNominees
                    title={name ?? "Category"}
                    data={data}
                    catId={catId}
                  />
                </div>
              );
            })}
        </div>
      </div>
      <Footer />
    </>
  );
}
