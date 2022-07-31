import React from 'react'
import '../styles/components.css';
import {Link} from 'react-router-dom';

//? components
import Btn from './Btn'

function Navbar() {
    return (
        <div className='navbar'>
            <Link to='/' style={{textDecoration: 'none'}}><h1>
                <img src='./img/logo.png'/>
                METASPACE
            </h1>
            </Link>

            <div className='flex'>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/'>About</Link></li>
                    <li><Link to={'/pricing'}>Pricing</Link></li>
                </ul>

                <Link to={'/signup'}> <Btn text='Sign Up'/> </Link>
                <Link to={'/login'}> <Btn text='Log In'/> </Link>
            </div>
        </div>
    )
}

export default Navbar