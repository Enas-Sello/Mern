import { useState } from "react";
import GigCard from "../components/GigCard";
import { IoIosArrowDown } from "react-icons/io";
import { useApiQuery } from "../utils/UseFeatchData";
import Loading from "../components/Loading";

const Gigs = () => {
  const [sort, setSort] = useState("sales");
  const [menu, setMenus] = useState(false);
  const [price, setPrice] = useState({
    min: "",
    max: "",
  });
  // data feathing
  const { data, isLoading, isError, isFetching, refetch } = useApiQuery(
    "gigs",
    `gig/allGigs?min=${price.min}&max=${price.max}&sort=${sort}`
  );
  const apply = () => {
    refetch();
  };
  const reSort = (type) => {
    setSort(type);
    setMenus(false);
  };

  return (
    <section>
      <div className=" flex flex-col gap-3 p-10">
        <span className=" text-gray-600">Liverr {">"} Graphics & Design </span>
        <h1 className=" text-4xl font-bold">AI Artists</h1>
        <p className=" text-gray-600">
          Explore the boundaries of art and technology with Liver's AI artists
        </p>
        <div className=" flex flex-col md:flex-row gap-2 justify-between">
          <div className="flex gap-2 md:justify-between items-center">
            <span className=" text-gray-600">Budget :</span>
            <input
              onChange={(e) =>
                setPrice((prev) => ({ ...prev, min: e.target.value }))
              }
              type="number"
              placeholder="min"
              className="py-[.2rem] px-1 outline-none border-2 rounded-sm placeholder:text-gray-600"
            />
            <input
              onChange={(e) =>
                setPrice((prev) => ({ ...prev, max: e.target.value }))
              }
              type="number"
              placeholder="max"
              className=" py-[.2rem] px-1 outline-none border-2 rounded-sm placeholder:text-gray-600"
            />
            <button
              onClick={apply}
              className=" py-[.27rem] bg-secondary hover:bg-primary px-6 text-creamson rounded-lg"
            >
              Apply
            </button>
          </div>
          <div className="flex gap-2 md:justify-between items-center relative">
            <span className=" text-gray-600">Sort by :</span>
            <span className="sortType">
              {sort === "sales" ? "Best Selling" : "Newest"}
            </span>
            <IoIosArrowDown
              className=" hover:text-subtext cursor-pointer mt-1"
              onClick={() => setMenus(!menu)}
            />
            {menu && (
              <div className="absolute top-7 left-18 w-36 bg-white shadow-2xl rounded-xl p-4 flex flex-col gap-2  ">
                {sort === "sales" ? (
                  <span
                    onClick={() => reSort("createdAt")}
                    className="hover:text-subtext text-main cursor-pointer"
                  >
                    Newest
                  </span>
                ) : (
                  <span
                    onClick={() => reSort("sales")}
                    className="hover:text-subtext text-main cursor-pointer"
                  >
                    Best Selling
                  </span>
                )}
                {/* <span
                  onClick={() => reSort("Popular")}
                  className="hover:text-green-600 text-gray-500 cursor-pointer"
                >
                  Popular
                </span> */}
              </div>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 pt-10">
          {isLoading || (isFetching && <Loading />)}
          {isError && "something went wrong"}
          {data && data.map((card) => <GigCard key={card._id} card={card} />)}
        </div>
      </div>
    </section>
  );
};

export default Gigs;
