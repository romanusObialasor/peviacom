import React, { useState, useEffect } from "react";
import { CiLocationOn } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { DefaultButton } from "../Actions";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import CartProduct from "./CartProduct";

const Header = ({ removeFromCart, cartItems }) => {
  const [isSticky, setIsSticky] = useState(false);

  const checkOutFunction = () => {
    let message = "Hi, I am interested in the following products:\n";

    cartItems.forEach((item) => {
      message += `\nProduct: ${item.name}\nPrice: ₦${item.price}\nImage: https://peviacom-test.vercel.app${item.image}\n`;
    });

    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "+2348084274608"; // Replace with your number
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  };

  // Checkout button click handler
  const handleCheckoutClick = () => {
    window.open(checkOutFunction(), "_blank");
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsSticky(scrollPosition > 600); // Adjust the value based on when you want it fixed
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [isBackgroundVisible, setIsBackgroundVisible] = useState(false);
  const [test, setTest] = useState(false);
  const phoneNumber = "+2348084274608";

  const createWhatsAppLink = () => {
    const message = `Hi there, I would love to discuss the products offered by Peviacom in more detail`;
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  };

  const handleChange = (event) => {
    setIsBackgroundVisible((prev) => !prev);
    setTest(event.target.checked);

    const menu = document.getElementById("menu");
    const icon = document.getElementById("icon");
    const icon1 = document.getElementById("icon1");

    if (!test) {
      if (menu || icon) {
        menu.style.cssText = `
          left: 0;
        `;
        icon.style.cssText = `
        stroke: white;
         `;
        icon1.style.cssText = `
            stroke: white;
          `;
      }
    }
    // initial
    else {
      if (menu || icon) {
        menu.style.cssText = `
            left: -480px;
        `;

        icon.style.cssText = `
            stroke: #1b1b1b;
         `;
        icon1.style.cssText = `
            stroke: #1b1b1b;
        `;
      }
    }
  };
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const numberOfItems = cartItems.length;

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (open) => {
    setOpen(open);
  };

  const list = () => (
    <MobileCart
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        py: 3,
      }}
      role="presentation"
      // onClick={() => toggleDrawer(false)}
      onKeyDown={() => toggleDrawer(false)}
    >
      <ToolBar>
        <Title>
          Cart<span>({numberOfItems})</span>
        </Title>
        <Cancle>
          <CloseIcon onClick={() => toggleDrawer(false)} />
        </Cancle>
      </ToolBar>

      {cartItems.length === 0 ? (
        <NotFound>
          <NotImage src="/assets/notFound.jpg" alt="no item found" />
          <p>No items in the cart.</p>
        </NotFound>
      ) : (
        <Content>
          <Cards>
            {cartItems.map((item, index) => (
              <CartProduct
                key={index}
                details="Still In Stock"
                image={item.image}
                name={item.name}
                price={item.price}
                onDelete={() => removeFromCart(index)}
              />
            ))}
          </Cards>
          <CheckOut onClick={handleCheckoutClick}>Check out</CheckOut>
        </Content>
      )}
    </MobileCart>
  );

  return (
    <Container id="header" className={isSticky ? "header sticky" : ""}>
      <Wrapper>
        <LogoHolder>
          <Logo src="/assets/asset1.png" alt="logo" />
        </LogoHolder>
        <Linker>
          <Links to="/">Home</Links>
          <Links
            to="/"
            onClick={() => {
              scrollToSection("product");
            }}
          >
            Products
          </Links>
          <Links
            to="/"
            onClick={() => {
              scrollToSection("about");
            }}
          >
            About
          </Links>
          <Links
            to="/"
            onClick={() => {
              scrollToSection("services");
            }}
          >
            Services
          </Links>
          <Links
            to="/"
            onClick={() => {
              scrollToSection("reviews");
            }}
          >
            Reviews
          </Links>
        </Linker>
        <ButtonMobile onClick={() => toggleDrawer(true)}>
          <PiShoppingCartThin />
          <span>{numberOfItems}</span>
        </ButtonMobile>
        <Buttons>
          <Button onClick={() => toggleDrawer(true)}>
            <PiShoppingCartThin />
            <span>{numberOfItems}</span>
          </Button>
          <Button
            style={{
              marginRight: "20px",
            }}
          >
            <a
              href="https://www.google.com/maps/dir//123,+6+Milaco+Plaza+123%2F125+Ago+Palace+Way+Ilasamaja+Lagos+NG,+123%2F125+Ago+Palace+Way,+Ilasamaja,+Lagos/@6.5023265,3.222403,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x103b8eddc6704243:0xfaf3dcc893f6f183!2m2!1d3.3047728!2d6.5023693?entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              style={{
                color: "unset",
              }}
            >
              <CiLocationOn />
            </a>
          </Button>
          <a
            href={createWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
          >
            <DefaultButton text="Lets Talk" show />
          </a>
        </Buttons>
        <StyledWrapper>
          <label className="hamburger" htmlFor="myCheckbox">
            <input
              type="checkbox"
              id="myCheckbox"
              value="Example Value"
              checked={isBackgroundVisible}
              onChange={handleChange}
            />
            <svg viewBox="0 0 32 32">
              <path
                id="icon"
                className="line line-top-bottom"
                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
              />
              <path id="icon1" className="line" d="M7 16 27 16" />
            </svg>
          </label>
        </StyledWrapper>
        <Background
          id="background"
          className={isBackgroundVisible ? "show" : "vanish"}
        >
          hello world
        </Background>
        <Menu id="menu">
          <InnerWrapper>
            <MenuLogo src="/assets/asset1.png" alt="logo" />
            <MenuLinker>
              <Links to="/">Home</Links>
              <Links>Products</Links>
              <Links>About</Links>
              <Links>Services</Links>
              <Links>Reviews</Links>
            </MenuLinker>
            <MenuButtons>
              <Button>
                <PiShoppingCartThin />
              </Button>
              <Button
                style={{
                  marginRight: "20px",
                }}
              >
                <CiLocationOn />
              </Button>
            </MenuButtons>
          </InnerWrapper>
        </Menu>
      </Wrapper>

      <Drawer anchor="right" open={open} onClose={() => toggleDrawer(false)}>
        {list()}
      </Drawer>
    </Container>
  );
};

