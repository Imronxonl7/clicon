import React, { useContext } from "react";
import useGet from "../hooks/useGet";
import { GoArrowRight } from "react-icons/go";
import Card from "../components/Card";
import SingleProduct from "../components/SingleProduct";
import SwiperMoto from "../components/SwiperPage/SwiperMoto";
import IphoneCard from "../components/IphoneCard";
import AirPodsCard from "../components/AirPodsCard";
import Package from "./image/Package.svg";
import Trophy from "./image/Trophy.svg"
import CreditCard from "./image/CreditCard.svg"
import HeadPhones from "./image/Headphones.svg"
import { Link } from "react-router-dom";

const HomePage = () => {
  const { data } = useGet({ url: "products?limit=194" });
  const products = data?.data?.products;
  const initialProducts = products?.slice(
    products.length - 29,
    products.length - 27
  );
  const twoProducts = products?.slice(
    products.length - 166,
    products.length - 164
  );
  const secondinitialProducts = products?.slice(
    products.length - 96,
    products.length - 92
  );
  const singleProduct = products?.slice(
    products.length - 71,
    products.length - 70
  );
  const motoProduct = products?.slice(
    products.length - 82,
    products.length - 77
  );
  // console.log(motoProduct);

  return (
    <section>
      <div className="container mx-auto px-5">
        <div className="flex w-full gap-11 items-start justify-center">
          <SwiperMoto motoProduct={motoProduct} />
          <div className="flex flex-col items-start justify-center  gap-11">
            <div className="w-126 h-62 bg-[#191C1F] relative rounded-[6px] ">
              {products
                ?.filter((item) => item.id === 123)
                ?.map((el , i) => (
                  <IphoneCard key={i} el={el}/>
                ))}{" "}
            </div>
            <div className="w-126 h-62  bg-[#F2F4F5] relative rounded-[6px] ">
              {products
                ?.filter((item) => item.id === 101)
                ?.map((el , i) => (
                  <AirPodsCard key={i} el={el}/>
                ))}{" "}
            </div>
          </div>
        </div>
          <div className="flex items-center justify-center pb-20">
            <div className="w-full flex items-center justify-center gap-10 h-27 border border-[#E4E7E9] rounded-[6px]">
            <div className="div1 flex  items-center gap-5">
              <img src={Package} alt="" />
            <div className="flex flex-col pr-10 items-start">
                <p className="text-[14px] text-[#191C1F] font-medium">Fasted Delivery</p>
                <p className="text-[14px] text-[#5F6C72] font-normal">Delivery in 24/H</p>
            </div>

            </div>
            <div className="div2 flex border-l border-[#E4E7E9] px-15 items-center gap-5">
              <img src={Trophy} alt="" />
            <div className="flex flex-col items-start">
                <p className="text-[14px] text-[#191C1F] font-medium">24 Hours Return</p>
                <p className="text-[14px] text-[#5F6C72] font-normal">100% money-back guarantee</p>
            </div>
            </div>
            <div className="div3 flex border-l border-[#E4E7E9] px-15 items-center gap-5">
              <img src={CreditCard} alt="" />
            <div className="flex flex-col items-start">
                <p className="text-[14px] text-[#191C1F] font-medium">Secure Payment</p>
                <p className="text-[14px] text-[#5F6C72] font-normal">Your money is safe</p>
            </div>
            </div>
            <div className="div4 flex border-l border-[#E4E7E9] px-15  items-center gap-5">
              <img src={HeadPhones} alt="" />
            <div className="flex flex-col items-start">
                <p className="text-[14px] text-[#191C1F] font-medium">Support 24/7</p>
                <p className="text-[14px] text-[#5F6C72] font-normal">Live contact/message</p>
            </div>
            </div>
        </div>
          </div>
        <div className="flex items-center justify-between">
          <h1 className="text-[#191C1F] text-[24px] font-semibold">
            Best Deals
          </h1>
          <div className="text-[#2DA5F3] flex items-center gap-2 text-[14px] font-semibold">
            <Link to={"/filter"} className="">Browse All Product</Link>
            <GoArrowRight className="w-5 h-5" />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <div>
            {singleProduct?.map((el, i) => (
              <SingleProduct el={el} i={i} />
            ))}
          </div>

          <div className="flex flex-col items-center justify-center ">
            <div className="flex">
              <div className="flex  mt-5">
                {initialProducts?.map((el, i) => (
                  <Card el={el} i={i} />
                ))}
              </div>
              <div className="flex  mt-5">
                {twoProducts?.map((el, i) => (
                  <Card el={el} i={i} />
                ))}
              </div>
            </div>
            <div className="flex">
              {secondinitialProducts?.map((el, i) => (
                <Card el={el} i={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
