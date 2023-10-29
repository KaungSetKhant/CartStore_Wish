import React, { useEffect, useState } from "react";
import { useGetInfoQuery } from "../redux/api/authApi";
import ProductCart from "./ProductCart";
import Filter from "./Filter";
import Navbar from "./Navbar";
import Slide from "./Slide";
import Testmonial from "./Testmonial";
import Footer from "./Footer";
import { AiOutlineArrowUp } from "react-icons/ai";

const Products = () => {
  const { data: carts } = useGetInfoQuery();

  const [Products, SetProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const fetchProducts = async () => {
    const api = await fetch(`http://localhost:3000/carts`);
    const data = await api.json();
    SetProducts(data);
    console.log(data);
    setIsLoading(false);
  };

  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-bars loading-lg w-16 text-violet-800"></span>
      </div>
    );
  }
  return (
    <div>
      <Navbar />
      <Slide />

      <Filter />

      <div className="flex flex-wrap gap-5 justify-center mb-20 mt-20">
        {Products.map((product) => {
          return <ProductCart key={product.id} {...product} id={product.id} />;
        })}

        <button
          className="rounded-[50%]"
          onClick={() => {
            window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
          }}
          style={{
            position: "fixed",
            padding: "1rem 1rem",
            fontSize: "20px",
            bottom: "40px",
            right: "40px",
            backgroundColor: "#0C9",
            color: "#fff",
            textAlign: "center"
          }}
        >
          <AiOutlineArrowUp />
        </button>
      </div>
      <Testmonial />
      <Footer />
    </div>
  );
};

export default Products;
