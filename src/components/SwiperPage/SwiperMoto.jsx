import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import { GoArrowRight } from "react-icons/go";
import { Link } from "react-router-dom";

export default function SwiperMoto({ motoProduct }) {
  return (
    <>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Navigation, Pagination]}
        className="moto"
      >
        {motoProduct?.map((el) => (
          <SwiperSlide className="imm">
            <div className="w-full relative h-full">
              <p className="fixed z-4 w-25.25 h-25 flex items-center justify-center p-15 bg-[#2DA5F3] right-15 top-10 border-4 border-white rounded-full text-white text-[22px] font-semibold">
                ${el.price}
              </p>
              <div className="fixed z-2 p-20">
                <div className="flex bg-[#F2F4F5] items-center gap-3">
                  <p className="border-0.5 border-[#2DA5F3] bg-[#2DA5F3] w-6 h-0.5"></p>
                  <p className="text-[14px] text-[#2484C2] font-semibold">
                    {el.brand}
                  </p>
                </div>

                <p className="text-[48px] bg-[#F2F4F5] w-117.5  text-start text-[#191C1F] font-semibold">
                  {el.title}
                </p>
                <p className="texr-[18px] bg-[#F2F4F5] text-start text-[#475156] font-normal max-w-89 line-clamp-2 mt-2">
                  {el.description}
                </p>

                <Link to={"/cart"} className="w-47.75 h-14 flex items-center rounded-xxs mt-5 justify-center gap-2 bg-[#FA8232] text-white text-[14px] font-bold">
                  SHOP NOW
                  <GoArrowRight className="w-6 h-6" />
                </Link>
              </div>
              <img className="image w-92 h-102" src={el.thumbnail} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
