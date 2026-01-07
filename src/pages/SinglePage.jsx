import React from 'react'
import { useParams } from 'react-router-dom'
import useGet from '../hooks/useGet'
import SwiperPage from '../components/SwiperPage/SwiperPage'

const SinglePage = () => {
  const {id} = useParams("id")
  const {data} = useGet({url:"products" , id:id})
  const singleProducts = data?.data
  return (
    <section>
      <div className="container mx-auto px-5">
        <div className='bg-white border border-[#E4E7E9] py-5 shadow-[0_8px_40px_0px_#0000001F] rounded-xs'>
          <div className='grid grid-cols-2'>
          <div>
            <SwiperPage images={singleProducts?.images}/>
          </div>
          <div>
            <p>rating</p>
            <p>Title: {singleProducts?.title}</p>
          </div>
        </div>
        </div>
      </div>
    </section>
  )
}

export default SinglePage