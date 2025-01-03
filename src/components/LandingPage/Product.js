import React from "react";
import styled from "styled-components";
import { TopHeadIcon } from "../SVG/SVGs";
import { PiShoppingCartThin } from "react-icons/pi";
import data from "../data.json";
import { DefaultButton } from "../Actions";
import { Link } from "react-router-dom";

const Product = ({ addToCart }) => {
  return (
    <Container id="product">
      <Wrapper>
        <Head>
          <TopHeadIcon />
          <span>Our Products</span>
        </Head>
        <SubHead>Explore Our Premium Products</SubHead>
        <Products>
          {data.slice(0, 4).map((product) => (
            <ProductCard key={product.id}>
              <ImageHolder>
                <Image src={product.image} alt="product image" />
              </ImageHolder>
              <Bottom
                className="product_card"
                onClick={() => addToCart(product)}
              >
                <Icons>
                  <span>Add to cart </span>{" "}
                  <Order>
                    <PiShoppingCartThin />
                  </Order>
                </Icons>
                <Name>{product.name}</Name>
                <Price>{product.price}</Price>
              </Bottom>
            </ProductCard>
          ))}
        </Products>
        <Linker>
          <Link
            to="/productPage"
            style={{
              textDecoration: "none",
            }}
          >
            <DefaultButton text="See More" />
          </Link>
        </Linker>
      </Wrapper>
    </Container>
  );
};

export default Product;

const Container = styled.div`
  width: 100%;
  background: #f9f9f9;
  padding-bottom: 60px;
`;

const Wrapper = styled.div`
  margin: 0 50px;
  padding-top: 120px;
  @media screen and (max-width: 320px) {
    margin: 0;
  }
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-left: 16px;
    margin-bottom: 5px;
    font-size: 20px;
    font-weight: 500;
    color: #23769e;
    font-family: "Exo", serif;
  }
  @media screen and (max-width: 425px) {
    justify-content: center;
  }
`;

const SubHead = styled.h2`
  font-family: "Exo", serif;
  margin: 0;
  font-size: 40px;
  @media screen and (max-width: 425px) {
    font-size: 30px;
    text-align: center;
  }
  @media screen and (max-width: 320px) {
    font-size: 25px;
  }
`;

const Products = styled.div`
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media screen and (max-width: 1024px) {
    align-items: center;
    justify-content: center;
  }
  @media screen and (max-width: 320px) {
    width: 100%;
  }
`;

const ProductCard = styled.div`
  width: 270px;
  height: 320px;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin-bottom: 18px;
  box-shadow: 0 5px 20px 5px rgba(0, 0, 0, 0.1);
  @media screen and (max-width: 1024px) {
    margin: 20px;
  }
`;

const ImageHolder = styled.div`
  background-image: url("/assets/asset20.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  height: 170px;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    /* From https://css.glass */
    background: rgba(0, 0, 0, 0.27);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    border: 1px solid rgba(255, 255, 255, 0.3);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  position: relative;
  z-index: 1;
`;

const Name = styled.div`
  font-family: "Exo", serif;
  max-width: 80%;
  text-align: center;
  font-weight: 600;
  font-size: 16px;
  opacity: 0.7;
`;

const Price = styled.div`
  margin-top: 18px;
  font-size: 20px;
  font-weight: 500;
  opacity: 0.7;
`;

const Bottom = styled.div`
  background-color: white;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 20px;
`;

const Icons = styled.div`
  margin-bottom: 14px;
  display: flex;
  align-items: center;
  z-index: 1;
  cursor: pointer;
  /* color: #7c0029; */
  color: #23769e;

  transition: all 500ms;
  span {
    margin-right: 10px;
  }
  &:hover {
    opacity: 1;
  }
`;

const Order = styled.div`
  line-height: 0;
  cursor: pointer;
  a {
    color: unset;
  }
`;

const Linker = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  text-decoration: none;
`;

// const Container = styled.div``

// const Container = styled.div``

// const Container = styled.div``

// const Container = styled.div``
