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
    const increase = (id) => {
        setCart((prev) => {
            return prev.map((el) => {
                if(el.id === id.id){
                    return {...el , qty:el.qty + 1}
                }else{
                    return el
                }
            })
        })
    } 
    const decrease = (id) => {
        setCart((prev) => {
            const cartItem = prev?.find((el) => el.id === id.id) 
                if(cartItem?.qty > 1) {
                    return prev?.map((itemId) => {
                        if(itemId.id === id.id){
                            return {...itemId , qty:itemId.qty - 1}
                        }else{
                            return itemId
                        }
                    })
                }else{
                    return prev?.filter((el) => el.id !== cartItem.id)
                }
            
        })
    }
  return (
    <CartContextCard.Provider value={{cart , setCart , like , setLike , removeToLike , addToLike , addToCart , removeToCart , increase , decrease}}>
        {children}
    </CartContextCard.Provider>
  )
}

export default CartContext