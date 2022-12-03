import React from 'react'
import Header from '../Components/Header'
import Nav from '../Components/Nav'
import Footer from '../Components/Footer'
import Xml from '../Posts/XmlP1'
const Post1 = () => {
    return (
        <div>
            <Header />
            <div className='container'>
                <Xml />
                <Nav />
            </div>
            <Footer />
        </div>
    )
}

export default Post1