import React from 'react';

import { Link } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../../../store/cart';


function ProductCart(props) {

    const {id , name , image ,price, slug} = props.data;
    const carts = useSelector(store => store.cart.items)
    console.log(carts)
    const dispatch = useDispatch();
    const handleAddToCart=()=>{
     dispatch(addToCart({
        productId : id,
        quantity: 1
     }))
    }
  return (
    
    <div className='bg-white  border-2 p-5 rounded-xl hover:scale-105 hover:translate-y-4 hover:ease-in-out duration-300 shadow-gray-200 shadow-2xl mx-3 transition-transform'>
    <Link to={slug}>
        <img src={image} alt='' className='w-full border-none mt-5 h-34 rounded-lg object-contain ' />
    </Link>
    <h3 className='text-2xl text-gray-500 py-3 text-center font-medium my-5'>{name}</h3>
    <div className='flex justify-between items-center my-5 '>
        <p>
           <span className='text-gray-500'> $</span> <span className='text-xl text-gray-500 font-medium'>{price}</span>
        </p>
        <button className='bg-[#4b5b1f] p-2 rounded-md text-medium text-[#f9f6f0]  flex gap-2'onClick={handleAddToCart} >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-[#f9f6f0]" fill="currentColor" viewBox="0 0 24 24">
  <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 
  0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 
  2-2-.9-2-2-2zM7.16 14.26l.03-.12L7.9 12h7.45c.75 
  0 1.41-.41 1.75-1.03l3.58-6.49a.996.996 
  0 0 0-.87-1.48H5.21l-.94-2H1v2h2l3.6 
  7.59-1.35 2.44C4.52 14.37 5.48 16 7 16h12v-2H7.42c-.14 
  0-.25-.11-.26-.24z"/>
</svg>

            Add To Cart
        </button>
    </div>
</div>
  )
}

export default ProductCart