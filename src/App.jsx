import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
const CartPage = React.lazy(() => import("./pages/CartPage"));
const FavouritePage = React.lazy(() => import("./pages/FavouritePage"));
const RegisterPage = React.lazy(() => import("./pages/RegisterPage"));
const SinglePage = React.lazy(() => import("./pages/SinglePage"));


const App = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Layout/>}>
        <Route path='/' element={<HomePage/>}/>
        <Route path='cart' element={<CartPage/>}/>
        <Route path='cart/:id' element={<SinglePage/>}/>
        <Route path='like' element={<FavouritePage/>}/>
        <Route path='register' element={<RegisterPage/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App