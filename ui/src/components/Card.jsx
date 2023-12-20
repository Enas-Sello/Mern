import { Link } from "react-router-dom"
import PropTypes from "prop-types"

const Card = ({ card: { id, title, desc, img } }) => {
  return (
    <Link to={`/gig/${id}`}>
      <div className="w-[300px] h-[300px] text-white rounded-lg cursor-pointer relative">
        <img className="w-full h-full object-cover" src={img} alt="" />
        <span className=" absolute top-4 left-4 font-light">{desc}</span>
        <span className=" absolute top-10 left-4 font-medium text-xl">
          {title}
        </span>
      </div>
    </Link>
  )
}

export default Card

Card.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
  }).isRequired,
}