export default Header;

const shower = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const vanish = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const Cards = styled.div`
  width: 100%;
`;

const CheckOut = styled.div`
  background-color: #2b2b2b;
  padding: 14px 0;
  width: 90%;
  border-radius: 5px;
  text-align: center;
  margin-bottom: 20px;
  color: white;
  cursor: pointer;
`;

const NotImage = styled.img`
  height: 250px;
  opacity: 0.5;
`;

const NotFound = styled.div`
  text-align: center;
  width: 90%;
  height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  p {
    font-family: "exo";
  }
`;

const Content = styled.div`
  width: 90%;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 80vh;
`;

const Cancle = styled.div`
  cursor: pointer;
`;

const Title = styled.div`
  font-family: "exo", sans-serif;
  font-size: 18px;
  font-weight: 600;
  span {
    margin-left: 5px;
    font-size: 14px;
    opacity: 0.5;
  }
`;

const ToolBar = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  align-items: center;
`;

const Background = styled.div`
  position: fixed;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  top: 0;
  right: 0;
  bottom: 0;
  transition: opacity 300ms ease, visibility 300ms ease;
  visibility: hidden;
  opacity: 0;

  &.show {
    visibility: visible;
    opacity: 1;
    animation: ${shower} 500ms linear;
  }

  &.vanish {
    animation: ${vanish} 500ms linear;
  }
`;

const MenuButtons = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

const MenuLogo = styled.img`
  width: 300px;
  margin-left: 20px;
  @media screen and (max-width: 425px) {
    width: 200px;
  }
