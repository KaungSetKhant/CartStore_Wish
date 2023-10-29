import React, { useEffect, useState } from "react";
import reactLogo from "../svg/logo.svg";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AiFillHeart } from "react-icons/ai";
// import AOS from "aos";
// import "aos/dist/aos.css";
const Navbar = () => {
 
 
 
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
    // AOS.init({ duration: 3000 });
  }, [theme]);

  const handleToogle = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  const { cartItems, totalAmount } = useSelector((state) => state.products);
  console.log(cartItems);

  const { favouriteItems} = useSelector((state) => state.products);
  console.log(favouriteItems);

  return (
    <div className="">
      <div 
        className="navbar text-neutral-content"
        style={{ backgroundColor: "#c7489d" }}
      >
        <div className="flex-1">
          <img src={reactLogo} className=" w-10" alt="" />
          <Link to={"/"}>
            <a className="btn btn-ghost normal-case font-semibold text-xl">
              Wish Cart
            </a>
          </Link>
        </div>

        <div className="flex-none gap-2">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm text-violet-500 bg-black rounded-[50%] w-5 h-5 indicator-item">
                  {cartItems.length}
                </span>
              </div>
            </label>
            <div
              style={{ zIndex: "100" }}
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              <div className="card-body bg-neutral">
                <span className="font-bold text-lg">
                  Total_Items - {cartItems.length}
                </span>
                <span className="text-info">
                  Subtotal: <span className=" text-yellow-500">$</span>
                  {totalAmount.toFixed(2)}
                </span>
                <Link to={"/addtocart"}>
                  <div className="card-actions">
                    <button className="btn btn-primary text-white btn-block">
                      View cart
                    </button>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <label className="swap swap-rotate">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" onChange={handleToogle} />

            {/* sun icon */}
            <svg
              className="swap-on fill-current w-6 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
            </svg>

            {/* moon icon */}
            <svg
              className="swap-off fill-current w-6 h-10"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
            </svg>
          </label>

          <div className="">
            <button className="text-violet-500 font-semibold px-3 py-1 rounded ">
                <AiFillHeart className=" text-2xl text-red-700 relative" />
                <span className=" text-sm absolute top-[14px] right-[65px] bg-black rounded-[50%] w-5 ">{favouriteItems.length}</span>
            </button>
          </div>

          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://netstorage-briefly.akamaized.net/images/60c7692a65178762.jpg?imwidth=900" />
              </div>
            </label>
            <ul
              style={{ zIndex: "100" }}
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content tex-white bg-neutral hover:text-blue-500 active:text-blue-500 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  WishWistle
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>wishwistle522001@gmail.com</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;