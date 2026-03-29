import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import Footer from "./pages/Footer/Footer";
import HomePage from "./pages/HomePage/HomePage";
import NavBar from "./pages/NavBar/NavBar";
// import ProductDetailPage from "./pages/ProductDetailPage/ProductDetailPage";
import Blog from "./pages/Blogs/Blog";
import Contact from "./pages/Contact/Contact";
import LoginPage from "./pages/LoginScreen/LoginPage";
import Signup from "./pages/SignUpPage/Signup";
import About from "./pages/About/About";
import Help from "./pages/Help/Help";
import ProductPage from "./pages/ProductPage/ProductPage";
import BlogDetailPage from "./pages/Blogs/BlogDetailPage";
import { useEffect, useState } from "react";
import ScrollToTop from "./pages/ScrollToTop";

function App() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);
  // console.log(products);
  return (
    <div className="w-full">
      <NavBar />
      <BrowserRouter>
      <ScrollToTop/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductPage products={products}/>} />
          {/* <Route path="/products" element={<ProductDetailPage />} /> */}

          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogDetailPage />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/help" element={<Help />} />
          <Route path="/about" element={<About />} />

          {/* <Route path="/product/:id" element={<ProductDetailPage />} /> */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
