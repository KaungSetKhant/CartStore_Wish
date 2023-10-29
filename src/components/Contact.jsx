import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <div>
      <div className="flex justify-center bg-gradient-to-r via-blue-800 to-cyan-600 " style={{ backgroundColor: "teal" }}>
        <div className="flex flex-col justify-center  my-10 w-[90%] space-y-28 lg:space-y-24 max-w-7xl  ">
          <div data-aos="zoom-in" className="flex flex-col justify-center items-center text-center">
            <div className="text-xl md:text-3xl text-white font-bold uppercase">
              Contact Us
            </div>
            <div className="text-sm md:text-xl text-white font-medium">
              Get in touch and let us know how we can help.
            </div>
          </div>
          <div  className="flex flex-col justify-center items-center lg:flex-row space-y-28 lg:space-y-0  lg:space-x-10">
            <div data-aos="zoom-in" className="bg-white shadow-lg flex flex-col justify-center rounded-lg items-center py-4 h-56 md:w-[80%] lg:w-fit">
              <div className="-mt-10 ">
                <ion-icon
                  name="bar-chart-outline"
                  className="text-3xl md:text-5xl rounded-full p-4 bg-white text-cyan-400"
                ></ion-icon>
              </div>
              <div className="font-semibold text-2xl">Sales</div>
              <p className="text-center text-lg p-5">
                We would love to talk about how we can work together.
              </p>
              <p className="text-center text-sm px-6 bg-blue-500 py-2 rounded-3xl hover:bg-cyan-500 p-5 text-white font-medium">
                <a href="#">Contact Sales</a>
              </p>
            </div>
            <div data-aos="zoom-in" className="bg-white shadow-lg flex flex-col justify-center rounded-lg items-center py-4 h-56 md:w-[80%] lg:w-fit">
              <div className="-mt-10  ">
                <ion-icon
                  name="help-outline"
                  className="text-3xl md:text-5xl rounded-full p-4 bg-white text-cyan-400"
                ></ion-icon>
              </div>
              <div className="font-semibold text-2xl">Help & Support</div>
              <p className="text-center text-lg p-5">
                We are here to help with any questions or code.
              </p>
              <p className="text-center text-sm px-6 bg-blue-500 py-2 rounded-3xl hover:bg-cyan-500 p-5 text-white font-medium">
                <a href="#">Get Support</a>
              </p>
            </div>
            <div data-aos="zoom-in" className="bg-white shadow-lg flex flex-col justify-center rounded-lg items-center py-4 h-56 md:w-[80%] lg:w-fit">
              <div className="-mt-10  ">
                <ion-icon
                  name="camera-outline"
                  className="text-3xl md:text-5xl rounded-full p-4 bg-white text-cyan-400"
                ></ion-icon>
              </div>
              <div className="font-semibold text-2xl">Media & Press</div>
              <p className="text-center text-lg p-5">
                Get Stripe news, company info, and media resources.
              </p>
              <p className="text-center text-sm px-6 bg-blue-500 py-2 rounded-3xl hover:bg-cyan-500 p-5 text-white font-medium">
                <a href="#">Visit Newsroom</a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        nomodule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script>
    </div>
  );
};

export default Contact;
