import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/layout/Layout'
import HomePage from './pages/HomePage'
import FilterPageMemo from './pages/FilterPage';
const ProductsPage = React.lazy(() => import("./pages/ProductsPage"));
const NeedHelpMemo = React.lazy(() => import("./pages/NeedHelpPage"));
const CustomerSupportPageMemo = React.lazy(() => import("./pages/CustomerSupportPage"));
const ComparePageMemo =  React.lazy(() => import("./pages/ComparePage"));
const TrackOrderPageMemo = React.lazy(() => import("./pages/TrackOrderPage"))
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
        <Route path='products' element={<ProductsPage/>}/>
        <Route path='trackOrder' element={<TrackOrderPageMemo/>}/>
        <Route path='needHelp' element={<NeedHelpMemo/>}/>
        <Route path='customerSupport' element={<CustomerSupportPageMemo/>}/>
        <Route path='compare' element={<ComparePageMemo/>}/>
        <Route path='filter' element={<FilterPageMemo/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App