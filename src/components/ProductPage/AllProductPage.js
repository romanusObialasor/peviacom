import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Box, Button, Typography } from "@mui/material";

const ProductCard = ({ image, name, price, item, addToCart }) => {
  return (
    <CardContainer>
      <ImageHolder>
        <Image src={image} alt="product image" />
      </ImageHolder>
      <CardContent>
        <Typography
          variant="h6"
          sx={{ fontWeight: "600", fontFamily: "exo", fontSize: 20 }}
        >
          {name}
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: "grey.600", mt: 1, marginBottom: 5 }}
        >
          {price}
        </Typography>
        <AddToCartButton
          id="button"
          variant="outlined"
          onClick={() => {
            addToCart(item);
          }}
        >
          Add to Cart
        </AddToCartButton>
      </CardContent>
    </CardContainer>
  );
};

export default ProductCard;

// Styled Components
const CardContainer = styled(Box)`
  width: 280px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  overflow: hidden;
  background-color: #fff;
  transition: transform 0.2s ease;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 40px;

  &:hover {
    transform: translateY(-5px);
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

const CardContent = styled(Box)`
  padding: 16px;
  text-align: center;
`;

const AddToCartButton = styled(Button)`
  width: 100%;
  border-radius: 20px;
  font-size: 14px;
  font-weight: bold;
  text-transform: none;
  margin-top: 10px;
`;
