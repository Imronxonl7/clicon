import React, { memo, useContext } from 'react'
import Icon from "./pictures/IconOrange.svg"
import { LanguageContext } from '../context/Language'
import { GoArrowRight } from 'react-icons/go'
import GooglePlay from "./pictures/IconGoglePlay.svg"
import AppleStore from "./pictures/IconAppleStore.svg"
const Footer = () => {
  const {changeLanguage} = useContext(LanguageContext)
  const linkStyle = `
  group relative inline-block
  text-[#929FA5] text-[14px] font-medium
  transition-all duration-500 ease-out
  hover:text-white
  hover:translate-x-2
`;

const underlineStyle = `
  absolute left-0
  h-[2.5px] bg-[#EBC80C]
  w-0 origin-left
  transition-all duration-500 ease-out
  group-hover:w-20
`;
  return (
    <footer className='bg-[#191C1F]'>
      <div className="container mx-auto py-18 px-25">
        <div className='dad flex justify-start gap-30 '>
          <div className='child'>
            <div className='flex gap-3 items-center'> 
              <img src={Icon} alt="" />
              <p className='text-[32px] font-bold text-white'>CLICON</p>
            </div>
            <div className='flex flex-col gap-3 mt-6'>
              <div>
              <p className='text-[#77878F] text-[14px] font-normal'>{changeLanguage.customerSupports}</p>
              <p className='text-white font-medium text-[18px]'>(629) 555-0129</p>
            </div>
            <div>
              <p className='text-[#77878F] text-[14px] font-normal'>{changeLanguage.address1} </p>
              <p className='text-[#77878F] font-normal text-[14px] '>{changeLanguage.address2}</p>
            </div>
            <p className='text-[16px] text-white font-medium'>{changeLanguage.email}</p>
            </div>
          </div>
          <div className="child2 flex items-center gap-17">
            <div className="baby1 flex flex-col gap-2">
              <p className='text-[16px] text-white font-medium'>{changeLanguage.topCategory}</p>
              <div className='flex flex-col gap-1'>
         
                  <p className={linkStyle}>{changeLanguage.topCategory1}
                  <span className={underlineStyle}></span></p>
                  <p className={linkStyle}>{changeLanguage.topCategory2}
                    <span className={underlineStyle}></span>
                  </p>
                  <p className={linkStyle}>{changeLanguage.topCategory3}
                    <span className={underlineStyle}></span>
                  </p>
                  <p className={linkStyle}>{changeLanguage.topCategory4}
                    <span className={underlineStyle}></span>
                  </p>
                  <p className={linkStyle}>{changeLanguage.topCategory5}
                    <span className={underlineStyle}></span>
                  </p>
                  <p className={linkStyle}>{changeLanguage.topCategory6}
                    <span className={underlineStyle}></span>
                  </p>
                  <div className='text-[#EBC80C] flex items-center gap-2 text-[14px] font-medium'>
                    {changeLanguage.browseAllProduct}
                    <GoArrowRight className='w-5 h-5' />
                    </div>
                
              </div>
            </div>
            <div className="baby2 flex flex-col gap-2">
              <p className='text-[16px] text-white font-medium'>{changeLanguage.quickLinksTitle}</p>
              <div className='flex flex-col gap-1'>
                  <p className={linkStyle}>{changeLanguage.quickLink1}
                    <span className={underlineStyle}></span>
                  </p>
                  <p className={linkStyle}>{changeLanguage.quickLink2}
                    <span className={underlineStyle}></span>
                  </p>
                  <p className={linkStyle}>{changeLanguage.quickLink3}
                    <span className={underlineStyle}></span>
                  </p>
                  <p className={linkStyle}>{changeLanguage.quickLink4}
                    <span className={underlineStyle}></span>
                  </p>
                  <p className={linkStyle}>{changeLanguage.quickLink5}
                    <span className={underlineStyle}></span>
                  </p>
                  <p className={linkStyle}>{changeLanguage.quickLink6}
                    <span className={underlineStyle}></span>
                  </p>
                  <p className={linkStyle}>{changeLanguage.quickLink7}
                    <span className={underlineStyle}></span>
                  </p>
                  
                
              </div>
            </div>
          </div>
          <div className="child3 flex gap-10">
            <div className=' flex flex-col items-start gap-2'>
              <p className='text-[16px] text-white font-medium'>{changeLanguage.downloadApp}</p>
            <div className='flex flex-col gap-2.5'>
              <button className='flex items-center w-44 h-17.25 gap-3 py-4 px-5 bg-[#303639] rounded-[3px]'>
                <img className='w-8 h-8' src={GooglePlay} alt="" />
                <div className='flex flex-col items-start'>
                  <p className='text-[11px] text-white font-normal'>{changeLanguage.getItNowGoogle}</p>
                  <p className='text-white text-[14px] font-semibold'>Google Play</p>
                </div>
              </button>
              <button className='flex items-center w-44 h-17.25 gap-3 py-4 px-5 bg-[#303639] rounded-[3px]'>
                <img className='w-8 h-8' src={AppleStore} alt="" />
                <div className='flex flex-col items-start'>
                  <p className='text-[11px] text-white font-normal'>{changeLanguage.getItNowApple}</p>
                  <p className='text-white text-[14px] font-semibold'>App Store</p>
                </div>
              </button>
            </div>
            </div>
            <div className='flex flex-col items-start gap-2'>
              <p className='text-[16px] text-white font-medium '>{changeLanguage.popularTagTitle}</p>
              <div className='w-78 flex flex-wrap gap-2'>
                  <button className='border border-[#303639] rounded-xxs px-3 py-1.5 text-[14px] text-white font-medium hover:border-white duration-300 transition-all hover:bg-[#303639]'>{changeLanguage.popularTag1}</button>
                  <button className='border border-[#303639] rounded-xxs px-3 py-1.5 text-[14px] text-white font-medium hover:border-white duration-300 transition-all hover:bg-[#303639]'>{changeLanguage.popularTag2}</button>
                  <button className='border border-[#303639] rounded-xxs px-3 py-1.5 text-[14px] text-white font-medium hover:border-white duration-300 transition-all hover:bg-[#303639]'>{changeLanguage.popularTag3}</button>
                  <button className='border border-[#303639] rounded-xxs px-3 py-1.5 text-[14px] text-white font-medium hover:border-white duration-300 transition-all hover:bg-[#303639]'>{changeLanguage.popularTag4}</button>
                  <button className='border border-[#303639] rounded-xxs px-3 py-1.5 text-[14px] text-white font-medium hover:border-white duration-300 transition-all hover:bg-[#303639]'>{changeLanguage.popularTag5}</button>
                  <button className='border border-[#303639] rounded-xxs px-3 py-1.5 text-[14px] text-white font-medium hover:border-white duration-300 transition-all hover:bg-[#303639]'>{changeLanguage.popularTag6}</button>
                  <button className='border border-[#303639] rounded-xxs px-3 py-1.5 text-[14px] text-white font-medium hover:border-white duration-300 transition-all hover:bg-[#303639]'>{changeLanguage.popularTag7}</button>
                  <button className='border border-[#303639] rounded-xxs px-3 py-1.5 text-[14px] text-white font-medium hover:border-white duration-300 transition-all hover:bg-[#303639]'>{changeLanguage.popularTag8}</button>
                  <button className='border border-[#303639] rounded-xxs px-3 py-1.5 text-[14px] text-white font-medium hover:border-white duration-300 transition-all hover:bg-[#303639]'>{changeLanguage.popularTag9}</button>
                  <button className='border border-[#303639] rounded-xxs px-3 py-1.5 text-[14px] text-white font-medium hover:border-white duration-300 transition-all hover:bg-[#303639]'>{changeLanguage.popularTag10}</button>
                  <button className='border border-[#303639] rounded-xxs px-3 py-1.5 text-[14px] text-white font-medium hover:border-white duration-300 transition-all hover:bg-[#303639]'>{changeLanguage.popularTag11}</button>
                  <button className='border border-[#303639] rounded-xxs px-3 py-1.5 text-[14px] text-white font-medium hover:border-white duration-300 transition-all hover:bg-[#303639]'>{changeLanguage.popularTag12}</button>
                  <button className='border border-[#303639] rounded-xxs px-3 py-1.5 text-[14px] text-white font-medium hover:border-white duration-300 transition-all hover:bg-[#303639]'>{changeLanguage.popularTag13}</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='shadow-[inset_0px_1px_0px_0px_#303639] bg-[#191C1F]'>
          <p className='text-[14px] text-[#ADB7BC] font-normal flex items-center justify-center py-6'>Kinbo - eCommerce Template © 2021. Design by Templatecookie</p>
      </div>
    </footer>
  )
}

const FooterMemo = memo(Footer)
export default FooterMemo