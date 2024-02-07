import {  FaUser } from "react-icons/fa6"
import { useApiQuery } from "../utils/UseFeatchData"
import Loading from "./Loading"
import Error from "./Error"
import Rating from "./Rating"

const SellerInfo = ({ id }) => {
  const {
    data: seller,
    isLoading,
    isError,
    error,
  } = useApiQuery(`seller${id}`, `user/single/${id}`)
  return (
    <>
      {isLoading && <Loading />}
      {isError && <Error error={error} />}
      {seller && (
        <div className=" flex flex-col gap-2 mt-10">
          <h4 className=" text-2xl font-medium">About The seller</h4>
          <div className="flex items-center gap-2">
            <img
              className="w-20 h-20 rounded-2xl object-cover"
              src={seller.img ? seller.img : <FaUser />}
              alt=""
            />
            {/* info */}
            <div className="flex flex-col gap-1">
              <span className="font-medium">{seller.username}</span>
              <Rating />
              <button className="text-center py-1 px-2 border-2 rounded-md font-medium hover:bg-primary hover:text-creamson hover:border-transparent">
                Contact me
              </button>
            </div>
          </div>
          {/* box  */}
          <div className=" border p-3 flex flex-col gap-3">
            <div className="grid grid-rows-3 grid-flow-col gap-4 ">
              <div className="item">
                <span className="title">From</span>
                <span className="desc">{seller.country}</span>
              </div>
              <div className="item">
                <span className="title">Member since</span>
                <span className="desc">Aug 2022</span>
              </div>
              <div className="item">
                <span className="title">Avg. response time</span>
                <span className="desc">4 hours</span>
              </div>
              <div className="item">
                <span className="title">E-Mail</span>
                <span className="desc">{seller.email}</span>
              </div>
              {seller.phone && (
                <div className="item">
                  <span className="title">phone number</span>
                  <span className="desc">{seller.phone}</span>
                </div>
              )}
              <div className="item">
                <span className="title">Languages</span>
                <span className="desc">English</span>
              </div>
            </div>
            <hr />
            <p>{seller.description}</p>
          </div>
        </div>
      )}
    </>
  )
}

export default SellerInfo
