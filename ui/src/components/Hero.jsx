import { CiSearch } from "react-icons/ci"

const Hero = () => {
  return (
    <section className="bg-main text-white  h-[calc(100%-80px)] flex justify-center items-center p-10">
      <div className=" grid grid-cols-2 justify-between w-screen items-center">
        <div className="lg:col-span-1 col-span-2 grid grid-row-3 gap-10">
          <h1 className="text-2xl font-semibold lg:text-5xl">
            Find the perfect <span className=" font-light">freelance</span>{" "}
            services for your business
          </h1>
          <div className="flex border-2 bg-white  border-white rounded-md  justify-between ">
            <div className="flex  gap-3 items-center px-1">
              <CiSearch className=" text-gray-500 h-5 w-5" />
              <input
                className="bg-transparent border-none outline-none "
                type="text"
                placeholder='Try "building mobil app"'
              />
            </div>
            <button className="w-28 h-12 border-none text-white cursor-pointer bg-green-600 rounded-e-md">
              search
            </button>
          </div>
          <div className="flex flex-col md:flex-row md:items-center gap-3">
            <span className="">Popular :</span>
            <div className=" flex items-center gap-2  md:gap-5  justify-between">
              <button className="links">Web Design</button>
              <button className="links">WordPress</button>
              <button className="links">Logo Design</button>
              <button className="links">AI Services</button>
            </div>
          </div>
        </div>
        <div className="hidden lg:block h-full">
          <img className=" h-full object-contain" src="./img/man.png" alt="" />
        </div>
      </div>
    </section>
  )
}

export default Hero
