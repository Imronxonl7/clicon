import React, { memo, use, useContext, useState } from "react";
import Twitter from "./pictures/Twitter.svg";
import Facebook from "./pictures/Facebook.svg";
import Pinterest from "./pictures/Pinterest.svg";
import Reddit from "./pictures/Reddit.svg";
import YouTube from "./pictures/Youtube.svg";
import Instagram from "./pictures/Instagram.svg";
import Icon from "./pictures/Icon.svg";
import PhoneCall from "./pictures/PhoneCall.svg";
import { PiHeart, PiShoppingCartLight, PiUserLight } from "react-icons/pi";
import { SlLocationPin } from "react-icons/sl";
import { GoGitCompare } from "react-icons/go";
import { AiOutlineCustomerService } from "react-icons/ai";
import { IoHelpCircleOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { CartContextCard } from "../context/CartContext";
import { LanguageContext } from "../context/Language";
import USA from "./pictures/USA.svg";
import RUS from "./pictures/RUS.svg";
import useGet from "../hooks/useGet";

const Header = () => {
  const { cart } = useContext(CartContextCard);
  const { like } = useContext(CartContextCard);
  const [search, setSearch] = useState("");
  const { data } = useGet({ url:`products/search?q=${search}&limit=194` });
  const { setLang, changeLanguage } = useContext(LanguageContext);
  const searchedData = data?.data?.products;
  console.log(data);
  

  return (
    <header className="bg-[#1B6392] fixed top-0 z-10 w-full ">
      <div className="container mx-auto px-5">
        <div className=" flex justify-between shadow-[0px_-1px_0px_0px_#FFFFFF29_inset] py-2">
          <div>
            <p className="text-white text-[14px] font-normal">
              {changeLanguage.welcome}
            </p>
          </div>
          <div className="flex items-center gap-10">
            <div className="flex items-center gap-2">
              <p className="text-white text-[14px] font-normal">
                {changeLanguage.followUs}
              </p>
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
                <select
                  onChange={(e) => setLang(e.target.value)}
                  className="bg-transparent text-[14px] text-white font-normal border-none outline-none cursor-pointer"
                >
                  <option value="en" className="text-black">
                    <div>
                      <img src={USA} alt="" />
                      {changeLanguage.select}
                    </div>
                  </option>
                  <option value="ru" className="text-black">
                    <div className="flex">
                      <img src={RUS} alt="" />
                      {changeLanguage.select2}
                    </div>
                  </option>
                  <option value="uz" className="text-black">
                    <div>
                      <img
                        src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQ4AAACUCAMAAABV5TcGAAAAclBMVEX///8whzgwgffsAAD72dmzTZT2BC+zUDIqiTj2BRIrf/clffcge/c0g/f8/f8AcvYXePfR4P1IjfgAcPfs8v5hmfhwovk6hvfa5v3D1vyqxvvn7/6kwvtWlPh8qPmzy/yHr/qcvPqPtPoAaPa60Pzz9/7858D2AAAE+0lEQVR4nO2b6ZarKBhFaXsGVCTiFOer7/+KjSYiX03JXSvVFW+d/Y+KZOkO0wGLBcCDffUNPBfQQYAOwjs6OJdCSs5//gv5B6Xn5y0dXKhAm6xtTXjH44Skang4A4TXOrgSZuzK4pzUWX772WTfeBfJzHgl3mT5I27y/+OVDqGyqYgYS4YslDdtcBWXfay2kvxRVXIrBfLUljo+VGt5qUPp6cwYOw9a3pZhf/4qmYtkuHaqfCjTNOn05bOwL4s5Kc2RfFAdYdwWVgazzyDuqc3zzF4/mWspNGXEkvYqh+tqZumoH3vDnwvREZ7GebEx5eLOn5RzK6B17SiuI9a5wVS1KTvru7w+C76OMO6jtW3cPzvIrDN9tY24tj30pnRDq6xrnZjD6lBmtZHc11FWeB4KmYeulAvhSkGY22/Kw3eqPiWeDh6sPeWs5U/UX1Zq/J3S5UsPhacjThYb8xgf6vd8LLsO2V4aR/yFd/Pl7DrU2jiiXn1w9S+P0yHMsvxiqTpYb38sToeq1mll+s4jx66Dq3KxwbJ7phX+buHlhUdrak6HXlfn7I77F5kmGdYvCdP4l2pz0EQrs3XoiG7OKyLOS3Pa2pBNtFMbu/FG/agHuWVYLk9Zd9BEK9tVx3y6MXTwrCrnsmuvpaaa0mS6Jlquh6o4T9U1tIV9l8xTl33SnX8KTkefrquOWzqCvJ5ZdM3wS4i3fSxxGd7Yyfq8JdpATxGbB32k5vFCR3pTh9QJixrXWeTEbKLdSmpgrNoTbZay4piJ9jp23OwsgRrLLOm3kjRl23XbeMnDsh4TJ0BVZXY+1O6P0yGay8xye+TTuRSNy7BaS9W4HWathWp2OTqUuT7UOsZNtGJdo7PmZtsWrzKst1e0lLzP+NFWHm5VGk+rjuFbJ7hdh2zXsbSAjhUerINHdKzNvEezB/x4WPc7ym/dPHYdPFybx5ypQ80Fj8XbHFTtZef4jYz6Yv+TFMVHV957QPEskJ30ah09qlcZXzd+MBUkporGP8jljX/KxPPmYC3N1yH4dNk8JvuDXMbZkMdbIxAq7Iwr2UTbZS7R2gw7jMLlW1ux3iseAnIKJ4LNh7eWytt+SodxW2ybsU6r0SXacTyX/XhpLlz3fVKMw5ZorxU//yEeBz2jFeGw+qjF3mG4SSKbYa8dhOvJJtrkusnD8yGNonO2tYe2iKJ5O8DmS761FY80fLw4wRfBGuWiUu/9Qdg/lS6mC5toZy/RdsuGouseQ8Rql2CWismh8v2rFxq4CNb1R1SJbctL1UV3dllGtkWVtp6crqg2AVxMZbkLsBWr9HYIeibeevtHtsky5Sbt+iQ8N/kpc+fQ3DSn3L0WxI1Rce8ybGPEqd108DzTJ7p3+vS8+W6YPMW6HapuWKdJu3gI5f4b25K3nFiOt71xxn7ojcJShOJQjeOdNwdDO58qFd/x/s8vBt4rJUAHAToI0EFgfwIP9i/wYL8DD/YH8GAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACP56v/ZeK5wL/3ENhfwIP9DTzYP8CD/QY8oIMAHQToIEAHAToI0EGADgJ0EKCDAB0E6CBABwE6CNBBgA4CdBCggwAdBOggQAcBOgjQQYAOAnQQoIMAHQToIEAHAToI0EGADgJ0EKCDAB0E6CBABwE6CNBBgA4CdBCggwAdBOggQAcBOgj/AfJqAs5OvH6qAAAAAElFTkSuQmCC"
                        alt=""
                      />
                      {changeLanguage.select3}
                    </div>
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

          <div className="w-full relative  justify-center max-w-xl">
                <input
                  onChange={(e) => setSearch(e.target.value)}
                  type="search"
                  id="simple-search"
                  className="px-1 py-2.5 bg-white outline-none w-xl text-[#77878F] border-default-medium rounded-xs ps-5 text-sm  placeholder:text-body"
                  placeholder={changeLanguage.searchPlaceholder}
                  required
                />
            {
              search === "" ? "" : (
                <div className="max-w w-full flex flex-col overflow-y-scroll gap-3 top-12  h-100 p-5 bg-white z-1 absolute rounded-xs border border-[#E4E7E9]">
              {searchedData?.map((el) => (
                <Link to={`/cart/${el.id}`} className="flex items-start rounded-xs border border-[#E4E7E9] gap-4">
                  <img
                    className="max-w-30 h-30 w-full rounded-xs object-contain"
                    src={el.thumbnail}
                    alt={el.title}
                  />
                  <div className="px-1">
                    <h3 className="text-[20px] text-[#191C1F] font-semibold">
                      {el.title}
                    </h3>
                    <p className="text-[16px] pt-2 text-[#5F6C72] line-clamp-3">
                      {el.description}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
              )
            }
          </div>
          <div className="flex items-center gap-5">
            <NavLink to={"/cart"} className="text-white">
              <div className="relative">
                <PiShoppingCartLight className="flex w-8 h-8 " />
                {cart.length > 0 ? (
                  <p className="shop absolute -top-1.5 w-5 text-[14px] h-5 -right-0.5 bg-white text-[#1B6392] rounded-[100px] flex items-center justify-center border-[1.5px] border-[#1B6392]">
                    {cart?.length}
                  </p>
                ) : (
                  ""
                )}
              </div>
            </NavLink>
            <NavLink to={"/like"} className="text-white">
              <div className="relative">
                <PiHeart className="flex w-8 h-8 " />
                {like.length > 0 ? (
                  <p className="heart absolute -top-1.5 text-[14px] w-5 h-5 -right-0.5 bg-white text-[#1B6392] rounded-[100px] flex items-center justify-center border-[1.5px] border-[#1B6392]">
                    {like?.length}
                  </p>
                ) : (
                  ""
                )}
              </div>
            </NavLink>
            <NavLink to={"/register"} className="text-white">
              <PiUserLight className=" w-8 h-8" />
            </NavLink>
          </div>
        </div>
      </div>
      <div className="shadow-[0px_-1px_0px_0px_#E4E7E9_inset] bg-white">
        <div className="container mx-auto px-5 py-3">
          <div className="flex  w-full items-center justify-between ">
            <ul className="flex items-center gap-10">
              <li>
                <select className="bg-[#F2F4F5] py-3.5 rounded px-6">
                  <option value="all">{changeLanguage.allCategory}</option>
                  <option value="games">Games</option>
                  <option value="cars">Cars</option>
                  <option value="football">Football</option>
                </select>
              </li>
              <li className="flex items-center gap-7">
                <div className="flex items-center hover:text-[#FA8232] duration-300 transition-all gap-2  text-[#5F6C72] ">
                  <SlLocationPin className="w-5.5 h-5.5" />
                  <Link to={"/trackOrder"} className="text-[14px] font-normal">
                    {changeLanguage.trackOrder}
                  </Link>
                </div>
                <div className="flex items-center hover:text-[#FA8232] duration-300 transition-all gap-2  text-[#5F6C72] ">
                  <GoGitCompare className="w-5.5 h-5.5" />
                  <Link to={"/compare"} className="text-[14px] font-normal">
                    {changeLanguage.compare}
                  </Link>
                </div>
                <div className="flex items-center hover:text-[#FA8232] duration-300 transition-all gap-2  text-[#5F6C72] ">
                  <AiOutlineCustomerService className="w-5.5 h-5.5" />
                  <Link
                    to={"/customerSupport"}
                    className="text-[14px] font-normal"
                  >
                    {changeLanguage.customerSupport}
                  </Link>
                </div>
                <div className="flex items-center hover:text-[#FA8232] duration-300 transition-all gap-2  text-[#5F6C72] ">
                  <IoHelpCircleOutline className="w-5.5 h-5.5" />
                  <Link to={"/needHelp"} className="text-[14px] font-normal">
                    {changeLanguage.needHelp}
                  </Link>
                </div>
              </li>
            </ul>
            <div className="flex items-center gap-2">
              <img src={PhoneCall} alt="" />
              <p className="text-[#191C1F] text-[18px] font-normal">
                +1-202-555-0104
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

const HeaderMemo = memo(Header);
export default HeaderMemo;
