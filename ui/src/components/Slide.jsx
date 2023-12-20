import PropTypes from "prop-types"
import Slider from "infinite-react-carousel"

const Slide = ({ children, slidesToShow, arrowsScroll }) => {
  return (
    <div className="flex justify-center py-20">
      <div className="w-[1400px] relative">
        <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
          {children}
        </Slider>
      </div>
    </div>
  )
}

Slide.propTypes = {
  children: PropTypes.node.isRequired,
  slidesToShow: PropTypes.number.isRequired,
  arrowsScroll: PropTypes.string.isRequired,
}

export default Slide
