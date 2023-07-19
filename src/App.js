import React from 'react'
import { Navbar } from './component/Navbar/Navbar'
import { Header } from './component/Header/Header'
import { Section1 } from './component/Section1/Section1'
import { Sections2 } from './component/Sections2/Sections2'
import Footer from './component/Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import { Home } from './pages/Home'
import { Productmodal } from './pages/Productmodal'
import { Reg } from './pages/Reg'
import { Logins } from './pages/Logins'
import { View } from './pages/View'
import {Productview}  from './component/View_product/Productview'
import { Adminlogin } from './component/admin/Adminlogin'
import { Admin_panel } from './component/admin/Admin_panel'
import { GET } from './component/admin/GET'
import Korzina from './pages/Korzina'
import { About } from './component/About/About'
import { Help } from './component/Help/Help'


export const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/product' element={<Productmodal/>} />
        <Route path='/regist' element={<Reg/>} />
        <Route path='/login' element={<Logins/>} />
        <Route path='/korzina' element={<Korzina/>} />
        <Route path='/:id' element={<View/>} />
        <Route path='/adminlogin' element={<Adminlogin/>} />
        <Route path='/admin' element={<Admin_panel/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/help' element={<Help/>} />
      </Routes>

    </div>
  )
}
