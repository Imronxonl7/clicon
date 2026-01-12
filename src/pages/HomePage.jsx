import React, { useContext } from "react";
import useGet from "../hooks/useGet";
import { GoArrowRight } from "react-icons/go";
import Card from "../components/Card";
import SingleProduct from "../components/SingleProduct";
import SwiperMoto from "../components/SwiperPage/SwiperMoto";
import IphoneCard from "../components/IphoneCard";
import AirPodsCard from "../components/AirPodsCard";

const HomePage = () => {
  const { data } = useGet({ url: "products?limit=194" });
  const products = data?.data?.products;
  console.log(products);

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
        <div className="flex items-start gap- justify-center">
          <SwiperMoto motoProduct={motoProduct} />
          <div className="flex flex-col items-start  gap-11">
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
        <div className="flex items-center justify-between">
          <h1 className="text-[#191C1F] text-[24px] font-semibold">
            Best Deals
          </h1>
          <div className="text-[#2DA5F3] flex items-center gap-2 text-[14px] font-semibold">
            <p className="">Browse All Product</p>
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
