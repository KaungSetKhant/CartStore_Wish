import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../style.css";
import "../btn.css";

// import required modules
import { Pagination } from "swiper/modules";

import dealLogo from "../svg/deal.svg";

import AOS from "aos";
import "aos/dist/aos.css";

const Slide = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <div className="">
      <div data-aos="fade-right" className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img src={dealLogo} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold text-cyan-500">
              Wish Shopping News!
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>

      <>
        <Swiper
          data-aos="zoom-out"
          slidesPerView={3}
          spaceBetween={30}
          pagination={{
            clickable: true
          }}
          modules={[Pagination]}
          className="mySwiper area"
        >
          <SwiperSlide>
            <img
              src="https://m.media-amazon.com/images/I/41jKgIIlCsL._AC_SX569_.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://m.media-amazon.com/images/I/51fr9zPI-fL._SX300_SY300_QL70_FMwebp_.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://m.media-amazon.com/images/I/61l325KJe0L._AC_SX425_.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://m.media-amazon.com/images/I/61xeq2EvfXL._SX425_.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://m.media-amazon.com/images/I/71LQdCPvW7L._AC_SX522_.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://m.media-amazon.com/images/I/71GCu24UYBL._AC_SY500_.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://m.media-amazon.com/images/I/91bZ5zvZvrL._AC_SX425_.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://m.media-amazon.com/images/I/71bytJp7DYL._AC_SX425_.jpg"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://m.media-amazon.com/images/I/31sZGKy0cFL._SY300_SX300_QL70_FMwebp_.jpg"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default Slide;
