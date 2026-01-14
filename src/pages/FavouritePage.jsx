import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContextCard } from "../context/CartContext";
import { LanguageContext } from "../context/Language";
import LikeProduct from "../components/LikeProducts";

const FavouritePage = () => {
  const { like } = useContext(CartContextCard);
  const {changeLanguage} = useContext(LanguageContext)
  console.log(like);

  return (
    <section>
      <div className="container mx-auto px-5">
        <div className="flex items-center justify-center flex-wrap gap-5">
         {like?.length === 0 ? (
          <div className="flex items-center justify-center">
            <div className="flex flex-col items-center justify-center my-30">
            <img className="w-50 h-50" src="	https://uzum.uz/static/img/hearts.cf414be.png" alt="" />
            <p className="text-[18px] mt-10 text-[#475156] font-semibold">
              {changeLanguage.emptyProduct}
            </p>
          </div>
          </div>
        ) : (
          like?.map((el) => 
            
               <LikeProduct el={el}/>
            
            
          )
        )}
        </div>
        <Link to={"/products"} className="text-amber-600 mt-10">
          Barcha mahsulotlar
        </Link>
      </div>
    </section>
  );
};

export default FavouritePage;
