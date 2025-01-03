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

const LandingPage = ({ cart, removeFromCart, addToCart }) => {
  return (
    <div
      style={
        {
          // background: "red",
        }
      }
    >
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
