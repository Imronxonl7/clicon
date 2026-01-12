import React, { useContext } from "react";
import { BsFillCartDashFill, BsFillCartPlusFill } from "react-icons/bs";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { CartContextCard } from "../context/CartContext";

const Card = ({ el, i }) => {
  const { cart, like, removeToLike, addToLike, addToCart, removeToCart } =
    useContext(CartContextCard);
  return (
    <div key={i} className="w-62 h-74 relative  group border border-[#E4E7E9] p-4">
      {
        el.discountPercentage > 0 ? (      <p className="text-[14px] text-[#191C1F] font-normal absolute z-1 bg-[#EFD33D] px-2.5 py-1.25 rounded-xxs">{(el?.discountPercentage)}% OFF  </p>
) : ""
      }
      <div className="relative w-full h-47 ">
        <img
          className="object-contain max-w-54 w-full max-h-47 h-full "
          src={el.thumbnail}
          alt={el.title}
        />
        <div className=" items-center opacity-0 group-hover:opacity-100 duration-400 flex justify-center gap-2 bg-black/50 rounded-xs absolute top-0 left-0 w-54 h-47">
          {like?.find((item) => item.id === el.id) ? (
            <button
              onClick={() => removeToLike(el)}
              className="cursor-pointer w-12.5 flex items-center justify-center hover:bg-[#FA8232] hover:text-white duration-300 h-12.5  rounded-full bg-white"
            >
              <FaHeart className="text-red-600 text-[24px]" />
            </button>
          ) : (
            <button
              onClick={() => addToLike(el)}
              className="cursor-pointer w-12.5 flex items-center justify-center hover:bg-[#FA8232] hover:text-white duration-300 h-12.5  rounded-full bg-white"
            >
              <FaRegHeart className="  text-[24px]" />
            </button>
          )}

          {cart?.find((item) => item.id === el.id) ? (
            <button
              onClick={() => removeToCart(el)}
              className="cursor-pointer w-12.5 flex items-center transition-all hover:bg-[#FA8232] hover:text-white duration-300 justify-center h-12.5 rounded-full bg-white"
            >
              <BsFillCartDashFill className="text-[24px]" />
            </button>
          ) : (
            <button
              onClick={() => addToCart(el)}
              className="cursor-pointer w-12.5 flex items-center transition-all hover:bg-[#FA8232] hover:text-white duration-300 justify-center h-12.5 rounded-full bg-white"
            >
              <BsFillCartPlusFill className="text-[24px]" />
            </button>
          )}

          <Link
            to={`/cart/${el.id}`}
            className="w-12.5 flex items-center justify-center hover:bg-[#FA8232] hover:text-white duration-300 h-12.5 rounded-full  bg-white"
          >
            <IoEyeOutline className="text-[24px]" />
          </Link>
        </div>
      </div>
      <div className="mt-2">
        <p className="text-[#191C1F] line-clamp-2 text-[14px] font-normal">
          {el.description}
        </p>
        {
          el.discountPercentage > 0 ? (<div className="flex items-center gap-3">
          <p className="text-[14px] text-[#929FA5] font-normal line-through">$ {el.price}</p>
          <p className="text-[16px] text-[#2DA5F3] font-semibold">$ {((el.price - (el.price * (el.discountPercentage / 100))).toFixed(2))}</p>
        </div>) : (<p className="text-[14px] text-[#2DA5F3] font-semibold">$ {el.price}</p>)
        }
      </div>
    </div>
  );
};

export default Card;
