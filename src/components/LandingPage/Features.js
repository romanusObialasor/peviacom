import React from "react";
import styled from "styled-components";
import { TopHeadIcon } from "../SVG/SVGs";
import { HiOutlineWrenchScrewdriver } from "react-icons/hi2";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { PiSunBold } from "react-icons/pi";
import { GiBatteryPackAlt } from "react-icons/gi";
import { FaArrowRightLong } from "react-icons/fa6";

const Features = () => {
  return (
    <Container>
      <Head>
        <TopHeadIcon />
        <span>Benefits</span>
      </Head>
      <SubHead>Why Energy Storage</SubHead>
      <Wrapper>
        <Card>
          <Icon>
            <GiBatteryPackAlt />
          </Icon>
          <Title>Long-Lasting Power</Title>
          <Text>
            Enjoy uninterrupted energy with our durable and efficient battery
            solutions.
          </Text>
          <Button>
            Learn More{" "}
            <span>
              <FaArrowRightLong />
            </span>
          </Button>
        </Card>
        <Card>
          <Icon>
            <PiSunBold />
          </Icon>
          <Title>Clean Energy</Title>
          <Text>
            Harness the power of the sun for a sustainable and eco-friendly
            future.
          </Text>
          <Button>
            Learn more{" "}
            <span>
              <FaArrowRightLong />
            </span>
          </Button>
        </Card>
        <Card>
          <Icon>
            <AiOutlineThunderbolt />
          </Icon>
          <Title>Reliable Performance</Title>
          <Text>
            Our systems are built for consistent and dependable energy delivery.
          </Text>
          <Button>
            Learn more{" "}
            <span>
              <FaArrowRightLong />
            </span>
          </Button>
        </Card>
        <Card>
          <Icon>
            <HiOutlineWrenchScrewdriver />
          </Icon>
          <Title>Expert Support</Title>
          <Text>
            Get access to professional maintenance and support services.
          </Text>
          <Button>
            Learn more{" "}
            <span>
              <FaArrowRightLong />
            </span>
          </Button>
        </Card>
      </Wrapper>
      <Listing>
        <ListWrapper>
          <ListCard>
            <h2>80+</h2>
            <h3>Projected Completed</h3>
            <Number>80+</Number>
          </ListCard>
          <ListCard>
            <h2>93k</h2>
            <h3>Happy Clients</h3>
            <Number>93k</Number>
          </ListCard>
          <ListCard>
            <h2>100k</h2>
            <h3>Item Sold</h3>
            <Number>100k</Number>
          </ListCard>
        </ListWrapper>
      </Listing>
    </Container>
  );
};

export default Features;

// const Listing = styled.div``

const Number = styled.div`
  position: absolute;
  right: -0px;
  z-index: -1;
  font-size: 100px;
  color: transparent;
  font-weight: bolder;
  -webkit-text-stroke: 2px white;
  opacity: 0.1;
`;

const ListCard = styled.div`
  h2 {
    font-size: 40px;
    line-height: 0;
    font-weight: 600;
  }
  h3 {
    margin-top: 15px;
    font-weight: 500;
    line-height: 0;
    font-size: 20px;
  }
  position: relative;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  z-index: 10;
  width: 250px;
`;

const ListWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

const Listing = styled.div`
  color: white;
  font-family: "exo", sans-serif;
  background: #1b1b1b;
  width: 100%;
  height: 250px;
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    z-index: 1;
    color: pink;
    flex: 1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-image: url("/assets/background2.jpg");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    opacity: 0.1;
  }
`;

const Container = styled.div`
  padding-top: 100px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #f9f9f9;
`;

const Head = styled.div`
  display: flex;
  align-items: center;
  margin-top: 50px;
  span {
    margin-left: 16px;
    margin-bottom: 5px;
    font-size: 20px;
    font-weight: 500;
    color: #23769e;
    font-family: "Exo", serif;
  }
`;

const SubHead = styled.h2`
  font-family: "Exo", serif;
  margin: 0;
  font-size: 40px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 96%;
  margin-top: 60px;
`;

const Card = styled.div`
  width: 240px;
  height: 240px;
  background: white;
  border-radius: 10px;
  text-align: center;
  padding: 30px;
  overflow: hidden;
  background-color: #fff; /* Card background */
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1); // 0 6px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-10px); /* Lift effect on hover */
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.15), 0 10px 10px rgba(0, 0, 0, 0.12); /* Enhanced shadow on hover */
  }
`;

const Icon = styled.div`
  font-size: 44px;
  opacity: 0.5;
`;

const Title = styled.div`
  margin-top: 20px;
  font-size: 22px;
  font-family: "exo", sans-serif;
  font-weight: 600;
`;

const Text = styled.div`
  margin-top: 20px;
  opacity: 0.5;
  line-height: 1.4;
`;

const Button = styled.div`
  margin-top: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    line-height: 0;
    padding: 0;
    margin: 0;
    margin-left: 10px;
  }
`;

// const Wrapper = styled.div``;

// const Wrapper = styled.div``;

// const Wrapper = styled.div``;

// const Wrapper = styled.div``;
