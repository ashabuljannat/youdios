import React, { useContext } from "react";
import { Link} from "react-router-dom";
import ytLogoMobile from "../images/yt-logo-mobile.png";
import SidebarItem from "./SidebarItem";
import { categories } from "../utils/constants";
import { Context } from "../context/contextApi";
import { SlMenu } from "react-icons/sl";

const Sidebar = ({ setSidebar }) => {
  const {
    selectedCategory,
    setSelectedCategory,
    setSelectedType,
  } = useContext(Context);

  return (
    <>
      <div
        className={`w-[220px] h-screen py-4 bg-gray-800 absolute z-10 sidebar`}
      >
        <div className="flex h-14 fixed px-5">
          <SlMenu
            className="text-white cursor-pointer"
            onClick={() => {
              setSidebar(false);
            }}
          />
          <Link to="/" className="flex h-4 ml-3 items-center">
            <img className="h-full" src={ytLogoMobile} alt="Youtube" />
            <p className="text-white text-xl font-semibold ml-2">Youdios</p>
          </Link>
        </div>

        <div className="overflow-y-auto px-5 h-[480px] fixed top-14">
          {categories.map((item, i) => {
            return (
              <span key={i}>
                <SidebarItem
                  name={item.name}
                  icon={item.icon}
                  type={item.type}
                  setSelectedCategory={setSelectedCategory}
                  selectedCategory={selectedCategory}
                  setSelectedType={setSelectedType}
                  setSidebar={setSidebar}
                />
                {item.divider && <hr className="my-5 border-white/[0.2]" />}
              </span>
            );
          })}
          <hr className="my-5 border-white/[0.2]" />
          <div className="text-white/[0.5] text-[12px]">
            © 2023 Ashabul Jannat Alif
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
