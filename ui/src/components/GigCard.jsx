import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FaHeart, FaStar } from "react-icons/fa6";
import User from "./User";

const GigCard = ({ card }) => {
  return (
    <div className=" w-[324px] h-[400px] rounded-lg  mb-10 shadow-2xl overflow-hidden p-3 text-gray-500">
      <Link to={`/gig/${card._id}`}>
        <img
          className="w-full h-1/2 object-cover cursor-pointer"
          src={card.cover}
          alt=""
        />
      </Link>
      <div className="flex flex-col gap-2 p-4">
        <div className="flex gap-2">
          <User
            id={card.userId}
            nameStyle="font-mono flex items-center text-gray-700"
            imgStyle="w-10 h-10 rounded-3xl object-cover"
          />
        </div>
        <span className="text-xs ">{card.shortDesc}</span>
        <div className="flex gap-1 items-center text-amber-400">
          <FaStar />
          {!isNaN && Math.round(card.totalStars / card.starNumber)}
        </div>
        <hr />
        <div className="flex items-center justify-between gap-2 ">
          <FaHeart className=" cursor-pointer hover:text-red-600" />
          <div className="flex flex-col items-center">
            <p className="text-sm">starting at</p>
            <p className="text-base "> ${card.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GigCard;

GigCard.propTypes = {
  card: PropTypes.shape({
    _id: PropTypes.string,
    cover: PropTypes.string,
    userId: PropTypes.string,
    description: PropTypes.string,
    shortDesc: PropTypes.string,
    username: PropTypes.string,
    price: PropTypes.string,
    totalStars: PropTypes.string,
    starNumber: PropTypes.string,
  }).isRequired,
};
