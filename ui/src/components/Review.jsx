import { AiOutlineDislike, AiOutlineLike } from "react-icons/ai";
import { GiPirateFlag } from "react-icons/gi";
import { useApiQuery } from "../utils/UseFeatchData";
import Loading from "./Loading";
import Error from "./Error";
import Rating from "./Rating";

const Review = ({ gigID }) => {
  console.log("gigID", gigID);
  const {
    data: reviews,
    isLoading,
    isError,
    error,
  } = useApiQuery(`review/${gigID}`, `review/65be886aa63f55e88ecdfd30`);
  console.log(!isLoading && "review", reviews);
  console.log(!isError && "error", error);
  return (
    <>
      {isLoading && <Loading />}
      {isError && <Error error={error} />}
      {reviews && (
        <div className="flex flex-col gap-3 mt-10">
          <h3 className=" font-medium text-2xl">reviews</h3>
          {reviews.map((review) => (
            <div key={review._id} className="flex flex-col gap-1">
              <div className="flex gap-2">
                <img
                  className="w-10 h-10 rounded-full object-cover"
                  src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div>
                  <span className="font-medium">Anna Bell</span>
                  <div className="flex gap-1 items-center text-sm text-gray-600">
                    <GiPirateFlag className=" text-teal-600" />
                    united States
                  </div>
                </div>
              </div>
              <Rating />
              <p>{review.description}</p>
              <div className="flex font-medium items-center gap-2">
                <span>Helpful?</span>
                <AiOutlineLike className="hover:text-text" />
                <span>Yes</span>
                <AiOutlineDislike className="hover:text-text" />
                <span>No</span>
              </div>
            </div>
          ))}
          <hr />
        </div>
      )}
    </>
  );
};

export default Review;
