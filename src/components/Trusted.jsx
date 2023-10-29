import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Trusted = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <div>

      <div data-aos="fade-right" className=" text-lg md:text-5xl font-medium justify-center items-center flex my-6 ">
        <div className="border-b-4 border-b-red-600 flex">

            <div className="">Wish Store By </div>
            <div className="text-cyan-400 mx-1"> Trusted  Products Ever</div>
        </div>
      </div>
      
      <div className="flex justify-center">
        <div className="flex flex-col max-w-7xl justify-center items-center">
          <div data-aos="flip-right" className="overflow-hidden w-3/4 bg-white m-4 shadow-lg flex flex-col md:flex-row justify-center">
            <div className="h-26 w-full overflow-hidden">
              {" "}
              <img
                src="https://m.media-amazon.com/images/I/61iWm22nduL._AC_SY500_.jpg "
                alt=""
                className="w-[100px] h-[160px]"
              />{" "}
            </div>
            <div className="grid p-2">
              <div className="font-bold text-lg text-black m-2 mt-10">
                Ever-Pretty Womens Vintage V Neck Irregular Hem Lace A Line
                Chiffon Cocktail Dresses 0207-USA{" "}
              </div>
              <div className="text-gray-500 m-2 text-sm">
                <a href="">
                  Custom Size Service: This product also offers customized size
                  service, which can customize your own size. Please choose "One
                  Size/0/2/28/30" option and you will get a perfect custom made
                  dress. Features: fully lined, no built-in bras, no stretch;
                  lace, asymmetrical hem, chiffon, mini party dress, wedding
                  guest dress, bridesmaid dress, formal dress Mini deep v neck
                  party dress, the asymmetrical hem makes you look sexy, this
                  party dress is sweet, unique, elegant and fashion
                </a>
              </div>
            </div>
          </div>
          <div data-aos="flip-left" className="overflow-hidden w-3/4 bg-white m-4 shadow-lg flex flex-col md:flex-row justify-center">
            <div className="grid p-2">
              <div className="font-bold text-lg text-black m-2 mt-10">
                Mens Velvet Blazer Slim Fit Tuxedo Suits Jacket Shawl Collar
                Solid Jacket{" "}
              </div>
              <div className="text-gray-500 m-2 text-sm">
                <a href="">
                  Mens velvet blazer suis jacket slim fit for men shawl collar
                  jacket one button single breasted dinner prom. Best choice for
                  single-breasted one-button closure, shawl collar,Occasions For:
                  this is the best suit in men's wardrobe, suitable for
                  weddings, graduation ceremoney, dating, meeting, yacht party,
                  banquet, hosts' wearing, Holiday, Christmas gift,etc.{" "}
                </a>
              </div>
            </div>
            <div className="h-26 w-full overflow-hidden">
              {" "}
              <img
                src="https://m.media-amazon.com/images/I/6147YcMHYjL._AC_SX522_.jpg "
                alt=""
                className="w-[100px] h-[130px]"
              />{" "}
            </div>
          </div>
          <div data-aos="flip-right" className="overflow-hidden w-3/4 bg-white m-4 shadow-lg flex flex-col md:flex-row justify-center">
            <div className="h-26 w-full overflow-hidden">
              {" "}
              <img
                src="https://m.media-amazon.com/images/I/719M1lDKzeL._SX425_.jpg"
                alt=""
                className="w-[100px] h-[160px]"
              />{" "}
            </div>
            <div className="grid p-2">
              <div className="font-bold text-lg text-black m-2 mt-10">
                Nivea Men Sensitive Face Lotion with SPF 15, Broad Spectrum
                Sunscreen, 3 Pack of 2.5 Fl Oz Tubes{" "}
              </div>
              <div className="text-gray-500 m-2 text-sm">
                <a href="">
                  Formulated for Sensitive Skin: Broad spectrum SPF 15 facial
                  moisturizer specially formulated for men with sensitive skin
                  UVA and UVB Protection: Men's face lotion intensively
                  moisturizes and soothes the skin while also protecting against
                  harmful UVA and UVB sun damage Dye and Alcohol Free: This face
                  moisturizer for sensitive skin is dye free and alcohol free
                  making it safe for everyday use{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script src="https://cdn.tailwindcss.com"></script>
    </div>
  );
};

export default Trusted;
