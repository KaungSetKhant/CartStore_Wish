import React, { useEffect } from "react";
import Trusted from "./Trusted";
import Contact from "./Contact";

import AOS from "aos";
import "aos/dist/aos.css";

const Testmonial = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <div>
      <Trusted />
      <div className="flex justify-center  p-4">
        <div className="flex flex-col justify-center items-center ">
          <div data-aos="fade-right" className=" text-lg md:text-5xl font-medium flex my-6  border-b-red-600 border-b-4">
            <div>Testimonials By </div>
            <div className="text-cyan-400 mx-1"> Trusted</div>
          </div>
          <div className="flex flex-col md:flex-row max-w-7xl justify-center items-center ">
            <div
              className="overflow-hidden w-full m-4 flex justify-center   md:w-[33%]  shadow-x"
              style={{ backgroundColor: "teal" }}
            >
              <div data-aos="fade-right" className="flex flex-col md:flex-row items-center justify-center  bg-white rounded-tl-full ">
                <div className="  items-center justify-center flex py-2">
                  <div className="flex flex-col  items-center justify-center ">
                    <div className="flex items-center">
                      <div className="p-1 bg-white  rounded-full">
                        <img
                          src="https://source.unsplash.com/100x100/?man,boy"
                          alt=""
                          className="rounded-full"
                        />
                      </div>
                      <div>
                        <div className="font-bold text-stone-500 mx-4">
                          John Doe
                        </div>
                        <div className="text-sm font-medium text-stone-500 hover:text-stone-500 mx-4">
                          <a href="#">Board Director of Tailblocks</a>
                        </div>
                      </div>
                    </div>
                    <div className="text-stone-400  m-2 px-8">
                      {" "}
                      Churchill lead Britain through one of its darkest periods.
                      With enemies threatening to advance across the English
                      Channel, bombing London daily, the pressure to survive was
                      paramount.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="overflow-hidden w-full m-4 flex justify-center   md:w-[33%]  shadow-xl"
              style={{ backgroundColor: "teal" }}
            >
              <div data-aos="zoom-in" className="flex flex-col md:flex-row items-center justify-center  bg-white rounded-tl-full ">
                <div className="  items-center justify-center flex py-2">
                  <div className="flex flex-col  items-center justify-center ">
                    <div className="flex items-center">
                      <div className="p-1 bg-white rounded-full">
                        <img
                          src="https://source.unsplash.com/100x100/?girl"
                          alt=""
                          className="rounded-full"
                        />
                      </div>
                      <div>
                        <div className="font-bold text-stone-500 mx-4">
                          Elina Gilbert
                        </div>
                        <div className="text-sm font-medium text-stone-500 hover:text-stone-500 mx-4">
                          <a href="#">ShareHolder, Tailblocks</a>
                        </div>
                      </div>
                    </div>
                    <div className="text-stone-400  m-2 px-8">
                      {" "}
                      Churchill lead Britain through one of its darkest periods.
                      With enemies threatening to advance across the English
                      Channel, bombing London daily, the pressure to survive was
                      paramount.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="overflow-hidden w-full m-4 flex justify-center   md:w-[33%]  shadow-x"
              style={{ backgroundColor: "teal" }}
            >
              <div data-aos="fade-left" className="flex flex-col md:flex-row items-center justify-center  bg-white rounded-tl-full ">
                <div className="  items-center justify-center flex py-2">
                  <div className="flex flex-col  items-center justify-center ">
                    <div className="flex items-center">
                      <div className="p-1 bg-white rounded-full">
                        <img
                          src="https://source.unsplash.com/100x100/?boy"
                          alt=""
                          className="rounded-full"
                        />
                      </div>
                      <div>
                        <div className="font-bold text-stone-500 mx-4">
                          Josh Reacher
                        </div>
                        <div className="text-sm font-medium text-stone-500 hover:text-stone-500 mx-4">
                          <a href="#">CEO, Tailblocks</a>
                        </div>
                      </div>
                    </div>
                    <div className="text-stone-400  m-2 px-8">
                      {" "}
                      Churchill lead Britain through one of its darkest periods.
                      With enemies threatening to advance across the English
                      Channel, bombing London daily, the pressure to survive was
                      paramount.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contact/>
    </div>
  );
};

export default Testmonial;
