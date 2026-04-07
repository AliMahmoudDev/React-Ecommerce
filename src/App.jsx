import React from "react";
import Home from "./pages/home/Home";
import Topheader from "./components/header/Topheader";
import Bottomheader from "./components/header/Bottomheader";
import { Routes, Route } from "react-router-dom";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/cart/Cart";
import AutoScrollTop from "./components/AutoTop";
import { AnimatePresence } from "framer-motion";
import PageTransition from "./components/PageTransition";
import CategoryPage from "./pages/category page/CategoryPage";
import Search from "./pages/search/Search";
import Favorites from "./pages/favorites/Favorites";
import Contact from "./pages/contact/Contact";
import About from "./pages/about/About";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <>
      <header>
        <Topheader />
        <Bottomheader />
      </header>
      <AutoScrollTop/>
      <AnimatePresence>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/category/:category" element={<CategoryPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
