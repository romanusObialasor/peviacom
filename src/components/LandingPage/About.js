import React from "react";
import styled, { keyframes } from "styled-components";
import { TopHeadIcon } from "../SVG/SVGs";
import { DefaultButton } from "../Actions";

const revolve = keyframes`
    from{
      transform: rotate(0);
    }
    to{
      transform: rotate(360deg);
    }
  `;

const About = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <GridWrapper>
            <Grid className="grid1" />
            <Grid className="grid2" />
            <Grid className="grid3" />
          </GridWrapper>
          <MiddleComp>
            <Rotate src="/assets/group10.png" alt="rotate" />
            <Logo src="/assets/logo3.png" alt="logo" />
          </MiddleComp>
        </Left>
        <Right>
          <TopHead>
            <TopHeadIcon />
            <span>About us</span>
          </TopHead>
          <Head>Learn about our mission </Head>
          <Text>
            Peviacom International Nig. Ltd is a forward-thinking company
            dedicated to providing innovative solar energy and power solutions.
            We specialize in renewable energy technologies, offering reliable
            products such as solar inverters, batteries, panels, and generators.
            Our mission is to illuminate communities, schools, offices, and
            government projects with sustainable energy solutions, empowering a
            brighter and greener future. At Peviacom, we don’t just deliver
            products—we provide tailored solutions to meet your unique energy
            needs.
          </Text>
          <DefaultButton text="Learn More" />
        </Right>
      </Wrapper>
    </Container>
  );
};

export default About;

// const Container = styled.div``

const Head = styled.h2`
  font-weight: 600;
  font-size: 40px;
  font-family: "exo", "san-serif";
  padding: 0;
  margin: 0;
  line-height: 1;
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
`;

const Text = styled.div`
  margin: 20px 0 40px 0;
  line-height: 1.7;
  max-width: 90%;
  opacity: 0.6;
`;

const Right = styled.div`
  flex: 0.5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 70px;
  @media screen and (max-width: 768px) {
    margin-left: unset;
    margin-top: 100px;
  }
  @media screen and (max-width: 320px) {
    flex: 0.7;
  }
`;

const Rotate = styled.img`
  animation: ${revolve} 8s linear infinite;
  height: 180px;
  @media screen and (max-width: 425px) {
    height: 140px;
  }
`;

const Logo = styled.img`
  position: absolute;
  height: 70px;
  width: 70px;
  object-fit: contain;
  border-radius: 100px;
  padding: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  @media screen and (max-width: 425px) {
    height: 50px;
    width: 50px;
  }
`;

const MiddleComp = styled.div`
  position: absolute;
  margin-bottom: 96px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  margin: 150px 0;
  @media screen and (max-width: 768px) {
    height: unset;
  }
`;

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  margin: 0 30px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
  @media screen and (max-width: 320px) {
    margin-right: unset;
  }
`;

const Left = styled.div`
  flex: 0.5;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 768px) {
    height: 500px;
    flex: unset;
  }
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(7, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  height: 100%;
  flex: 1;
`;

const Grid = styled.div`
  border-radius: 5px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  &.grid1 {
    grid-area: 2 / 1 / 7 / 2;
    background-image: url("/assets/about1.jpg");
  }

  &.grid2 {
    grid-area: 4 / 2 / 8 / 3;
    background-image: url("/assets/about2.jpg");
  }

  &.grid3 {
    grid-area: 1 / 2 / 4 / 3;
    background-image: url("/assets/about3.jpg");
  }
`;

// const Container = styled.div``

// const Container = styled.div``

// const Container = styled.div``

// const Container = styled.div``

// const Container = styled.div``

// const Container = styled.div``

// const Container = styled.div``

// .parent {

//     }

//     .div1 {  }
//     .div2 {  }
