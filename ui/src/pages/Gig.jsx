import { FiClock } from "react-icons/fi"
import { GiRecycle } from "react-icons/gi"
import { IoCheckmarkSharp } from "react-icons/io5"
import { Slider } from "infinite-react-carousel"
import { useApiQuery } from "../utils/UseFeatchData"
import { useParams } from "react-router-dom"
import User from "../components/User"
import Loading from "../components/Loading"
import Error from "../components/Error"
import SellerInfo from "../components/SellerInfo"
import Review from "../components/Review"
import Rating from "../components/Rating"
const Gig = () => {
  const { id } = useParams()

  const {
    data: gig,
    isLoading,
    isError,
    error,
  } = useApiQuery(`gig/${id}`, `gig/single/${id}`)
  return (
    <section className="p-10 flex flex-col gap-5">
      {isLoading && <Loading />}
      {isError && <Error error={error} />}
      <span>Liverr {">"} Graphics & Design</span>
      {gig && (
        <div className="grid grid-cols-6 gap-10">
          <div className="col-span-6  lg:col-span-4 flex flex-col gap-6">
            <h1 className=" text-3xl font-semibold ">
              I will create ai generated art for you
            </h1>
            {/* info */}

            <div className="flex items-center gap-3">
              <User
                id={gig?.userId}
                nameStyle="text-lg text-gray-500"
                imgStyle="w-10 h-10 rounded-full object-cover"
              />
              <Rating />
            </div>
            {/* slider */}
            <Slider slidesToShow={1} arrowsScroll={1}>
              {gig?.images.map((imgLink, i) => (
                <img
                  key={i}
                  className="max-h-[500px] object-contain"
                  src={imgLink}
                  alt=""
                />
              ))}
            </Slider>
            {/* about */}
            <div className="flex flex-col gap-3 mt-10">
              <h4 className=" text-2xl font-medium">About This Gig</h4>
              <p className="text-gray-500 text-sm">{gig?.description}</p>
            </div>
            {/* seller */}
            <SellerInfo id={gig?.userId} />
            {/* reviews  */}
            <Review gigID={gig._id} />
          </div>
          {/* buy section */}
          <div className=" col-span-6  lg:col-span-2 ">
            <div className=" border-2 rounded-sm p-3 flex flex-col gap-3 sticky top-36">
              <div className="flex justify-between items-center">
                <h3 className=" text-xl font-semibold ">{gig.shortTitle} </h3>
                <h2 className=" text-xl font-normal ">{gig.price}$</h2>
              </div>
              <p className=" text-gray-500">{gig.shortDesc}</p>
              <div className="flex justify-between">
                <div className="flex gap-2 items-center">
                  <FiClock className=" text-cyan-900" />
                  <span className="font-normal">
                    {gig.deliveryTime} Days Delivery
                  </span>
                </div>
                <div className="flex gap-2 items-center">
                  <GiRecycle />
                  <span className="font-normal">
                    {gig.revisionNumber} Revisions
                  </span>
                </div>
              </div>
              {gig.features && (
                <div className="flex flex-col gap-1">
                  {gig.features.map((feature, i) => (
                    <div className="flex gap-2 items-center" key={i}>
                      <IoCheckmarkSharp className="text-green-600 mt-1" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              )}
              <button className=" bg-secondary hover:bg-primary py-2 px-4  rounded text-white font-medium">
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Gig
