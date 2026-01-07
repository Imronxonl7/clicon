import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useGet = ({url , id = ""}) => {
    const [loading , setLoading] = useState(true)
    const [data , setData] = useState([])
    async function getAllData() {
        try {
            let res = await axios.get(`https://dummyjson.com/${url}/${id}`)
            setData(res)
        } catch (error) {
            console.log(error);
        }finally{
            setLoading(false)
        }
    }
    useEffect(() => {
        getAllData()
    } , [url , id])
  return {loading , setLoading , data , setData}
}

export default useGet