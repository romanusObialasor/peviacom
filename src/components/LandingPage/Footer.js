import { Checkbox } from "@mui/material";
import React, { useState } from "react";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { GrSend } from "react-icons/gr";
import { IoArrowForward } from "react-icons/io5";
import { LiaHeadsetSolid } from "react-icons/lia";
import { SlSocialFacebook } from "react-icons/sl";
import { Link } from "react-router-dom";
import styled from "styled-components";
import emailjs from "emailjs-com";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isChecked, setIsChecked] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setIsEmailValid(true);
    // Reset validation when user types
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setIsEmailValid(false);
      return;
    }

    if (!isChecked) {
      alert("Please agree to the terms and conditions.");
      return;
    }

    // EmailJS configuration
    const templateParams = {
      to_email: "robialasor5@gmail.com", // Replace with your email
      from_email: email,
      message: `Hello, this is my email (${email}). I am open for notifications from you concerning your product.`,
    };

    emailjs
      .send(
        "service_gfzsfki", // Replace with your EmailJS service ID
        "template_ft39o4e", // Replace with your EmailJS template ID
        templateParams,
        "K2HhsBBn2P6wrvZ5y" // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          alert("Email sent successfully!");
          setEmail(""); // Reset email input
          setIsChecked(false); // Reset checkbox
        },
        (error) => {
          alert("Failed to send email. Please try again.");
        }
      );
  };

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const items = [
    "Solar Power Solutions",
    "Solar Inverters",
    "Solar Panels",
    "SMF Batteries",
    "Solar Boreholes",
    "Solar Street Lights",
  ];

  return (
    <Container>
      <TopComponent>
        <TopWrapper>
          <TopText>Peviacom believes in sustainable energy practices</TopText>
          <TopImage src="/assets/asset21.png" alt="componentImage" />
          <TopButton>
            <LeftIcon>
              <LiaHeadsetSolid />
            </LeftIcon>
            <ButtonHolder>
              <ButtonHead>+234 701 551 4272</ButtonHead>
              <ButtonSpan>Call us anytime</ButtonSpan>
            </ButtonHolder>
          </TopButton>
        </TopWrapper>
      </TopComponent>
      <Wrapper>
        <Box>
          <Header>About</Header>
          <Text>
            Peviacom International Nig. Ltd provides innovative solar and power
            solutions, delivering reliable energy products to light up
            communities, businesses, and projects with sustainable technologies.
          </Text>
          <Icons>
            <Icon
              href="https://www.facebook.com/share/1MzrC3fi2D/?mibextid=LQQJ4d"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SlSocialFacebook />
            </Icon>
            <Icon
              href="https://x.com/peviacomng24?t=YHrrt-2iE-9o7v16AHPIwQ&s=09"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CiTwitter />
            </Icon>
            <Icon
              href="https://www.instagram.com/peviacomng24?igsh=azN6MHVqZGlnNnpr"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </Icon>
          </Icons>
        </Box>
        <Box>
          <Header>Company</Header>
          <Text
            to="/"
            onClick={() => {
              scrollToSection("header");
            }}
          >
            <Arrow>
              <IoArrowForward />{" "}
            </Arrow>
            <span>Home</span>
          </Text>

          <Text
            onClick={() => {
              scrollToSection("product");
            }}
          >
            <Arrow>
              <IoArrowForward />{" "}
            </Arrow>
            <span>Products</span>
          </Text>
          <Text
            onClick={() => {
              scrollToSection("about");
            }}
          >
            <Arrow>
              <IoArrowForward />{" "}
            </Arrow>
            <span>About</span>
          </Text>
          <Text
            onClick={() => {
              scrollToSection("services");
            }}
          >
            <Arrow>
              <IoArrowForward />{" "}
            </Arrow>
            <span>Services</span>
          </Text>
          <Text
            onClick={() => {
              scrollToSection("reviews");
            }}
          >
            <Arrow>
              <IoArrowForward />{" "}
            </Arrow>
            <span>Reviews</span>
          </Text>
        </Box>
        <Box>
          <Header>Our Services</Header>
          {items.map((item, index) => (
            <Link
              to="/about_Page"
              key={index}
              style={{
                textDecoration: "none",
              }}
            >
              {" "}
              {/* Route to the about_Page */}
              <Text>
                <Arrow>
                  <IoArrowForward />{" "}
                </Arrow>
                <span>{item}</span>
              </Text>
            </Link>
          ))}
        </Box>
        <Right onSubmit={handleSubmit}>
          <Header>Subscribe</Header>
          <Form>
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={handleEmailChange}
            />
            <Button type="submit" disabled={!isChecked || !email}>
              <GrSend />
            </Button>
          </Form>
          <Agree>
            <Check
              type="checkbox"
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
              style={{
                marginLeft: "-11px",
              }}
            />
            <label>I agree to the terms and conditions</label>
          </Agree>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Footer;

const TopComponent = styled.div`
  position: absolute;
  background-color: #23769e;
  text-align: center;
  top: -150px;
  width: 90%;
  height: 250px;
  border-radius: 20px;
  overflow: hidden;
  display: flex;

  @media screen and (max-width: 768px) {
    z-index: -1;
    height: 500px;
    top: -360px;
  }
`;

const TopWrapper = styled.div`
  margin: 24px;
  flex: 1;
  display: flex;
  align-items: center;
  border-radius: 15px;
  justify-content: space-around;
  border: 2px dashed rgba(0, 0, 0, 0.2);
  @media screen and (max-width: 768px) {
    position: relative;
    flex-wrap: wrap;
  }
  @media screen and (max-width: 768px) {
    padding: 0 20px;
  }
`;

const TopText = styled.div`
  font-family: "Exo", sans-serif;
  font-weight: 600;
  font-size: 30px;
  max-width: 300px;
  text-align: left;
  color: white;
`;

const TopImage = styled.img`
  @media screen and (max-width: 768px) {
    position: absolute;
    right: 0;
    z-index: -1;
  }
  @media screen and (max-width: 425px) {
    right: 0;
    bottom: -30px;
  }
`;

const TopButton = styled.div`
  background: #1b1b1b;
  display: flex;
  align-items: center;
  padding: 16px 20px;
  color: white;
  border-radius: 100px;
  @media screen and (max-width: 375px) {
    padding-right: 0;
  }
`;

const LeftIcon = styled.div`
  font-size: 24px;
  line-height: 0;
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: 10px;
  border-radius: 100px;
  @media screen and (max-width: 375px) {
    font-size: 14px;
  }
`;

const ButtonHolder = styled.div`
  margin: 0 14px;
  @media screen and (max-width: 375px) {
    margin-left: 6px;
    width: fit-content;
  }
`;

const ButtonHead = styled.div`
  font-weight: 600;
  @media screen and (max-width: 375px) {
    font-size: 14px;
  }
  @media screen and (max-width: 375px) {
    font-size: 12px;
  }
`;

const ButtonSpan = styled.div`
  margin-top: 5px;
  opacity: 0.7;
  font-weight: lighter;
  @media screen and (max-width: 375px) {
    font-size: 12px;
  }
  @media screen and (max-width: 375px) {
    font-size: 10px;
  }
`;

const Container = styled.div`
  width: 100%;
  /* height: 80vh; */
  background: #1b1b1b;
  /* color: white; */
  padding: 120px 0;
  background-image: url("/assets/shape-13.png");
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: contain;
  position: relative;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 768px) {
    z-index: -1;
  }
`;

const Wrapper = styled.div`
  margin: 0 50px;
  /* height: 100%; */
  display: flex;
  justify-content: space-between;
  flex: 1;
  margin-top: 50px;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: fit-content;
    flex: unset;
  }
`;

const Box = styled.div`
  max-width: 280px;
  @media screen and (max-width: 1024px) {
    margin-bottom: 70px;
    /* background-color: blue; */
  }
`;

const Header = styled.div`
  font-size: 28px;
  font-family: "Exo", "san-serif";
  font-weight: 600;
  /* color: #23769e; */
  color: white;
  display: flex;
  flex-direction: column;

  &::after {
    content: "";
    background-color: #23769e;
    height: 2px;
    width: 60px;
    margin: 10px 0;
    /* position: absolute; */
  }
`;

const Text = styled.div`
  color: white;
  margin-top: 14px;
  line-height: 1.5;
  opacity: 0.4;
  font-size: 15px;
  display: flex;
  align-items: center;

  span {
    margin-left: 10px;
    font-weight: 300;
    font-size: 16px;
    padding: 5px 0;
    cursor: pointer;
    text-decoration: unset;
  }
`;

const Icons = styled.div`
  display: flex;
  margin-top: 30px;
`;

const Icon = styled.a`
  padding: 18px;
  background-color: white;
  border-radius: 50px;
  margin-right: 16px;
  line-height: 0;
  cursor: pointer;
  color: unset;
`;

const Arrow = styled.div`
  line-height: 0;
  margin: 0;
  padding: 0;
`;

const Form = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  width: 100%;
`;

const Input = styled.input`
  width: 280px;
  height: 55px;
  outline: none;
  border: none;
  border-radius: 5px 0 0 5px;
  background-color: #272727;
  color: white;
  line-height: 1.5;
  opacity: 0.7;
  font-size: 16px;
  padding-left: 20px;
  @media screen and (max-width: 375px) {
    width: 250px;
  }
  @media screen and (max-width: 320px) {
    width: 200px;
  }
`;

const Button = styled.button`
  border-radius: 5px;
  cursor: pointer;
  height: 55px;
  width: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #23769e;
  color: white;
`;

const Agree = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;

  label {
    color: white;
    opacity: 0.4;
  }
`;

const Right = styled.form``;

const Check = styled(Checkbox)``;

// const Wrapper = styled.div``;

// const Wrapper = styled.div``;

// const Wrapper = styled.div``;

// const Wrapper = styled.div``;
