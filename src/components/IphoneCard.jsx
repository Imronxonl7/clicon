import React from 'react'
import { GoArrowRight } from 'react-icons/go'

const IphoneCard = ({el}) => {
  return (
    <div>
                        {el.discountPercentage > 0 ? (
                          <p className="text-[14px] text-[#191C1F] font-normal right-6 top-6 absolute z-1 bg-[#EFD33D] px-2.5 py-1.25 rounded-xxs">
                            {el?.discountPercentage}% OFF{" "}
                          </p>
                        ) : (
                          ""
                        )}
                        <div className="p-10">
                          <p className="text-[14px] text-[#EBC80C] font-medium">
                            Summer Sales
                          </p>
                          <p className="text-[24px] text-white font-semibold mt-2 line-clamp-2">
                            {el.title}
                          </p>
                          <button className="w-39 h-12 flex items-center rounded-xxs mt-5 justify-center gap-2 bg-[#FA8232] text-white text-[14px] font-bold">
                            SHOP NOW
                            <GoArrowRight className="w-5 h-5" />
                          </button>
                        </div>
                        <img
                          className="w-55 absolute right-0 bottom-0"
                          src={el.thumbnail}
                          alt=""
                        />
                      </div>
  )
}

export default IphoneCard