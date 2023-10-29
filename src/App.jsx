import React from "react";
import Products from "./components/Products";
import { Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
// import Slide from "./components/Slide";
// import Testmonial from './components/Testmonial';
import Addtocart from "./components/Addtocart";
import Search from "./components/Search";
import Detail from "./components/Detail";
import RouteGuard from "./components/RouteGuard";
import Category from "./components/Category";

// import Navbar from "./components/Navbar";
// import Login from "./components/Login";



const App = () => {
  return (
    <div>
      {/* <Navbar/> */}
      {/* <Slide/> */}
      <Routes>
        {/* <Route path="/" element={<Navbar />} /> */}
        <Route path="/" element={<Products />} />
        <Route path="/addtocart" element={<Addtocart />} />
        
        <Route
          path="/search"
          element={
            <RouteGuard>
              <Search />
            </RouteGuard>
          }
        />
    
        <Route path="/carts/:id" element={<Detail />} />
        <Route path="/category" element={<Category />} />
      </Routes>
      {/* <Testmonial/> */}
      {/* <Footer/> */}
    </div>
  );
};

export default App;
