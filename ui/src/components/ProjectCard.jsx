import { Link } from "react-router-dom"
import PropTypes from "prop-types"

const ProjectCard = ({ card }) => {
  return (
    <div className=" w-[300px] h-[300px] rounded-lg cursor-pointer shadow-2xl overflow-hidden p-2">
      <Link to={`/`}>
        <img className="w-full h-2/3 object-cover" src={card.img} alt="" />
      </Link>
      <div className="flex items-center gap-3 p-4 h-1/3">
        <img
          className="w-10 h-10 rounded-3xl object-cover"
          src={card.pp}
          alt=""
        />
        <div className="flex flex-col">
          <span className=" font-medium text-lg">{card.cat}</span>
          <span className=" font-medium text-base">{card.username}</span>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard

ProjectCard.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    pp: PropTypes.string.isRequired,
    cat: PropTypes.string.isRequired,
    username: PropTypes.string.isRequired,
  }).isRequired,
}
