import React, { createContext, useState } from 'react'



export const CartContextCard = createContext()
const CartContext = ({children}) => {
    const [cart , setCart] = useState([])
    const [like , setLike] = useState([])
    const addToCart = (el) => {
        setCart((prev) => {
            return [...prev , {...el , qty:1}]
        })
    }
    const removeToCart = (el) => {
        setCart((prev) => {
            return prev?.filter((item) => item.id !== el.id)
        })
    }
    const addToLike = (el) => {
        setLike((prev)=> {
            return [...prev , el]
        })
    }
    const removeToLike = (el) => {
        setLike((prev) => {
            return prev?.filter((item) => item.id !== el.id)
        })
    }
    
  return (
    <CartContextCard.Provider value={{cart , setCart , like , setLike , removeToLike , addToLike , addToCart , removeToCart}}>
        {children}
    </CartContextCard.Provider>
  )
}

export default CartContext