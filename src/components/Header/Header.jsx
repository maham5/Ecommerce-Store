import React, {  useEffect, useState } from 'react';
import { Link , NavLink } from 'react-router';
import iconCart from '../../Assets/images/iconCart.png'
import logo from '../../Assets/images/logo.jpeg'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Menu, X } from 'lucide-react';

import { toggleStatusTab } from '../../store/cart';


function Header() {
    const [isOpen, setisOpen] = useState(false);
  
     const toggleOpen = () => {
       setisOpen(!isOpen);
    };

    const carts = useSelector(store=>store.cart.items)

    const [total ,setTotal] =useState(0);

    const dispatch = useDispatch();

    const handleToOpenCart=()=>{
   dispatch(toggleStatusTab())
    }

  useEffect(()=>{

    let total=0;
    carts.forEach(item => total += item.quantity);
    setTotal(total);

  },[carts])
  
    return (
      <>
   <nav className='min-h-20 bg-[#4b5b1f] top-0 z-50 shadow-md w-screen'>
      <div className='mx-5 md:mx-20 flex justify-between items-center  h-full'>

        {/* Logo and Name */}
        <div className='flex items-center gap-2'>
          <img src={logo} className='w-12 h-12 rounded-full mt-3 object-contain' alt="Logo" />
          <Link to="/" className='text-2xl md:text-3xl font-bold text-[#f9f6f0]'>
            HAQ E HILAL
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          
      
          <Link to='login' className='text-white border border-white px-4 py-1 rounded hover:bg-white hover:text-[#4b5b1f] transition'>
            Login
          </Link>

          <div
            className='w-10 h-10 bg-[#f9f6f0] cursor-pointer rounded-full flex justify-center items-center relative hover:scale-105 transition'
            onClick={handleToOpenCart}
            aria-label="Open cart"
          >
            <img src={iconCart} alt="Cart" className='w-6' />
            <span className='absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex justify-center items-center'>
              {total}
            </span>
          </div>
        </div>

        {/* Mobile Toggle Button */}
        <div className="md:hidden">
          <button onClick={toggleOpen} className='text-[#f9f6f0]'>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className='md:hidden bg-[#4b5b1f] px-5 pb-4 flex flex-col gap-4'>
          <Link to="/catalogs" className='text-[#f9f6f0]'>Catalogs</Link>
          <Link to="/contact" className='text-[#f9f6f0]'>Contact Us</Link>
          <button className='text-white border border-white px-4 py-1 rounded hover:bg-white hover:text-[#4b5b1f] transition'>
            Login
          </button>
          <div
            className='w-10 h-10 bg-[#f9f6f0] cursor-pointer rounded-full flex justify-center items-center relative hover:scale-105 transition self-start'
            onClick={handleToOpenCart}
            aria-label="Open cart"
          >
            <img src={iconCart} alt="Cart" className='w-6' />
            <span className='absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 rounded-full flex justify-center items-center'>
              {total}
            </span>
          </div>
        </div>
      )}
    </nav>
</>
    );
  }

export default Header;