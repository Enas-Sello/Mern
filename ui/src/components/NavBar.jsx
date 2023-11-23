import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navLinks, menu } from "../data/MockData";
import { FaUser } from "react-icons/fa";

const logo = "market";
const user = {
  id: "1",
  userName: "enas",
  img: <FaUser />,
  isSeller: true,
};
const renderData = (data) => {
  return data.map((item) => (
    <NavLink key={item.id} to={item.link}>
      <span className=" transition-all ease-in-out">
        {user?.userName && item.title === "sign in"
          ? ""
          : user?.isSeller && item.title === "become a seller"
          ? ""
          : item.title}
      </span>
    </NavLink>
  ));
};
const NavBar = () => {
  const [active, setActive] = useState(false);

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const scrollStyle = active
    ? "bg-white  text-gray-950"
    : "flex flex-col justify-center bg-green-900 items-center text-white";

  return (
    <div
      className={` ${scrollStyle} transition-all duration-[.5s] ease-in-out sticky top-0 `}
    >
      <div className=" w-full flex justify-between py-5 px-3 ">
        <div className=" text-3xl font-bold">
          <span className=" ">{logo}</span>
          <span className=" text-green-600"> .</span>
        </div>
        <div className=" flex justify-between items-center gap-2 md:gap-3 lg:gap-10 font-semibold text-sm md:text-base ">
          {renderData(navLinks)}
          {!user && (
            <button className="py-1 px-4 md:py-2  md:px-7 rounded-md border-[1px] cursor-pointer bg-transparent hover:bg-green-600 hover:border-white transition-all ease-in-out">
              Join
            </button>
          )}
          {/* user */}
          {user && (
            <div className="group static mr-8">
              <Link className=" flex gap-2 justify-center items-center  group-hover:text-green-600">
                <span className="w-8 h-8 rounded-lg object-cover flex justify-center items-center">
                  {user.img}
                </span>
                <span>{user.userName}</span>
              </Link>
              <div className="hidden w-52 group-hover:flex flex-col gap-2 text-gray-500  font-normal  absolute top-12 right-6 p-4 bg-white rounded-lg ">
                {user?.isSeller && (
                  <>
                    <Link>gigs</Link>
                    <Link>add New gig</Link>
                  </>
                )}
                <Link>orders</Link>
                <Link>messages</Link>
                <Link>log out</Link>
              </div>
            </div>
          )}
        </div>
      </div>
      {/* menu */}
      {active && (
        <>
          <hr className=" w-full border-gray-400" />
          <div className="w-full p-2 flex justify-between font-light text-gray-400">
            {renderData(menu)}
          </div>
        </>
      )}
    </div>
  );
};

export default NavBar;
