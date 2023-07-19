import React from 'react'
import { Navbar } from '../component/Navbar/Navbar'
import { Productview } from '../component/View_product/Productview'
import Footer from '../component/Footer/Footer'

export const View = () => {
    return (
        <div>
            <Navbar />
            <Productview />
            <Footer />
        </div>
    )
}
