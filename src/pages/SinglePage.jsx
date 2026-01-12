import React from "react";
import { Link, useParams } from "react-router-dom";
import useGet from "../hooks/useGet";
import SwiperPage from "../components/SwiperPage/SwiperPage";
import AllStars from "./image/Star.svg"
import { PiShoppingCartLight } from "react-icons/pi";

const SinglePage = () => {
  const { id } = useParams("id");
  const { data } = useGet({ url: "products", id: id });
  const singleProducts = data?.data;
  return (
    <section>
      <div className="container mx-auto px-5">
        <div className="flex justify-center">
          <div className="flex justify-between max-w-6xl  w-full gap-10 px-10 bg-white border border-[#E4E7E9] py-5 shadow-[0_8px_40px_0px_#0000001F] rounded-xs">
            {/** Product image */}
            <div>
              <SwiperPage images={singleProducts?.images} />
            </div>


            {/**Product about */}
            <div className="w-full">
              <div className="flex gap-2">
                <img src={AllStars} alt="" />
                <p className="text-[18px] font-semibold text-[#191C1F]">{singleProducts?.rating} <span className="text-[18px] font-semibold text-[#191C1F]">Star Rating <span className="text-[18px] text-[#5F6C72] font-normal">(21,671 User feedback)</span></span></p>
              </div>
              <p className="text-[24px] text-[#191C1F] font-normal mt-2">{singleProducts?.title}</p>
              
              <div className="">
                <div className="flex items-center justify-between">
                  <div className=" mt-2">
                  <p className="text-[#5f6c72] text-[18px] font-normal">{/**#5f6c72 */}
                  Sku: <span className="text-[#000000] text-[18px] font-semibold">{singleProducts?.sku}</span>
                </p>
                <p className="text-[#5f6c72] text-[18px] font-normal">
                  Brand: <span className="text-[#000000] text-[18px] font-semibold">{singleProducts?.brand}</span>
                </p>
                
                </div>
                <div className=" mt-2">
                  <p className="text-[#5f6c72] text-[18px] font-normal">
                  Avialability: <span className="text-[#2db224] text-[18px] font-semibold">{singleProducts?.availabilityStatus}</span>
                </p>
                <p className="text-[#5f6c72] text-[18px] font-normal">
                  Category: <span className="text-[#000000] text-[18px] font-semibold">{singleProducts?.category}</span>
                </p>
                </div>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <div className="flex items-center gap-3">
                    <p className="text-[28px] text-[#2DA5F3] font-semibold">${(singleProducts?.price - (singleProducts?.price * (singleProducts?.discountPercentage / 100))).toFixed(2)}</p>
                      <p className="line-through text-[22px] text-[#77878F] font-normal">${(singleProducts?.price)?.toFixed(2)}</p>
                  </div>
                  <p className="text-[18px] text-[#191C1F] font-normal bg-[#EFD33D] px-2.5 py-1.25 rounded-xxs">{(singleProducts?.discountPercentage)}% OFF  </p>
                </div>
                <div className="flex items-center justify-between mt-5 gap-5">
                  <button className="flex h-14 items-center cursor-pointer justify-center gap-2 py-3  text-[20px] bg-[#FA8232] rounded-[3px] px-8 text-white w-full  ">ADD TO CART 
                    <PiShoppingCartLight className="h-8 w-8"/>
                  </button>
                  <Link to={"/cart"} className="flex max-w-60 h-14 items-center justify-center gap-2 py-3  text-[20px] text-[#FA8232] border-2 border-[#FA8232] rounded-[3px] px-8 bg-white  w-full  ">BUY NOW
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>




            {/**All comments  */}
        <div className="comment mt-20">
          {singleProducts?.reviews?.map((el , i) => (
            <div key={i} className="flex justify-center">
              <div className="bg-white border w-full max-w-8xl  border-[#E4E7E9] mt-5 px-5 py-5 shadow-[0_8px_40px_0px_#0000001F] rounded-xs">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-10">
                    <p className="text-gray-800">
                      Name:{" "}
                      <span className="text-gray-500">{el.reviewerName}</span>{" "}
                    </p>
                    <p className="text-gray-800">
                      Email:{" "}
                      <span className="text-gray-500">{el.reviewerEmail}</span>
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <p className="text-gray-800">Rating:</p>
                    <p className="text-amber-600">{el.rating}</p>
                  </div>
                </div>
                <div className="flex items-center ">
                  <p className="text-gray-800 ml-30 mt-5">Comment:</p>
                  <p className="text-[#FF7010] ml-2 mt-5">{el.comment}</p>
                </div>
                <div className="flex justify-end items-center gap-2">
                  <p>Date:</p>
                  <p className="text-[14px] text-gray-500">{el.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SinglePage;