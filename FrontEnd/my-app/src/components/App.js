// shortcut type rfc and enter

import React from 'react'
import Home from './Home'
import Header from './Header'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'


export default function App() {
  return (
    <div>
      {/* the below order you follow here,same order will displayed in webpage */}
      {/* if you write below things by suggestion it will automatically write import for above option */}
      <Header/>
      {/* <Home/> */}
      <Outlet />

      <Footer/>
    </div>
  )
}
