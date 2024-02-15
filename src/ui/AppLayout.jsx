import React from 'react'
import Header from './Header'
// import Cart from '../features/cart/Cart'
import CartOverview from '../features/cart/CartOverview'
import { Outlet, useNavigation } from 'react-router-dom'
import Loader from './loader'
function AppLayout() {
  const navigation=useNavigation()
  const isLoading=navigation.state==="loading"
  return (
    <div className='layout grid h-screen grid-rows-[auto_1fr_auto]'>
      {isLoading && <Loader />}
        <Header />

      <div className='overfolow-scroll'>
        <main className=' max-w-2xl mx-auto '>
            <Outlet/>
        </main>
        </div>
        <CartOverview />
    </div>
  )
}

export default AppLayout