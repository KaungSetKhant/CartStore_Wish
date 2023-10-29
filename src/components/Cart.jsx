import React, { useEffect } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import "../btn.css";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addItemsQuantity, minusItemsQuantity, removefromCart } from "../redux/services/ProductSlice";
import {AiOutlineArrowUp} from 'react-icons/ai'
import AOS from "aos";
import "aos/dist/aos.css";

const Cart = (props) => {
  const { id, name, image, category, price, quantity } = props;
 
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    AOS.init({ duration: 3000 });

  }, []);
  const dispatch = useDispatch();
 
  const oneItemPrice = price * quantity  
  
  return (
    <div  className="flex  flex-row justify-around gap-5 p-5 area mb-2">
      <div className=" w-40 flex flex-col items-center text-center bg-white justify-center hoo">
        <img data-aos="flip-right" src={image} className="max-w[100%] h-[150px] rounded" />
      </div>

      <div className="flex flex-col justify-center mt-3 gap-1">
        <p className=" font-semibold text-teal-500">
          Product - {name.substring(0, 25)}...
        </p>
        <p className=" text-teal-500 text-sm">Category - {category}</p>
        <p className=" text-teal-500 font-medium text-sm">Price - ${oneItemPrice}</p>
      </div>

      <div className="flex flex-col justify-center items-center mt-5 gap-3">
        <AiOutlinePlus onClick={() => dispatch(addItemsQuantity(props))} className=" text-blue-500 font-medium text-xl cursor-pointer select-none" />
        <p className=" text-teal-500 font-medium text-sm cursor-pointer select-none">
          {quantity}
        </p>
        <AiOutlineMinus onClick={() => quantity>1 ? dispatch(minusItemsQuantity(props)) : " "} className=" text-red-500 font-medium text-xl cursor-pointer select-none" />
      </div>

      <div className="flex flex-col justify-center items-center mt-5 gap-3">
        <FaTrash
          onClick={() => dispatch(removefromCart(props))}
          className=" text-red-600 font-medium text-xl cursor-pointer select-none"
        />
      </div>
      <button className="rounded-[50%]"
        onClick={() => {
          window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        }}
        style={{
          position: 'fixed',
          padding: '1rem 1rem',
          fontSize: '20px',
          bottom: '40px',
          right: '40px',
          backgroundColor: '#0C9',
          color: '#fff',
          textAlign: 'center',
        }}
      >
       <AiOutlineArrowUp/>
      </button>
    </div>
    
  );
};

export default Cart;
