import React, { useState } from "react";
import { CiLocationOn } from "react-icons/ci";
import { PiShoppingCartThin } from "react-icons/pi";
import { Link } from "react-router-dom";
import styled, { keyframes } from "styled-components";
import { DefaultButton } from "../Actions";

const Header = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event) => {
    setIsChecked(event.target.checked);
    const menuWrapper = document.getElementById("menuWrapper");
    const menu = document.getElementById("menu");
    const icon = document.getElementById("icon");
    const icon1 = document.getElementById("icon1");

    // final

    if (!isChecked) {
      if (menuWrapper) {
        menuWrapper.style.cssText = `
          left: 0;
        `;
        icon.style.cssText = `
           stroke: white;
         `;
        icon1.style.cssText = `
            stroke: white;
          `;
        menu.style.cssText = `
          width: 460px;
          @media screen and (max-width: 320px) {
          width: 200px
          color: red;
  } z 6758
        `;
      }
    }
    // initial
    else {
      if (menuWrapper) {
        menuWrapper.style.cssText = `
          opacity: 0;
          left: -460px;

  `;
        //

        icon.style.cssText = `
      stroke: #1b1b1b;
  `;
        icon1.style.cssText = `
      stroke: #1b1b1b;
  `;
        menu.style.cssText = `
          
        `;
      }
    }
  };
  return (
    <Container>
      <Wrapper>
        <LogoHolder>
          <Logo src="/assets/asset1.png" alt="logo" />
        </LogoHolder>
        <Linker>
          <Links>Home</Links>
          <Links>Products</Links>
          <Links>About</Links>
          <Links>Services</Links>
          <Links>Blog</Links>
        </Linker>
        <Buttons>
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
          <DefaultButton text="Lets Talk" show />
        </Buttons>
        <StyledWrapper
          onClick={() => {
            // document.getElementById("menuId").style.color = "blue";
          }}
        >
          <label className="hamburger" htmlFor="myCheckbox">
            <input
              type="checkbox"
              id="myCheckbox"
              value="Example Value"
              checked={isChecked}
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
        <MenuWrapper id="menuWrapper">
          <Menu id="menu">
            <InnerWrapper>
              <MenuLogo src="/assets/asset1.png" alt="logo" />
              <MenuLinker>
                <Links>Home</Links>
                <Links>Products</Links>
                <Links>About</Links>
                <Links>Services</Links>
                <Links>Blog</Links>
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
        </MenuWrapper>
      </Wrapper>
    </Container>
  );
};

export default Header;

// const MenuWrapper = styled.div``

// const MenuWrapper = styled.div``

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
  height: 100%;
  z-index: 1000;
`;

const MenuWrapper = styled.div`
  position: fixed;
  left: -460px;
  bottom: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  transition: all 500ms;

  &:before {
    content: "";
    position: fixed;
    top: 0;
    background: rgba(0, 0, 0, 0.5);
    /* background-color: ; */
    backdrop-filter: blur(5.6px);
    color: white;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
  }
`;

const StyledWrapper = styled.div`
  z-index: 1;
  .hamburger {
    cursor: pointer;
  }

  .hamburger input {
    display: none;
  }

  .hamburger svg {
    /* The size of the SVG defines the overall size */
    height: 3em;
    /* Define the transition for transforming the SVG */
    transition: transform 600ms cubic-bezier(0.4, 0, 0.2, 1);
  }

  .line {
    fill: none;
    stroke: #1b1b1b;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-width: 3;
    /* Define the transition for transforming the Stroke */
    transition: stroke-dasharray 600ms cubic-bezier(0.4, 0, 0.2, 1),
      stroke-dashoffset 600ms cubic-bezier(0.4, 0, 0.2, 1);
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
  /* padding: 30px; */
  width: 90%;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  /* padding: 30px; */
  width: fit-content;
  width: 100%;
  /* position: absolute; */
  @media screen and (max-width: 1024px) {
  }
`;

const LogoHolder = styled.div`
  height: 100%;
  flex: 0.4;
`;

const Logo = styled.img`
  height: 100%;
`;

const Linker = styled.div`
  display: flex;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
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
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const Button = styled.div`
  padding: 20px;
  background: white;
  border-radius: 100px;
  margin: 10px;
  line-height: 0;
  cursor: pointer;
  box-shadow: 0px 6px 18px 2px rgba(0, 0, 0, 0.1);
  @media screen and (max-width: 1024px) {
    margin-right: 30px;
  }
`;

// const Container = styled.div``;

// const Container = styled.div``;

// const Container = styled.div``;

// const Container = styled.div``;
