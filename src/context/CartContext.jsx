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
    const addToLike = (id) => {
        setLike((prev)=> {
            return [...prev , id]
        })
    }
    const removeToLike = (id) => {
        setLike((prev) => {
            return prev?.filter((item) => item !== id)
        })
    }
    
  return (
    <CartContextCard.Provider value={{cart , setCart , like , setLike , removeToLike , addToLike , addToCart , removeToCart}}>
        {children}
    </CartContextCard.Provider>
  )
}

export default CartContext