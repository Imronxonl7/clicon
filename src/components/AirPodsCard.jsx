import React from 'react'
import { GoArrowRight } from 'react-icons/go'
import { Link } from 'react-router-dom'

const AirPodsCard = ({el}) => {
  return (
    <div className="flex items-center">
                        <img className="w-55  " src={el.thumbnail} alt="" />
                        <div className="p-10">
                          <p className="text-[24px] text-[#191C1F] font-semibold max-w-43  line-clamp-2">
                            {el.title}
                          </p>
                          <p className="text-[18px] text-[#2DA5F3] font-semibold mt-2">
                            ${el.price} USD
                          </p>
                          <Link to={"/cart"} className="w-39 h-12 flex items-center rounded-xxs mt-5 justify-center gap-2 bg-[#FA8232] text-white text-[14px] font-bold">
                            SHOP NOW
                            <GoArrowRight className="w-5 h-5" />
                          </Link>
                        </div>
                      </div>
  )
}

export default AirPodsCard