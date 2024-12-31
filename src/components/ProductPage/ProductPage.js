import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { DefaultButton } from "../Actions";
import "./Product.css";
import AllProducts from "./AllProductPage";
import SearchInput from "./SearchInput";
import Footer from "../LandingPage/Footer";
import Header from "../LandingPage/Header";
import data from "../data.json";

const images = [
  "/assets/services1.jpg",
  "/assets/asset20.jpeg",
  "/assets/asset3.jpeg",
];

const ProductPage = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(timer);
  }, []);

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

  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      <Header cartItems={cart} removeFromCart={removeFromCart} />
      <TopWrapper>
        <Left>
          <LeftWrapper>
            <LeftH2>December Deals</LeftH2>
            <LeftH1>30% Off Solar Solutions!</LeftH1>
            <LeftP>+ Free Installation Services (₦150k value)</LeftP>
            <LeftButton>
              <DefaultButton text="shop now" />
            </LeftButton>
          </LeftWrapper>
        </Left>
        <Right>
          <Wrapper>
            <TextHolder>
              <Head>PREMIUM SOLAR ENERGY</Head>
              <Text>
                Illuminate your world with Peviacom's premium solar technology,
                tailored for every need and budget.
              </Text>
            </TextHolder>
          </Wrapper>
          <RightWrapper>
            <div className="carousel">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Slide ${index + 1}`}
                  className={`carousel-image ${
                    index === current ? "active" : ""
                  }`}
                />
              ))}
            </div>
          </RightWrapper>
        </Right>
      </TopWrapper>
      <Bottom>
        <BottomWrapper>
          <ToolBar>
            <SearchInput
              setSearchTerm={setSearchTerm}
              searchTerm={searchTerm}
            />
          </ToolBar>
          <Products>
            {filteredData.map((item) => (
              <AllProducts
                key={item.id}
                image={item.image}
                name={item.name}
                price={item.price}
                item={item}
              />
            ))}
          </Products>
        </BottomWrapper>
      </Bottom>
      <Footer />
    </Container>
  );
};

export default ProductPage;

const Products = styled.div`
  display: flex;
  justify-content: space-around;
  width: 85%;
  flex-wrap: wrap;
  @media screen and (max-width: 425px) {
    flex-direction: column;
  }
`;

const ProductLeft = styled.div``;

const ToolBar = styled.div`
  margin-bottom: 40px;
  @media screen and (max-width: 425px) {
    /* display: none; */
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
  }
`;

const BottomWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 100px;
`;

const Bottom = styled.div`
  background-color: #f9f9f9;
  padding-bottom: 300px;
`;

// const Container = styled.div``;

// const Container = styled.div``;

const TopWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 84vh;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    height: unset;
  }
`;

const Left = styled.div`
  flex: 0.35;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    flex: 1;
  }
`;

const LeftH2 = styled.div`
  font-size: 30px;
  color: rgb(202, 54, 8);
  @media screen and (max-width: 768px) {
    margin-top: 40px;
  }
`;

const LeftH1 = styled.div`
  font-size: 50px;
  margin-top: 20px;
  font-family: "exo";
  font-weight: 500;
`;

const LeftP = styled.div`
  margin-top: 10px;
  opacity: 0.7;
`;

const LeftButton = styled.div`
  margin-top: 30px;
`;

const Right = styled.div`
  flex: 0.7;
  height: 100%;
  position: relative;
`;

const RightWrapper = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: -1;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    transition: all 500ms linear;
  }
`;

const LeftWrapper = styled.div`
  height: 100%;
  background: #e8ecef;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 40px;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-bottom: 40px;
  }
`;

const Wrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
  width: 100%;
  height: 100%;
  color: white;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
`;

const TextHolder = styled.div`
  margin: 100px;
  text-align: right;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 30px;
`;

const Head = styled.div`
  margin-bottom: 20px;
`;

const Text = styled.div`
  max-width: 500px;
  font-size: 24px;
  opacity: 0.7;
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
