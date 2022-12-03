import React from 'react'
import Apidata from './NavComponents/Apidata'
import { Link } from 'react-router-dom';
import './Nav.css'
const Nav = () => {
    return (
        <div className='nav'>
         <div className="homepage">
            <Link to = '/'><button>Go To HomePage</button></Link>
        </div>
           <Apidata />
        </div>
    )
}

export default Nav
