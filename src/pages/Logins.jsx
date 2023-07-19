import React from 'react'
import { Navbar } from '../component/Navbar/Navbar'
import Footer from '../component/Footer/Footer'
import { Login } from '../component/Login/Login'
export const Logins = () => {
    return (
        <div>
            <Navbar/>
            <Login/>
            <Footer/>           
        </div>
    )
}
