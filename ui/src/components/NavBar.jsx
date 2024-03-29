import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { navLinks, menu } from "../data/MockData";
import { FaUser } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import PropTypes from "prop-types";
import { useApiMutation } from "../utils/UseFeatchData";

const NavBar = ({ logo }) => {
  const [active, setActive] = useState(false);
  const { pathname } = useLocation();
  const [activeMenu, setActiveMenu] = useState(false);
  //  get user info
  const user = JSON.parse(localStorage.getItem("currentUser"));

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  // add scroll effect
  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  const renderData = (data) => {
    return data.map((item) => (
      <NavLink key={item.id} to={item.link}>
        <span className=" transition-all ease-in-out">
          {user?.username && item.title === "sign in"
            ? ""
            : user?.isSeller && item.title === "become a seller"
            ? ""
            : item.title}
        </span>
      </NavLink>
    ));
  };

  // style effects
  const scrollStyle =
    active || pathname !== "/"
      ? "bg-white  text-main  shadow-2xl  rounded-lg "
      : "flex flex-col justify-center bg-primary items-center text-creamson  h-20";

  // log out
  const useLogoutMutation = () => {
    return useApiMutation("auth/logout");
  };

  const logoutMutation = useLogoutMutation();
  const handlelogout = (e) => {
    e.preventDefault();
    setActiveMenu(!activeMenu);
    logoutMutation.mutate();
    localStorage.removeItem("currentUser", null);
  };

  return (
    <div
      className={` ${scrollStyle} h-auto transition-all duration-[.5s] ease-in-out sticky top-0 z-50 `}
    >
      <div className=" w-full flex justify-between py-5 px-3 ">
        <div className=" text-3xl font-bold">
          <Link to={"/"} className=" hover:!text-inherit">
            {logo}
          </Link>
          <span className="text-subtext"> .</span>
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
            <div className=" static mr-8">
              <div className="flex gap-2 justify-center items-center  ">
                <Link className=" flex gap-2 justify-center items-center ">
                  <span className="w-8 h-8 rounded-lg object-cover flex justify-center items-center">
                    {!user.img ? <FaUser /> : user.img}
                  </span>
                  <span>{user.username}</span>
                </Link>{" "}
                <IoIosArrowDown
                  className=" w-4 h-4 p-0 mt-1 hover:text-subtext cursor-pointer"
                  onClick={() => setActiveMenu(!activeMenu)}
                />
              </div>
              {activeMenu && (
                <div className="w-48 flex flex-col gap-2 text-gray-500  font-normal  absolute top-14 right-6 p-4 bg-white rounded-lg  shadow-lg">
                  {user?.isSeller && (
                    <>
                      <Link
                        onClick={() => setActiveMenu(!activeMenu)}
                        to={"/myGigs"}
                      >
                        my gigs
                      </Link>
                      <Link
                        onClick={() => setActiveMenu(!activeMenu)}
                        to={"/add"}
                      >
                        add New gig
                      </Link>
                    </>
                  )}
                  <Link
                    onClick={() => setActiveMenu(!activeMenu)}
                    to={"/orders"}
                  >
                    orders
                  </Link>
                  <Link
                    onClick={() => setActiveMenu(!activeMenu)}
                    to={"/messages"}
                  >
                    messages
                  </Link>
                  <Link onClick={handlelogout} to={"/"}>
                    log out
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      {/* menu */}
      {(active || pathname !== "/") && (
        <>
          <hr className=" w-full border-gray-400" />
          <div className="w-full p-2 grid grid-cols-9 gap-3 items-center text-center   font-light text-gray-400  text-xs lg:text-base">
            {renderData(menu)}
          </div>
        </>
      )}
    </div>
  );
};

export default NavBar;

NavBar.propTypes = {
  logo: PropTypes.string.isRequired,
};
