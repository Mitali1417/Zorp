import React from "react";
import logo from "../assets/logo.svg";
import nav1 from "../assets/nav1.svg";
import nav2 from "../assets/nav2.svg";
import nav3 from "../assets/nav3.svg";
import nav4 from "../assets/nav4.svg";
import nav5 from "../assets/nav5.svg";
import nav6 from "../assets/nav6.svg";
import navProfilePic from "../assets/navProfilePic.jpg";

const Navbar = () => {
  return (
    <>
      <div className="left-0 fixed h-full w-[7rem] border-r-2 border-greyShade ">
        <div className={`flex flex-col justify-between items-center h-full`}>
          <div>
            <img src={logo} className={`w-[2.6rem] my-[1.5rem]`} alt="logo" />
            <img src={nav1} className={`w-[2.6rem] my-[1.5rem]`} alt="nav1" />
            <img src={nav2} className={`w-[2.6rem] my-[1.5rem]`} alt="nav2" />
            <img src={nav3} className={`w-[2.6rem] my-[1.5rem]`} alt="nav3" />
            <img src={nav4} className={`w-[2.6rem] my-[1.5rem]`} alt="nav4" />
          </div>
          <div>
            <img src={nav5} className={`w-[2.6rem] my-[1.5rem]`} alt="nav5" />
            <img src={nav6} className={`w-[2.6rem] my-[1.5rem]`} alt="nav6" />
            <img
              src={navProfilePic}
              className={`w-[2.6rem] h-[2.6rem] my-[1.5rem] rounded-full`}
              alt="nav profile"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
