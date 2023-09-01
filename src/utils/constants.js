import { AiFillHome, AiOutlineFlag } from "react-icons/ai";
import { MdLocalFireDepartment, MdLiveTv } from "react-icons/md";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm } from "react-icons/fi";
import { IoGameControllerSharp } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { GiDiamondTrophy, GiEclipse } from "react-icons/gi";
import { RiLightbulbLine, RiFeedbackLine } from "react-icons/ri";
import { FiSettings, FiHelpCircle } from "react-icons/fi";

export const categories = [
  { name: "Home", icon: <AiFillHome />, type: "now" },
  { name: "Trending", icon: <MdLocalFireDepartment />, type: "now" },
  { name: "Music", icon: <CgMusicNote />, type: "music" },
  { name: "Gaming", icon: <IoGameControllerSharp />, type: "games" },
  { name: "Movies", icon: <FiFilm />, type: "movies", divider: true },
  { name: "Live", icon: <MdLiveTv />, type: "now" },
  { name: "News", icon: <ImNewspaper />, type: "now" },
  { name: "Sports", icon: <GiDiamondTrophy />, type: "games" },
  { name: "Learning", icon: <RiLightbulbLine />, type: "now" },
  {
    name: "Fashion & beauty",
    icon: <GiEclipse />,
    type: "movies",
    divider: true,
  },
  { name: "Settings", icon: <FiSettings />, type: "menu" },
  { name: "Report History", icon: <AiOutlineFlag />, type: "menu" },
  { name: "Help", icon: <FiHelpCircle />, type: "menu" },
  { name: "Send feedback", icon: <RiFeedbackLine />, type: "menu" },
];
