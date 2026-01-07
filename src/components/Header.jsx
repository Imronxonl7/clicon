import React, { memo } from "react";
import Twitter from "./pictures/Twitter.svg";
import Facebook from "./pictures/Facebook.svg";
import Pinterest from "./pictures/Pinterest.svg";
import Reddit from "./pictures/Reddit.svg";
import YouTube from "./pictures/Youtube.svg";
import Instagram from "./pictures/Instagram.svg";
import Icon from "./pictures/Icon.svg";
import PhoneCall  from "./pictures/PhoneCall.svg"
import { PiHeart, PiShoppingCartLight, PiUserLight } from "react-icons/pi";
import { SlLocationPin } from "react-icons/sl";
import { GoGitCompare } from "react-icons/go";
import { AiOutlineCustomerService } from "react-icons/ai";
import { IoHelpCircleOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-[#1B6392] fixed top-0 z-10 w-full ">
      <div className="container mx-auto px-5">
        <div className=" flex justify-between shadow-[0px_-1px_0px_0px_#FFFFFF29_inset] py-2">
          <div>
            <p className="text-white text-[14px] font-normal">
              Welcome to Clicon online eCommerce store.{" "}
            </p>
          </div>
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-2">
              <p className="text-white text-[14px] font-normal">Follow us:</p>
              <div className="flex items-center gap-2">
                <img className="w-4 h-4" src={Twitter} alt="" />
                <img className="w-4 h-4" src={Facebook} alt="" />
                <img className="w-4 h-4" src={Pinterest} alt="" />
                <img className="w-4 h-4" src={Reddit} alt="" />
                <img className="w-4 h-4" src={YouTube} alt="" />
                <img className="w-4 h-4" src={Instagram} alt="" />
              </div>
            </div>
            <div className="flex items-center gap-6">
              {/* Vertikal divider */}
              <div className="w-px h-6 bg-white/30"></div>{" "}
              {/* yoki bg-gray-400 */}
              {/* Til va valyuta */}
              <div className="flex items-center gap-6">
                <select className="bg-transparent text-[14px] text-white font-normal border-none outline-none cursor-pointer">
                  <option value="en" className="text-black">
                    Eng
                  </option>
                  <option value="ru" className="text-black">
                    Rus
                  </option>
                  <option value="uz" className="text-black">
                    Uzb
                  </option>
                </select>

                <select className="bg-transparent text-[14px] text-white font-normal border-none outline-none cursor-pointer">
                  <option value="usd" className="text-black">
                    USD
                  </option>
                  <option value="rub" className="text-black">
                    RUB
                  </option>
                  <option value="uzs" className="text-black">
                    UZS
                  </option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between shadow-[0px_-1px_0px_0px_#FFFFFF29_inset] py-3">
          <NavLink to={"/"} className="flex items-center gap-3">
            <img className="w-12 h-12" src={Icon} alt="" />
            <h1 className="text-[32px] text-white font-extrabold">CLICON</h1>
          </NavLink>

          <form className="flex items-center space-x-2">
            <div className="relative w-full">
              <input
                type="text"
                id="simple-search"
                className="px-1 py-2.5 bg-white outline-none w-xl text-[#77878F] border-default-medium rounded-base ps-5 text-sm  placeholder:text-body"
                placeholder="Search for anything..."
                required
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center shrink-0 text-white bg-brand hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs rounded-base w-10 h-10 focus:outline-none"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                />
              </svg>
            </button>
          </form>
          <div className="flex items-center gap-5">
            <NavLink to={"/cart"} className="text-white"><PiShoppingCartLight className=" w-8 h-8" /></NavLink>
            <NavLink to={"/like"} className="text-white"><PiHeart className=" w-8 h-8" /></NavLink>
            <NavLink to={"/register"} className="text-white"><PiUserLight className=" w-8 h-8" /></NavLink>
          </div>
        </div>
      </div>
      <div className="shadow-[0px_-1px_0px_0px_#E4E7E9_inset] bg-white">
        <div className="container mx-auto px-5 py-3">
          <div className="flex  w-full items-center justify-between ">
            <ul className="flex items-center gap-10">
              <li>
                <select className="bg-[#F2F4F5] py-3.5 rounded px-6">
                  <option value="all">All category</option>
                  <option value="games">Games</option>
                  <option value="cars">Cars</option>
                  <option value="football">Football</option>
                </select>
              </li>
              <li className="flex items-center gap-7">
                <div className="flex items-center hover:text-[#FA8232] duration-300 transition-all gap-2  text-[#5F6C72] ">
                  <SlLocationPin className="w-5.5 h-5.5" />
                  <p className="text-[14px] font-normal">Track Order</p>
                </div>
                <div className="flex items-center hover:text-[#FA8232] duration-300 transition-all gap-2  text-[#5F6C72] ">
                  <GoGitCompare className="w-5.5 h-5.5" />
                  <p className="text-[14px] font-normal">Compare</p>
                </div>
                <div className="flex items-center hover:text-[#FA8232] duration-300 transition-all gap-2  text-[#5F6C72] ">
                  <AiOutlineCustomerService className="w-5.5 h-5.5" />
                  <p className="text-[14px] font-normal">Customer Support</p>
                </div>
                <div className="flex items-center hover:text-[#FA8232] duration-300 transition-all gap-2  text-[#5F6C72] ">
                  <IoHelpCircleOutline className="w-5.5 h-5.5" />
                  <p className="text-[14px] font-normal">Need Help</p>
                </div>
              </li>
            </ul>
            <div className="flex items-center gap-2">
                <img src={PhoneCall} alt="" />
                <p className="text-[#191C1F] text-[18px] font-normal">+1-202-555-0104</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const HeaderMemo = memo(Header);
export default HeaderMemo;
