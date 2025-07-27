import React, { useEffect, useState} from 'react' 
import { useParams } from 'react-router';
import { product } from '../../../product';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../store/cart';

const Detail = () => {
    const { slug } = useParams();
    const [detail, setDetail] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();
    useEffect(() => {
        const findDetail = product.filter(products => products.slug === slug);
        if(findDetail.length > 0){
            setDetail(findDetail[0]);
        }else{
            window.location.href = '/';
        }
    }, [slug])
    const handleMinusQuantity = () => {
        setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
    }
    const handlePlusQuantity = () => {
        setQuantity(quantity + 1);
    }
    const handleAddToCart = () => {
        dispatch(addToCart({
            productId: detail.Id,
            quantity: quantity
        }));
    }
  return (
    <div >
        <h2 className='text-3xl text-[#4b5b1f] font-bold mt-10 text-center'>PRODUCT DETAIL</h2>
        <div className="flex justify-center">
  <hr className="mt-2 w-48 border-2 border-amber-300/60" />
  </div>
    
        <div className=' gap-20  mx-5 flex flex-wrap my-16 items-center justify-center'>
            <div>
                <img src={detail.image} alt="" className='w-full'/>
            </div>
            <div className='flex flex-col gap-5 text-gray-500'>
                <h1 className='text-4xl uppercase font-bold'>{detail.name}</h1>
                <p className='font-bold text-3xl'>
                    ${detail.price}
                </p>
                <div className='flex gap-5'>
                    <div className='flex gap-2 justify-center items-center'>
                        <button className='bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center' onClick={handleMinusQuantity}>-</button>
                        <span className='bg-gray-200 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center'>{quantity}</span>
                        <button className='bg-gray-100 h-full w-10 font-bold text-xl rounded-xl flex justify-center items-center' onClick={handlePlusQuantity}>+</button>
                    </div>
                    <button className='bg-[#4b5b1f] text-[#f9f6f0] px-7 py-3 rounded-xl shadow-2xl' onClick={handleAddToCart}>
                        Add To Cart
                    </button>
                </div>
                <p>
                    {detail.description}
                </p>
            </div>
        </div>
      
  </div>
  
  )
}

export default Detail