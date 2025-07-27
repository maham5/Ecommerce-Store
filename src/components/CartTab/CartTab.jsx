import React from 'react' ;
import { useSelector } from 'react-redux';
import Cartitems from '../Cartitems/Cartitems';
import { toggleStatusTab } from '../../store/cart';
import { useDispatch } from 'react-redux';


const CartTab = () => {
  
  const carts = useSelector(store=> store.cart.items)
  const StatusTab = useSelector(store => store.cart.status)

  const dispatch =  useDispatch();

  const handleCloseCart = ()=>{
    dispatch(toggleStatusTab())
  }




  return (
    <div className={`fixed top-0 right-0 bg-[#4b5b1f] shadow-2xl w-96 h-full grid grid-rows-[60px_1fr_60px] 
      transform transition-transform duration-500
      ${StatusTab === false ? "translate-x-full" : ""}
      `}>
        <h2 className='p-5 text-[#f9f6f0] text-2xl mt-10'>Shopping Cart</h2>
        <div className='p-10 my-10 flex flex-col gap-y-5'>
            {carts.map((item,key)=>
                 <Cartitems key={key} data={item}/>
           ) }
        </div>
        <div className='grid grid-cols-2'>
            <button className='bg-black text-[#f9f6f0]' onClick={handleCloseCart}>CLOSE</button>
            <button className='bg-amber-600 text-[#f9f6f0]'>CHECKOUT</button>
        </div>
    </div>
  )
}

export default CartTab