import React from "react";
import styled, { keyframes } from "styled-components";
import { DefaultButton, VideoButton } from "../Actions";
import { Rotator, TopHeadIcon } from "../SVG/SVGs";

const revolve = keyframes`
    from{
      transform: rotate(0);
    }
    to{
      transform: rotate(360deg);
    }
  `;
const Hero = () => {
  return (
    <Container>
      <Left>
        <LeftWrapper>
          <TopHead>
            <TopHeadIcon />
            <span>Energy Storage</span>
          </TopHead>
          <Head>Empowering Tomorrow with Solar Energy And Storage</Head>
          <SubHead>
            Welcome to Peviacom, where innovation meets sustainability. Join us
            in creating brighter communities with reliable solar energy
            solutions.
          </SubHead>
          <CallToAction>
            <DefaultButton text="Discover Now" />
            <VideoButton />
          </CallToAction>
        </LeftWrapper>
      </Left>
      <Right>
        <Rotate>
          <Rotator />
        </Rotate>
      </Right>
    </Container>
  );
};

export default Hero;

const Container = styled.div`
  display: flex;
  height: 100vh;
  @media screen and (max-width: 1024px) {
    flex-direction: column;
    height: 200vh;
  }
`;

const Left = styled.div`
  flex: 0.5;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  flex-direction: column;
  @media screen and (max-width: 1024px) {
    width: 100%;
    margin-top: 50px;
    /* display: none; */
  }
`;

const TopHead = styled.div`
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
  @media screen and (max-width: 1024px) {
    width: fit-content;
  }
`;

const Head = styled.h1`
  font-size: 56px;
  max-width: 92%;
  font-family: "Exo", serif;
  font-optical-sizing: auto;
  margin-top: 0;
  @media screen and (max-width: 1024px) {
    font-size: 40px;
    max-width: 70%;
  }
  @media screen and (max-width: 425px) {
    font-size: 34px;
    max-width: 90%;
  }
`;

const SubHead = styled.h3`
  font-weight: 400;
  margin-bottom: 50px;
  max-width: 90%;
  opacity: 0.7;
  @media screen and (max-width: 1024px) {
    max-width: 50%;
  }
  @media screen and (max-width: 425px) {
    max-width: 90%;
    font-size: 14px;
    line-height: 1.6;
  }
`;

const LeftWrapper = styled.div`
  width: fit-content;
  margin-left: 50px;
  @media screen and (max-width: 425px) {
    /* background-color: gold; */
    margin-left: 30px;
  }
`;

const CallToAction = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 1024px) {
    /* width: fit-content; */
  }
  @media screen and (max-width: 425px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Right = styled.div`
  flex: 0.5;
  position: relative;
  background-image: url("/assets/asset3.jpeg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media screen and (max-width: 1024px) {
    width: 100%;
    margin-top: 50px;
  }
`;

const Rotate = styled.div`
  position: absolute;
  top: 40px;
  left: -60px;
  animation: ${revolve} 8s linear infinite;
  cursor: pointer;
  /* background: pink; */

  @media screen and (max-width: 1024px) {
    left: unset;
    right: 5px;
  }
`;

// const Container = styled.div``;

// const Container = styled.div``;

// const Container = styled.div``;

// const Container = styled.div``;

// const Container = styled.div``;
