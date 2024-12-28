import React, { useEffect, useState } from "react";
import Hero from "./Hero";
import Product from "./Product";
import About from "./About";
import Footer from "./Footer";
import Award from "./Award";
import Services from "./Services";
import Review from "./Review";
import Video from "./Video";
import Features from "./Features";
import Header from "./Header";

const LandingPage = () => {
  const [cart, setCart] = useState(() => {
    // Load cart data from localStorage on initial render
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Function to add items to the cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save updated cart to localStorage
      return updatedCart;
    });
  };

  const removeFromCart = (index) => {
    const updatedCart = cart.filter((item, i) => i !== index); // Remove item at the given index
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save updated cart to localStorage
  };

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div>
      <Header cartItems={cart} removeFromCart={removeFromCart} />
      <Hero />
      <Product addToCart={addToCart} />
      <About />
      <Award />
      <Features />
      <Services />
      <Video />
      <Review />
      <Footer />
    </div>
  );
};

export default LandingPage;
