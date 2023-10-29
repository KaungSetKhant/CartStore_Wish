import React, { useEffect, useState } from "react";
import "../btn.css";
import { BsFillBagCheckFill } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addtoCart } from "../redux/services/ProductSlice";
import { addtoFavourite } from "../redux/services/ProductSlice";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const SearchChild = (props) => {
  const { id, name, price, description, category, image } = props;

  const [hold, setHold] = useState("Add to Cart");
  const [active, setActive] = useState(
    <AiFillHeart className="text-gray-400 text-2xl" />
  );
  const [star, setStar] = useState(
    <AiFillStar className=" text-2xl text-gray-400" />
  );
  const [star1, setStar1] = useState(
    <AiFillStar className=" text-2xl text-gray-400" />
  );
  const [star2, setStar2] = useState(
    <AiFillStar className=" text-2xl text-gray-400" />
  );
  const [star3, setStar3] = useState(
    <AiFillStar className=" text-2xl text-gray-400" />
  );

  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    AOS.init({ duration: 3000 });
  }, []);

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    setHold(<BsFillBagCheckFill className=" text-2xl text-violet-500" />);
    //   dispatch(addtoCart(product.id,product.image,product.description,product.price,product.category))
    dispatch(addtoCart(props));
  };

  const handleAddToFavourite = () => {
    setActive(<AiFillHeart className=" text-2xl text-violet-500" />);
    dispatch(addtoFavourite(props));
  };
  return (
    <div data-aos="zoom-in">
      <div className=" bg-white p-3 rounded area">
        <img
          src={image}
          className=" max-w[100%] h-[150px] mx-auto rounded mb-3"
          alt=""
        />

        <div className=" flex flex-col mb-5 gap-3">
          <p className=" font-semibold text-teal-700">
            Product - {name.substring(0, 25)}...
          </p>
          <p className=" text-teal-500 font-medium text-sm">
            Category - {category}
          </p>
          <p className=" text-teal-500 font-medium text-sm">
            Desc - {description.substring(0, 25)}...
          </p>
          <p className=" text-teal-700 font-medium text-sm">${price}</p>
        </div>

        <div className="flex justify-between mb-5">
          <div className="flex items-center justify-start gap-3">
            <button
              className="text-violet-500 font-semibold rounded"
              onClick={() =>
                setStar(<AiFillStar className=" text-2xl text-yellow-400" />)
              }
            >
              {star}
            </button>
            <button
              className="text-violet-500 font-semibold rounded"
              onClick={() =>
                setStar1(<AiFillStar className=" text-2xl text-yellow-400" />)
              }
            >
              {star1}
            </button>
            <button
              className="text-violet-500 font-semibold rounded"
              onClick={() =>
                setStar2(<AiFillStar className=" text-2xl text-yellow-400" />)
              }
            >
              {star2}
            </button>
            <button
              className="text-violet-500 font-semibold rounded"
              onClick={() =>
                setStar3(<AiFillStar className=" text-2xl text-yellow-400" />)
              }
            >
              {star3}
            </button>
          </div>

          <div className="">
            <button
              className="text-violet-500 font-semibold px-3 py-1 rounded"
                onClick={() => handleAddToFavourite()}>
              {active}
            </button>
          </div>
        </div>

        <div className=" flex justify-between">
          <Link to={`/carts/${id}`}>
            <button className=" text-gray-700 font-semi-bold detail">
              Detail
            </button>
          </Link>

          <button
            className="text-violet-500 font-semibold test px-6 py-1 rounded"
            onClick={() => handleAddToCart()}
          >
            {hold}
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchChild;
