import React from 'react';
import ProductCart from '../ProductCart/ProductCart';
import { product } from '../../../product';
import logo from '../../../Assets/images/logo.jpeg'

function Home() {
  return (
   <>
   <div>
    <img src={logo} className='w-screen object-center object-scale-down bg-[#f9f6f0] h-[456px]'/>
   </div>

  
  <div className="mt-10 text-center ">
   
   


  <div className='mx-20'>
  <p className='text-3xl font-bold text-[#4b5b1f]'>Our Products</p>
    <div className="flex justify-center">
  <hr className="mt-2 w-32 border-2 border-amber-300/60" />
  </div>

        <div className='grid lg:grid-cols-4 md:grid-cols-3 gap-y-10  sm:grid-cols-2 gap-3 my-10 border-none '>
            {product.map((products, key) => 
                <ProductCart key={key} data={products}/>
            )}
        
    </div>
</div>
 


 



  </div>

 

  </>
  )
}

export default Home;