import React, { memo, useContext, useEffect, useState } from "react";
import useGet from "../hooks/useGet";
import { CartContextCard } from "../context/CartContext";
import FilterCard from "../components/FilterCard";
import { LanguageContext } from "../context/Language";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const FilterPage = () => {
  const [category, setCategory] = useState("");
  const { data } = useGet({ url: "products/categories" });
  const categories = data?.data;
  const { data: productsData } = useGet({ url: "products?limit=194" });
  const { changeLanguage } = useContext(LanguageContext);
  const [filterPrice , setFilterPrice] = useState([])
  const products = productsData?.data?.products;
  const filteredProductsWithCategory = products?.filter(
    (el) => el.category === category.toLocaleLowerCase(),
  );
  const [Pricevalue, setPriceValue] = React.useState([7000, 27000]);
  const handleChange = (event, newValue) => {
    setPriceValue(newValue);
  };
  const productsPrices = products?.map((el) => {
    return el?.price;
  });
  const maxPrice = Math.max(...(productsPrices ? productsPrices : []));

    const filteredProducts = products
  ?.filter(el => !category || el.category === category.toLowerCase())
  ?.filter(el => el.price >= Pricevalue[0] && el.price <= Pricevalue[1]);

  


  function filteredPrice() {
    const filteredByPrice =filterPrice?.map((el) => {
      if(el.price >= Pricevalue[0] && el.price <= Pricevalue[1]){
        return el
      }
    })
    setFilterPrice(filteredByPrice)
  }
  useEffect(() => {
    filteredPrice()
  } , [Pricevalue])

  const { cart } = useContext(CartContextCard);
  return (
    <section>
      <div className="container  mx-auto px-5">
        <div className="w-full flex justify-between">
          <aside className="flex fixed max-w-78 w-full bg-white  h-87.5   ">
            <div className="max-w-78 w-full max-h-93 h-full">
              <div className="flex items-start  flex-col border-b border-gray-300 pb-10 ">
                <p className="text-[16px] text-[#191C1F] font-medium">
                  CATEGORY
                </p>
                <ul className="mt-2 flex flex-col w-full px-2  max-h-103 h-full overflow-y-scroll">
                  {categories?.map((el) => (
                    <li className="flex gap-1 cursor-pointer">
                      <div class="flex items-center mb-4">
                        <input
                          id={el.name}
                          type="radio"
                          value={el.name}
                          name="category"
                          onChange={(e) => setCategory(e.target.value)}
                          class="w-4 h-4 text-neutral-primary  border border-default-medium  bg-neutral-secondary-medium rounded-full checked:bg-[#FA8232] checked:border-[#FA8232] focus:ring-2 focus:outline-none focus:ring-[#ffbf94] appearance-none"
                        />
                        <label
                          htmlFor={el.name}
                          class="select-none ms-2 text-sm font-medium text-heading"
                        >
                          {el.name}
                        </label>
                      </div>
                    </li>
                  ))}
                </ul>

              
              </div>
              <div className="flex items-start  flex-col border-b border-gray-300 pb-10 pt-10">
                <p className="text-[16px] text-[#191C1F] font-medium">
                  PRICE RANGE
                </p>
                <Box sx={{ width: 312 }}>
                  <Slider
                    getAriaLabel={() => "Temperature range"}
                    value={Pricevalue}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    max={Math.ceil(maxPrice)}
                  />
                </Box>
              </div>
              <div className="flex items-start  flex-col border-b border-gray-300 pb-10 ">
                <p className="text-[16px] text-[#191C1F] font-medium">
                  CATEGORY
                </p>
                <ul className="mt-2 flex flex-col w-full px-2  max-h-103 h-full overflow-y-scroll">
                  {products?.map((el) => (
                    <li className="flex gap-1 cursor-pointer">
                      <div class="flex items-center mb-4">
                        <input
                          id={el.brand}
                          type="radio"
                          value={el.brand}
                          name="category"
                          onChange={(e) => setCategory(e.target.value)}
                          class="w-4 h-4 text-neutral-primary  border border-default-medium  bg-neutral-secondary-medium rounded-full checked:bg-[#FA8232] checked:border-[#FA8232] focus:ring-2 focus:outline-none focus:ring-[#ffbf94] appearance-none"
                        />
                        <label
                          htmlFor={el.brand}
                          class="select-none ms-2 text-sm font-medium text-heading"
                        >
                          {el.brand}
                        </label>
                      </div>
                    </li>
                  ))}
                </ul>

              
              </div>
            </div>
          </aside>
          <div className="flex items-center pl-100 flex-wrap gap-7 ">
            {category ? (
              filteredProductsWithCategory.length > 0 ? (
                filteredProductsWithCategory?.map((el) => (
                  <FilterCard el={el} />
                ))
              ) : (
                <p className="text-[24px] text-[#191C1F] font-medium text-center">
                  {changeLanguage.emptyCategory}
                </p>
              )
            ) : (
              filteredProducts?.map((el) => <FilterCard el={el} />)
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const FilterPageMemo = memo(FilterPage);
export default FilterPageMemo;
