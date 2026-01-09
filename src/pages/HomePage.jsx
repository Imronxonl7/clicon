import React from "react";
import useGet from "../hooks/useGet";
import { GoArrowRight } from "react-icons/go";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { BsFillCartPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import Card from "../components/Card";

const HomePage = () => {
  const { data } = useGet({ url: "products" });
  const products = data?.data?.products;
  const initialProducts = products?.slice(products.length - 30 , products.length - 26)
  const secondinitialProducts = products?.slice(products.length - 25 , products.length - 21)

  return (
    <section>
      <div className="container mx-auto px-5">
        <div className="flex items-center justify-between">
          <h1 className="text-[#191C1F] text-[24px] font-semibold">
            Best Deals
          </h1>
          <div className="text-[#2DA5F3] flex items-center gap-2 text-[14px] font-semibold">
            <p className="">Browse All Product</p>
            <GoArrowRight className="w-5 h-5" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center ">
          <div className="flex -mx-4 mt-5">
          {initialProducts?.map((el, i) => (
           <Card el={el} i={i}/>
          ))}
        </div>
        <div className="flex -mx-4">
          {secondinitialProducts?.map((el, i) => (
           <Card el={el} i={i}/>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
