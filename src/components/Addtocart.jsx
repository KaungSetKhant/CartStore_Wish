import React, { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useSelector } from "react-redux";
import Cart from "./Cart";
import "../btn.css";
import { Link } from "react-router-dom";
// import Login from "./Login";
import AOS from "aos";
import "aos/dist/aos.css";
const Addtocart = () => {
  const { cartItems, totalAmount } = useSelector((state) => state.products);
  console.log(cartItems);
  
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  if (cartItems.length === 0) {
    return (
      <div>
        <div className="flex items-center justify-center h-screen">
          <div className="flex flex-col md:flex-row w-[70%] items-center space-y-4">
            <div className="flex-col space-y-4 text-center md:w-1/2 w-[80%]">
              <div className="text-fuchsia-600 text-xl font-medium">
                Wish Shopping Cart
              </div>
              <div className="text-5xl font-medium">Page not found</div>
              <div className="text-gray-500">
                Sorry, your cart is empty now.
              </div>
              <Link to={"/"}>
                <div className="flex items-center justify-center mt-5">
                  <div className="bg-fuchsia-600 px-4 py-1 text-white font-medium rounded-lg  hover:scale-105 cursor-pointer">
                    Visit Homepage
                  </div>
                </div>
              </Link>
            </div>
            <div className="md:w-96 w-[70%] md:h-96 h-48  bg-gray-200 rounded-xl overflow-hidden">
              <img
                src="https://source.unsplash.com/800x1200/?robot,error"
                alt=""
                className=""
              />
            </div>
          </div>
        </div>

        <script src="https://cdn.tailwindcss.com"></script>
      </div>
    );
  }
  return (
    <div className="">
      <Navbar />
      {/* <Login/> */}
      <div>
        <div className="mt-2">
          {cartItems?.map((item) => {
            return <Cart key={item.id} {...item} />;
          })}
        </div>

        <div className="flex justify-around mt-3 area4">
          <h2 data-aos="zoom-in" className="font-semibold text-2xl text-teal-500">Total</h2>
          <h2 data-aos="zoom-in" className="font-semibold text-2xl text-teal-500">
            <span data-aos="flip-right" className=" text-yellow-500">$</span>
            {totalAmount.toFixed(2)}
          </h2>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Addtocart;
