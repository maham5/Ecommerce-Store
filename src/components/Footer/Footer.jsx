import React from 'react'
import { Link } from 'react-router';

export default function Footer() {
    return (
        <footer className="bg-[#4b5b1f] border-y text-white mt-10 w-screen">
           <div className='lg:flex lg:flex-row  justify-evenly    mx-4 py-10'>

    <div className='text-center' >
<h1 className='text-white lg:text-6xl text-3xl font-bold mb-4'>HaQ-E-Hilal</h1>
<p className='font-medium'>Leading the way in
excellence ingredients, trusted care</p>
    </div>
    <hr className='mt-4 '/>
    <div >
    <h1 className='font-semibold text-2xl mt-6'>Important Links</h1>
    <ul className='mt-2 space-y-1 font-medium  '>
      <li>
            <Link to ="/">
            Home
            </Link>
        </li>
        <li>
            <Link to='Login'>
            Login
            </Link>
        </li>
        
        <li>
            <Link to="contact us">
            Contact Us
            </Link>
        </li>
        
    </ul>
    
    </div>
    <hr className=' lg:hidden mt-4 '/>
    <div  >

    <h1 className='text-2xl font-semibold mt-6'>Contact Us</h1>
   <ul className='mt-2 space-y-1 font-medium  ' >
    <li>
        Call : (+92) 335 9650799
      
    </li>
    <li>
        
        Email:shakra.batool123@gmail.com
        
    </li>
    <li>
        
       
        Address : Image Analysis Lab, SINES, NUST
       
    </li>
    <li>
        Islamabad, Pakistan
    </li>
   </ul>
    </div>



            
    </div>   
    <hr />
   
<div className='py-1 flex justify-between text-center bg-slate-800'>
   
    <div>
    © 2025 Haq-e-Hilal All Right Reserved 
    </div>
    <div>
<ul className='flex space-x-2 mx-4'>
<li >
<Link to="#" className="text-white hover:text-grey-600  ">
                            <svg
                                className="w-4 h-4"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 8 19"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z"
                                    clipRule="evenodd"
                                />
                            </svg>
                             
                            </Link>
                            </li>
<li>
                            <Link to="#" className="text-white">
                            <svg
  className="w-6 h-4"
  aria-hidden="true"
  xmlns="http://www.w3.org/2000/svg"
  fill="currentColor"
  viewBox="0 0 24 24"
>
  <path
    fillRule="evenodd"
    d="M19.998 19.998h-3.643v-5.592c0-1.334-.027-3.053-1.86-3.053-1.861 0-2.146 1.453-2.146 2.953v5.692H8.706V8.996h3.496v1.503h.05c.487-.923 1.68-1.894 3.46-1.894 3.699 0 4.384 2.435 4.384 5.602v5.791zM5.337 7.495c-1.174 0-2.124-.95-2.124-2.124 0-1.173.95-2.123 2.124-2.123 1.174 0 2.123.95 2.123 2.123 0 1.174-.949 2.124-2.123 2.124zm1.822 12.503H3.515V8.996h3.644v11.002z"
    clipRule="evenodd"
  />
</svg>
    </Link>
    </li>


                            
<li>
                            <Link to="#" className="text-white">
                            <svg
  className="w-6 h-4"
  aria-hidden="true"
  xmlns="http://www.w3.org/2000/svg"
  fill="currentColor"
  viewBox="0 0 24 24"
>
  <path
    fillRule="evenodd"
    d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.326 3.608 1.301.975.975 1.239 2.242 1.301 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.326 2.633-1.301 3.608-.975.975-2.242 1.239-3.608 1.301-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.326-3.608-1.301-.975-.975-1.239-2.242-1.301-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.326-2.633 1.301-3.608.975-.975 2.242-1.239 3.608-1.301C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.735 0 8.332.013 7.053.071 5.775.13 4.67.365 3.684 1.35 2.7 2.334 2.465 3.439 2.406 4.717 2.348 5.996 2.335 6.399 2.335 9.664v4.672c0 3.265.013 3.668.071 4.947.059 1.278.293 2.383 1.278 3.368.985.985 2.09 1.219 3.368 1.278 1.279.058 1.682.071 4.947.071s3.668-.013 4.947-.071c1.278-.059 2.383-.293 3.368-1.278.985-.985 1.219-2.09 1.278-3.368.058-1.279.071-1.682.071-4.947s-.013-3.668-.071-4.947c-.059-1.278-.293-2.383-1.278-3.368-.985-.985-2.09-1.219-3.368-1.278C15.668.013 15.265 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324A6.162 6.162 0 0 0 12 5.838zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0-2.88 1.44 1.44 0 0 0 0 2.88z"
    clipRule="evenodd"
  />
</svg>
    </Link>
    </li>
</ul>

</div>

    </div>
    
    

        </footer>
    );
}
