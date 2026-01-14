import React, { useContext } from "react";
import { FaHeart, FaMinus, FaPlus, FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { PiShoppingCartLight } from "react-icons/pi";
import { Link } from "react-router-dom";
import { CartContextCard } from "../context/CartContext";
import AllStars from "./pictures/Star.svg";

const LikeProduct = ({ el, i }) => {
  const { like, removeToLike, addToLike , addToCart , cart , increase , decrease } = useContext(CartContextCard);
  return (
    <div
      key={i}
      className="w-82 h-140 mt-5 relative border p-6 border-[#E4E7E9]"
    >
      {el.discountPercentage > 0 ? (
        <p className="text-[14px] text-[#191C1F] font-normal absolute left-4 top-4 z-1 bg-[#EFD33D] px-2.5 py-1.25 rounded-xxs">
          {el?.discountPercentage}% OFF{" "}
        </p>
      ) : (
        ""
      )}
      <img
        className="object-contain max-w-70 max-h-67 w-full h-full "
        src={el.thumbnail}
        alt={el.title}
      />
      <div className="flex gap-2 mt-5">
        <div className="flex items-center gap-1">
          <img src={AllStars} alt="" />
          <img src={AllStars} alt="" />
          <img src={AllStars} alt="" />
          <img src={AllStars} alt="" />
          <img src={AllStars} alt="" />
        </div>
        <span className="text-[18px] text-[#5F6C72] font-normal">(52,677)</span>
      </div>
      <p className="text-[#191C1F] text-[16px] font-normal mt-1">{el.title}</p>
      {el.discountPercentage > 0 ? (
        <div className="flex items-center gap-3 mt-2">
          <p className="text-[16px] text-[#ADB7BC] font-normal line-through">
            $ {el.price}
          </p>
          <p className="text-[18px] text-[#2DA5F3] font-semibold">
            $ {(el.price - el.price * (el.discountPercentage / 100)).toFixed(2)}
          </p>
        </div>
      ) : (
        <p className="text-[18px] text-[#2DA5F3] font-semibold">$ {el.price}</p>
      )}
      <p className="text-[14px] text-[#5F6C72] font-normal line-clamp-2 mt-2">
        {el.description}
      </p>
      <div className="flex gap-3 items-center mt-7">
        {like?.find((item) => item.id === el.id) ? (
          <button
            onClick={() => removeToLike(el)}
            className="cursor-pointer w-12 flex px-3 items-center justify-center bg-[#FFE7D6] text-[#191C1F]  h-12 rounded-xxs"
          >
            <FaHeart className="text-red-600 text-[24px]" />
          </button>
        ) : (
          <button
            onClick={() => addToLike(el)}
            className="cursor-pointer w-12 px-3 flex items-center justify-center bg-[#FFE7D6] text-[#191C1F]  h-12 rounded-xxs"
          >
            <FaRegHeart className=" text-[24px]" />
          </button>
        )}
         {cart?.find((item) => item.id === el.id) ? (
                  <div className="border-2  border-[#E4E7E9]  w-full max-h-12 flex items-center justify-between  px-5  py-3.5 rounded-[3px]">
                    <button
                      onClick={() => decrease(el)}
                      className="text-[#191C1F]"
                    >
                      <FaMinus className="w-4 h-4" />
                    </button>
                    <p className="text-[#475156] text-[20px] font-semibold">
                      {cart.find((item) => item.id === el.id)?.qty}
                    </p>
                    <button
                      onClick={() => increase(el)}
                      className="text-[#191C1F] "
                    >
                      <FaPlus className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => addToCart(el)}
                    className="flex items-center justify-center text-white gap-2 h-12 rounded-xxs w-full bg-[#FA8232] text-[14px] font-bold"
                  >
                    <PiShoppingCartLight className="w-5 h-5 " />
                    <span>ADD TO CART</span>
                  </button>
                )}
        <Link
          to={`/cart/${el.id}`}
          className="w-12 flex items-center px-3 justify-center bg-[#FFE7D6] text-[#191C1F] duration-300 h-12 rounded-xxs"
        >
          <IoEyeOutline className="text-[24px]" />
        </Link>
      </div>
    </div>
  );
};

export default LikeProduct;
