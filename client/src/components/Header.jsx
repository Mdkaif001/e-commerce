import React from 'react'
import Logo from './Logo'
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='h-16 shadow-md'>
      <div className='container mx-auto h-full flex items-center px-4 justify-between'>
            <div>
                <Link to={"/"}>
                <Logo h={60} w={50}/>
                </Link>
            </div>
            <div className='flex items-center'>
                <input type='text' placeholder='Search product here...'/>
                <div>
                    <CiSearch/>
                </div>
            </div>
            <div className='flex items-center'>
               <div>
               <FaUserCircle/>
               </div>
               <div>
                <span><FaShoppingCart/></span>
                <div>
                    <p className='text-xs'>
                        0
                    </p>
                </div>
               </div>
               <div>
                <button>
                    <Link to={'/sign-in'}>
                    Login
                    </Link>
                </button>
               </div>
            </div>
      </div>
    </header>
  )
}

export default Header