`;

const MenuLinker = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 30px;
`;

const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin-top: 50px;
`;

const Menu = styled.div`
  background: #1b1b1b;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
  position: absolute;
  left: -480px;
  top: 0;
  bottom: 0;
  width: 480px;
  transition: all 500ms;

  @media screen and (max-width: 425px) {
    width: 100%;
    height: fit-content;
    padding-bottom: 70px;
  }
`;

const StyledWrapper = styled.div`
  z-index: 100;
  display: none;
  @media screen and (max-width: 1024px) {
    display: block;
  }
  @media screen and (max-width: 425px) {
    stroke-width: 2;
  }
  .hamburger {
    cursor: pointer;
  }

  .hamburger input {
    display: none;
  }

  .hamburger svg {
    height: 3em;
    transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .line {
    fill: none;
    stroke: #1b1b1b;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 3;
    transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
      stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
    z-index: 1;
    @media screen and (max-width: 425px) {
      stroke-width: 2;
    }
  }

  .line-top-bottom {
    stroke-dasharray: 12 63;
  }

  .hamburger input:checked + svg {
    transform: rotate(-45deg);
  }

  .hamburger input:checked + svg .line-top-bottom {
    stroke-dasharray: 20 300;
    stroke-dashoffset: -32.42;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  width: 90%;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  width: 100%;

  &.header.sticky {
    position: fixed;
    top: 0;
    left: 0;
    background-color: white;
    box-shadow: 0 3px 10px 2px rgba(0, 0, 0, 0.1);
    z-index: 1000;
  }
`;

const LogoHolder = styled.div`
  height: 100%;
  flex: 0.4;
  @media screen and (max-width: 425px) {
    height: 80%;
  }
`;

const Logo = styled.img`
  height: 100%;
`;

const Linker = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const Links = styled(Link)`
  margin: 26px;
  font-weight: 500;
  cursor: pointer;
  color: #1b1f21;
  font-size: 17px;
  text-decoration: none;
  opacity: 0.8;
  transition: all 250ms;

  &:hover {
    opacity: 1;
  }

  @media screen and (max-width: 1024px) {
    color: white;
    margin-top: 20px;
    height: 40px;
    position: relative;

    &:before {
      content: "→";
      position: absolute;
      right: 0;
      opacity: 0.5;
    }

    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 1px;
      background-color: white;
      opacity: 0.2;
      border-radius: 10px;
    }
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 728px) {
    display: none;
  }
  a {
    text-decoration: none !important;
  }
`;

const ButtonMobile = styled.div`
  padding: 20px;
  background: white;
  border-radius: 100px;
  margin: 10px;
  line-height: 0;
  cursor: pointer;
  position: relative;
  display: none;
  box-shadow: 0px 6px 18px 2px rgba(0, 0, 0, 0.1);
  @media screen and (max-width: 1024px) {
    margin-right: 30px;
  }
  @media screen and (max-width: 425px) {
    display: block;
  }
  span {
    position: absolute;
    background-color: rgb(202, 2, 2);
    width: 30px;
    height: 30px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    color: white;
    font-size: 14px;
    top: -10px;
    right: -10px;
  }
`;
const Button = styled.div`
  padding: 20px;
  background: white;
  border-radius: 100px;
  margin: 10px;
  line-height: 0;
  cursor: pointer;
  position: relative;
  box-shadow: 0px 6px 18px 2px rgba(0, 0, 0, 0.1);
  @media screen and (max-width: 1024px) {
    margin-right: 30px;
  }

  span {
    position: absolute;
    background-color: rgb(202, 2, 2);
    width: 30px;
    height: 30px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100px;
    color: white;
    font-size: 14px;
    top: -10px;
    right: -10px;
  }
`;

const MobileCart = styled(Box)`
  width: 400px;

  @media screen and (max-width: 425px) {
    width: 320px;
  }
`;
