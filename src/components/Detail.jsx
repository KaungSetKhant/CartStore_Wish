import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useGetInfoQuery } from "../redux/api/authApi";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { AiOutlineArrowLeft } from "react-icons/ai";
import "../btn.css";
import {AiOutlineArrowUp} from 'react-icons/ai'

import AOS from "aos";
import "aos/dist/aos.css";

const Detail = () => {
  const { id } = useParams();
  const { data: carts } = useGetInfoQuery();
  console.log(carts);
  const [Products, SetProducts] = useState({});

  useEffect(() => {
    fetchProducts();
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    AOS.init({ duration: 3000 });
  }, []);

  const fetchProducts = async () => {
    const api = await fetch(`http://localhost:3000/carts/${id}`);
    const data = await api.json();
    SetProducts(data);
    console.log(data);
  };

  return (
    <div>
      <Navbar />
      <div>
        <section  className="text-gray-600 body-font overflow-hidden">
          <div className="container px-5 py-24 mx-auto">
            <div  data-aos="zoom-out" className=" max-w[100%] mx-auto flex flex-wrap area p-3 bg-white">
              {/* lg:w-1/2  lg:w-4/5 w-full lg:h-auto h-64 */}

              <img data-aos="fade-right"
                className=" max-w[100%] lg:h-[300px]  h-[150px] mx-auto object-cover object-center rounded"
                src={Products.image}
              />

              <div data-aos="fade-down" className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h2 className="text-sm title-font text-gray-500 tracking-widest">
                  Visit the Wish Store
                </h2>
                <h1 className="font-semibold text-teal-700 text-3xl title-font mb-1">
                  {Products.name}
                </h1>
                <div className="flex mb-4">
                  <span className="flex items-center">
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      className="w-4 h-4 text-yellow-400"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      className="w-4 h-4 text-yellow-400"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      className="w-4 h-4 text-yellow-400"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      className="w-4 h-4 text-yellow-400"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <svg
                      fill="none"
                      stroke="currentColor"
                      className="w-4 h-4 text-indigo-500"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                    </svg>
                    <span className="text-violet-600 ml-3">4 Reviews</span>
                  </span>
                </div>
                <p className="leading-relaxed text-teal-500 font-medium text-sm">
                  {Products.description}
                </p>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                  <div className="flex">
                    <span className="mr-3 text-teal-500">Color</span>
                    <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                    <button className="border-2 border-gray-300 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none"></button>
                    <button className="border-2 border-gray-300 ml-1 bg-blue-500 rounded-full w-6 h-6 focus:outline-none"></button>
                    <button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>
                  </div>
                  <div className="flex ml-6 items-center">
                    <span className="mr-3 text-teal-500">Size</span>
                    <div className="relative">
                      <select className="rounded text-blue-500 border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                        <option value="Small">Small</option>
                        <option value="Medium">Medium</option>
                        <option value="Large">Large</option>
                        <option value="XL">XL</option>
                        <option value="XXL">XXL</option>
                      </select>
                      <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          className="w-4 h-4"
                          viewBox="0 0 24 24"
                        >
                          <path d="M6 9l6 6 6-6"></path>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between">
                  <span className="title-font font-medium text-2xl text-teal-500">
                    <span className=" text-yellow-500">$</span>
                    {Products.price}
                  </span>

                  <Link to={"/"}>
                    <button className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                      <AiOutlineArrowLeft className="mt-1 mr-2" />
                      Back
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
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
      <Footer />
    </div>
  );
};

export default Detail;
