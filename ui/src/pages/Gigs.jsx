import { useState } from "react"
import GigCard from "../components/GigCard"
import { gigs } from "../data/MockData"
import { IoIosArrowDown } from "react-icons/io"

const Gigs = () => {
  const [sort, setSort] = useState("sales")
  const [menu, setMenus] = useState(false)

  const reSort = (type) => {
    setSort(type)
    setMenus(false)
  }

  return (
    <section>
      <div className=" flex flex-col gap-3 p-10">
        <span className=" text-gray-600">Graphics & Design </span>
        <h1 className=" text-4xl font-bold">AI Artists</h1>
        <p className=" text-gray-600">
          Explore the boundaries of art and technology with Liver's AI artists
        </p>
        <div className=" flex flex-col md:flex-row gap-2 justify-between">
          <div className="flex gap-2 md:justify-between items-center">
            <span className=" text-gray-600">Budget :</span>
            <input
              type="number"
              placeholder="min"
              className="py-[.2rem] px-1 outline-none border-2 rounded-sm placeholder:text-gray-600"
            />
            <input
              type="number"
              placeholder="max"
              className=" py-[.2rem] px-1 outline-none border-2 rounded-sm placeholder:text-gray-600"
            />
            <button className=" py-[.27rem] bg-green-600 px-6 text-white rounded-lg">
              Apply
            </button>
          </div>
          <div className="flex gap-2 md:justify-between items-center relative">
            <span className=" text-gray-600">Sort by :</span>
            <span className="sortType">
              {sort === "sales" ? "Best Selling" : "Newest"}
            </span>
            <IoIosArrowDown
              className=" hover:text-green-600 cursor-pointer mt-1"
              onClick={() => setMenus(!menu)}
            />
            {menu && (
              <div className="absolute top-5 left-36 bg-white shadow-2xl rounded-xl p-4 flex flex-col gap-2  ">
                {sort === "sales" ? (
                  <span
                    onClick={() => reSort("createdAt")}
                    className="hover:text-green-600 text-gray-500 cursor-pointer"
                  >
                    Newest
                  </span>
                ) : (
                  <span
                    onClick={() => reSort("sales")}
                    className="hover:text-green-600 text-gray-500 cursor-pointer"
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
          {gigs.map((card) => (
            <GigCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Gigs
