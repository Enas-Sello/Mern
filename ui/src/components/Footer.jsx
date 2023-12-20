import { Link } from "react-router-dom"
import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaTwitter } from "react-icons/fa"
import { ImAccessibility } from "react-icons/im"
import { BsCoin } from "react-icons/bs"
import { GrLanguage } from "react-icons/gr"

const Footer = () => {
  const footer = [
    {
      id: "1",
      title: "Categories",
      links: [
        { id: "1", link: "", title: "Graphics & Design" },
        { id: "2", link: "", title: "Digital Marketing" },
        { id: "3", link: "", title: "Writing & Translation" },
        { id: "4", link: "", title: "Video & Animation" },
        { id: "5", link: "", title: "Music & Audio" },
        { id: "6", link: "", title: "Programming & Tech" },
        { id: "7", link: "", title: "Data" },
        { id: "8", link: "", title: "Business" },
        { id: "9", link: "", title: "Lifestyle" },
        { id: "55", link: "", title: "Photography" },
        { id: "66", link: "", title: "Sitemap" },
      ],
    },
    {
      id: "790",
      title: "About",
      links: [
        { id: "11", link: "", title: "Press & News" },
        { id: "22", link: "", title: "Partnerships" },
        { id: "33", link: "", title: "Privacy Policy" },
        { id: "44", link: "", title: "Terms of Service" },
        { id: "455", link: "", title: "Intellectual Property Claims" },
        { id: "466", link: "", title: "Investor Relations" },
        { id: "77", link: "", title: "Contact Sales" },
      ],
    },
    {
      id: "032",
      title: "Support",
      links: [
        { id: "32", link: "", title: "Help & Support" },
        { id: "21", link: "", title: "Trust & Safety" },
        { id: "12", link: "", title: "Selling on Livres" },
        { id: "25", link: "", title: "Buying on Livres" },
      ],
    },
    {
      id: "02",
      title: "Community",
      links: [
        { id: "01", link: "", title: "Customer Success Stories" },
        { id: "03", link: "", title: "Community hub" },
        { id: "04", link: "", title: "Forum" },
        { id: "05", link: "", title: "Events" },
        { id: "06", link: "", title: "Blog" },
        { id: "07", link: "", title: "Influencer" },
        { id: "08", link: "", title: "Affiliates" },
        { id: "09", link: "", title: "Podcast" },
        { id: "90", link: "", title: "Invite a Friend" },
        { id: "80", link: "", title: "Become a Sells" },
        { id: "70", link: "", title: "Community Standards" },
      ],
    },
    {
      id: "123",
      title: "More From liver",
      links: [
        { id: "132", link: "", title: "liver Business" },
        { id: "14", link: "", title: "liver Pro" },
        { id: "15", link: "", title: "liver Logo Maker" },
        { id: "16", link: "", title: "liver Guides" },
        { id: "17", link: "", title: ">Get Inspired" },
        { id: "18", link: "", title: "liver Select" },
        { id: "19", link: "", title: "ClearVoice" },
        { id: "91", link: "", title: "liver Workspace" },
        { id: "81", link: "", title: "Learn" },
        { id: "71", link: "", title: "Working Not Working" },
      ],
    },
  ]
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
      <div className="flex justify-between items-center p-5 text-gray-600">
        <div className="flex  gap-5">
          <h2>livres</h2>
          <span>© Livres International Ltd. 2023</span>
        </div>
        <div className="flex justify-between items-center gap-10">
          <div className="flex gap-3">
            <FaTwitter />
            <FaFacebook />
            <FaLinkedin />
            <FaPinterest />
            <FaInstagram />
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
