import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const Card = ({ card: {title, description, cover } }) => {
  return (
    <Link to={`/gigs`}>
      <div className="card w-[300px] h-[300px] text-creamson rounded-lg cursor-pointer relative">
        <img className="w-full h-full object-cover" src={cover} alt="" />
        <span className=" absolute top-4 left-4 font-light">{description}</span>
        <span className=" absolute top-10 left-4 font-medium text-xl">
          {title}
        </span>
      </div>
    </Link>
  );
};

export default Card;

Card.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    cover: PropTypes.string,
  }).isRequired,
};
