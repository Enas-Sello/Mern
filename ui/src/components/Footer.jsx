import { Link } from "react-router-dom"
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaPinterest,
  FaTwitter,
} from "react-icons/fa"
import { ImAccessibility } from "react-icons/im"
import { BsCoin } from "react-icons/bs"
import { GrLanguage } from "react-icons/gr"
import { footer } from "../data/MockData"

const Footer = () => {
  return (
    <div className=" flex flex-col">
      <div className=" p-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10">
        {footer.map((item) => (
          <div key={item.id} className=" col-span-1 flex flex-col gap-1">
            <h5 className="text-xl font-medium mb-2">{item.title}</h5>
            {item.links.map((link) => (
              <Link
                className="text-sm text-gray-600"
                to={link.link}
                key={link.id}
              >
                {link.title}
              </Link>
            ))}
          </div>
        ))}
      </div>
      <hr />
      {/* bottom */}
      <div className="flex justify-between items-center p-5 text-gray-500">
        <div className="flex flex-col md:flex-row  gap-2 md:gap-5">
          <h2>livres</h2>
          <span>© Livres International Ltd. 2023</span>
        </div>
        <div className="flex  justify-between items-center gap-3 md:gap-10">
          <div className="flex gap-3">
            <FaTwitter className=" hover:text-subtext" />
            <FaFacebook className=" hover:text-subtext" />
            <FaLinkedin className=" hover:text-subtext" />
            <FaPinterest className=" hover:text-subtext" />
            <FaInstagram className=" hover:text-subtext" />
          </div>
          <div className="flex items-center gap-1 ">
            <GrLanguage />
            <span>English</span>
          </div>
          <div className="flex items-center gap-1 ">
            <BsCoin />
            <span>USD</span>
          </div>
          <ImAccessibility />
        </div>
      </div>
    </div>
  )
}

export default Footer
