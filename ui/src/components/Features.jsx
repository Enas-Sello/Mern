import PropTypes from "prop-types"
import { FaRegCheckCircle } from "react-icons/fa"

const Features = (props) => {
  const { features } = props
  const { section } = props
  return (
    <div
      className={` flex justify-center items-center w-full h-full ${
        section ? "bg-blue-950 text-white" : "bg-green-50"
      }  py-20`}
    >
      <div className="grid grid-cols-5 justify-between items-center gap-10 w-full p-10">
        <div className="col-span-5 lg:col-span-2 flex flex-col gap-4 justify-center">
          <h2 className=" text-2xl font-medium mb-3">{features.title} </h2>
          {section && (
            <>
              <h2 className=" text-2xl font-medium mb-3">{features.des} </h2>
              <p className="text-lg font-light  leading-7">{features.p}</p>
            </>
          )}
          {features.features.map((item) => (
            <div key={item.id} className="flex flex-col gap-3">
              <div
                className={`flex items-center gap-2 ${
                  section ? "text-white" : "text-gray-700"
                }
               `}
              >
                <FaRegCheckCircle
                  className={section ? "text-white" : " text-lime-300"}
                />
                {item.feature}
              </div>
              <p
                className={` ${section ? "text-white" : "text-gray-700"}
              text-lg font-light text-gray-500 leading-7 `}
              >
                {item.des && item.des}
              </p>
            </div>
          ))}
          {section && (
            <div className="flex justify-start items-start">
              <button className=" py-2 px-4 bg-green-600 rounded-sm hover:bg-green-900 transition-all ease-in-out">
                {features.button}
              </button>
            </div>
          )}
        </div>
        <div className="hidden lg:block col-span-3 h-full">
          <img
            className=" h-full w-full object-contain"
            src={features.img}
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default Features

Features.propTypes = {
  features: PropTypes.shape({
    title: PropTypes.string.isRequired,
    des: PropTypes.string.isRequired,
    p: PropTypes.string.isRequired,
    button: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    features: PropTypes.array.isRequired,
  }).isRequired,
  section: PropTypes.bool,
}
