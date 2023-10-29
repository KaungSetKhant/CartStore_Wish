import React from "react";
import { useLocation } from "react-router-dom";
import SearchChild from "./SearchChild";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { AiOutlineArrowUp } from "react-icons/ai";

const Search = () => {
  const location = useLocation();
  console.log(location);

  const item = location?.state?.filterProduct;
  console.log(item);
  
  return (
    <div>
      <Navbar />
      <div className="flex flex-wrap gap-10 mt-10 justify-center mb-10">
        {item.map((pd) => {
          return <SearchChild key={pd.id} {...pd} />;
        })}
      </div> 
        

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
      <Footer />
    </div>
  );
 }


export default Search;
