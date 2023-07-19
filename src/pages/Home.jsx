import React from 'react'
import { Navbar } from '../component/Navbar/Navbar'
import Footer from '../component/Footer/Footer'

import { Header } from '../component/Header/Header'
import { Section1 } from '../component/Section1/Section1'
import { Sections2 } from '../component/Sections2/Sections2'
export const Home = () => {

    return (
        <div>
            <Navbar />
            <Header />
            <Section1 />
            <Sections2 />
            <Footer />
        </div>
    )
}
