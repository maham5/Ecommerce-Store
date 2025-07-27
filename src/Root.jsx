import React from 'react'
import { Outlet } from 'react-router';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import CartTab from './components/CartTab/CartTab';


function Root() {
  return (
  <>
  <div >
    <main >
  <Header/>
  <Outlet/>
  </main>
  <CartTab/>
  <Footer/>
  </div>
  </>
  )
}

export default Root