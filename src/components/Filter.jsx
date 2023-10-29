import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetInfoQuery } from "../redux/api/authApi";
import Category from "./Category";
import "../btn.css";
import Typewriter from "typewriter-effect";

import AOS from "aos";
import "aos/dist/aos.css";
const Filter = () => {
  const { data: carts } = useGetInfoQuery();

  const [Products, SetProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
    AOS.init({ duration: 3000 });
  }, []);

  const fetchProducts = async () => {
    const api = await fetch(`http://localhost:3000/carts`);
    const data = await api.json();
    SetProducts(data);
    console.log(data);
  };

  const [search, setSearch] = useState("");
  const nav = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log(filterProduct)
      nav("/search", { state: { filterProduct } });
  };

  const filterProduct = Products.filter((item) =>
    item.name.toLowerCase().includes(search)
  );
  console.log(filterProduct);

  const [category, setCategory] = useState("");

  const filterCategory = Products.filter((item) => item.category === category);
  console.log(filterCategory);

  return (
    <div className="text-center mt-5 mb-5">
      <div
        data-aos="fade-right"
        className="navbar bg-base-100 "
        style={{ zIndex: "100" }}
      >
        <div className="navbar-start">
          <select
            tabIndex={0}
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-neutral gap-3 text-white cursor-pointer rounded-box w-52"
          >
            <option>All Category</option>
            <option value="Men Clothing">Men Clothing</option>
            <option value="Women Clothing">Women Clothing</option>
            <option value="Men Cosmetics">Men Cosmetics</option>
            <option value="Women Cosmetics">Women Cosmetics</option>
          </select>
        </div>

        <div className="navbar-center">
          {/* <a className="btn btn-ghost normal-case text-xl">daisyUI</a> */}
        </div>

        <div className="navbar-end">
          <form onSubmit={submitHandler}>
            <div className="form-control">
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                placeholder="Search"
                className="input input-bordered text-black w-24 md:w-auto"
              />
            </div>
          </form>
        </div>
      </div>

      <div>
        <div className="flex flex-wrap gap-5 justify-center mt-10 mb-10 ">
          {filterCategory.map((pd) => {
            return (
              <>
                <Category key={pd.id} {...pd} />
              </>
            );
          })}
        </div>

        {/* Text Effect   */}
        <div data-aos="zoom-in">
          <h1 className=" mt-20 text-2xl text-teal-500">
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 50,
                strings: ["Welcome to Wish Shopping Store..."]
              }}
            />
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Filter;
