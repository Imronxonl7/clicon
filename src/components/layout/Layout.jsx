import React from 'react'
import HeaderMemo from '../Header'
import { Outlet } from 'react-router-dom'
import FooterMemo from '../Footer'
import { ToastContainer } from 'react-toastify'

const Layout = () => {
  return (
    <>
    <HeaderMemo/>
    <main className='mt-60 mb-20'>
        <Outlet/>
        <ToastContainer />
    </main>
    <FooterMemo/>
    </>
  )
}

export default Layout