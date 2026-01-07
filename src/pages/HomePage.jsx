import React from "react";
import useGet from "../hooks/useGet";
import { GoArrowRight } from "react-icons/go";

const HomePage = () => {
  const { data, loading } = useGet({url:"products"});
  const products = data?.data?.products;
  

  return (
    <section>
      <div className="container mx-auto px-5">
        <div className="flex items-center justify-between">
          <h1 className="text-[#191C1F] text-[24px] font-semibold">Best Deals</h1>
          <div className="text-[#2DA5F3] flex items-center gap-2 text-[14px] font-semibold">
            <p className="">Browse All Product</p>
            <GoArrowRight className="w-5 h-5"/>
          </div>
        </div>
        <div className="grid grid-cols-5 gap-0 -mx-4 mt-5">
          {products?.map((el , i ) => (
          <div key={i}  className="w-62 h-74 border border-[#E4E7E9] p-4">
            <a href={`/cart/${el.id}`}>
                <img className="w-54 h-47 object-cover" src={el.thumbnail} alt={el.title} />
            </a>
            <p className="text-[#191C1F] line-clamp-2 text-[14px] font-normal">
              {el.description}
            </p>
            <p className="text-[14px] text-[#2DA5F3] font-semibold">$ {el.price}</p>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
};

export default HomePage;
