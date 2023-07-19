import React from 'react'
import { Navbar } from '../component/Navbar/Navbar'
import { Registers } from '../component/Register/Registers'
import Footer from '../component/Footer/Footer'
export const Reg = () => {
    return (
        <div>
            <Navbar/>

            <Registers/> 
            <Footer/>           
        </div>
    )
}
