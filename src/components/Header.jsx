import React, { useContext, useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import ytLogoMobile from "../images/yt-logo-mobile.png";
import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";

import { Context } from "../context/contextApi";
import Loader from "../shared/Loader";
import Sidebar from "./Sidebar";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);
  const { loading } = useContext(Context);
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");

  const searchQueryHandler = (event) => {
    if (
      (event?.key === "Enter" || event === "searchButton") &&
      searchQuery?.length > 0
    ) {
      navigate(`/search/${searchQuery.replace(/\s+/g, "+")}`);
      setSearchQuery("");
    }
  };

  return (
    <>
      <div className="sticky top-0 z-10 flex flex-row items-center justify-between h-14 px-4 bg-gray-800 header">
        {loading && <Loader />}

        <div className="flex h-5 items-center">
          {/* {pageName !== "video" && (
          <div
            className="flex md:hidden md:mr-6 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]"
            onClick={() => {
                setMobileMenu(!mobileMenu);
              }}
          >
            {mobileMenu ? (
              <CgClose className="text-white text-xl" />
            ) : (
              <SlMenu className="text-white text-xl" />
            )}
          </div>
        )} */}
          {/* <Link to="/" className="flex h-4 items-center">
          <img className="h-full" src={ytLogoMobile} alt="Youtube" />
          <p className="text-white text-xl font-semibold ml-2">Youdios</p>
        </Link> */}

          <div className="flex transition duration-[1s] ease-in-out">
            <SlMenu
              className="text-white cursor-pointer"
              onClick={() => {
                setSidebar(true);
              }}
            />
            <Link to="/" className="flex h-4 ml-3 items-center">
              <img className="h-full" src={ytLogoMobile} alt="Youtube" />
              <p className="text-white text-xl font-semibold ml-2">Youdios</p>
            </Link>
          </div>
        </div>

        <div className="group flex items-center py-1">
          <div className="flex h-8 md:h-10 md:ml-10 md:pl-5 border border-[#303030] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0">
            <div className="w-10 items-center justify-center hidden group-focus-within:md:flex">
              <IoIosSearch className="text-white" />
            </div>
            <input
              type="text"
              className="bg-transparent outline-none text-white pr-5 pl-5 md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]"
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
              placeholder="Search"
              value={searchQuery}
            />
          </div>
          <button
            className="w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 border-[#303030] rounded-r-3xl bg-white/[0.1]"
            onClick={() => searchQueryHandler("searchButton")}
          >
            <IoIosSearch className="text-white text-xl" />
          </button>
        </div>

        <div className="flex items-center">
          <div className="hidden md:flex">
            <div className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
              <RiVideoAddLine className="text-white text-xl cursor-pointer" />
            </div>
            <div className="flex items-center justify-center ml-2 h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
              <FiBell className="text-white text-xl cursor-pointer" />
            </div>
          </div>
          <div className="flex h-8 w-8 overflow-hidden rounded-full md:ml-4">
            <img src="https://xsgames.co/randomusers/assets/avatars/female/67.jpg" />
          </div>
        </div>
      </div>

      {sidebar && <Sidebar setSidebar={setSidebar} />}
    </>
  );
};

export default Header;
