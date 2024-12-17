import React from "react";
import styled from "styled-components";
import { TopHeadIcon } from "../SVG/SVGs";
import { MdOutlineEnergySavingsLeaf } from "react-icons/md";
import { LiaCarBatterySolid } from "react-icons/lia";
import { SlEnergy } from "react-icons/sl";
import { PiSolarPanelThin } from "react-icons/pi";

const Services = () => {
  return (
    <Container>
      <Head>
        <TopHeadIcon />
        <span>Services</span>
      </Head>
      <SubHead>What We Offer</SubHead>
      <Cards>
        <CardHolder>
          <ImageHolder>
            <Image src="/assets/services1.jpg" className="image" />
          </ImageHolder>
          <DetailsHolder>
            <Icon className="icon">
              <MdOutlineEnergySavingsLeaf />
            </Icon>
            <Box>
              <div>
                Energy <br />
                Auditing
              </div>
            </Box>
            <Read className="read">
              <span />
              <ButtonText>Read more</ButtonText>
            </Read>
          </DetailsHolder>
        </CardHolder>
        <CardHolder>
          <ImageHolder>
            <Image src="/assets/services3.jpeg" className="image" />
          </ImageHolder>
          <DetailsHolder>
            <Icon className="icon">
              <LiaCarBatterySolid />
            </Icon>
            <Box>
              <div>
                Battery
                <br /> Maintenance
              </div>
            </Box>
            <Read className="read">
              <span />
              <ButtonText>Read more</ButtonText>
            </Read>
          </DetailsHolder>
        </CardHolder>
        <CardHolder>
          <ImageHolder>
            <Image src="/assets/services2.jpeg" className="image" />
          </ImageHolder>
          <DetailsHolder>
            <Icon className="icon">
              <SlEnergy />
            </Icon>
            <Box>
              <div>
                Power
                <br /> Solutions
              </div>
            </Box>
            <Read className="read">
              <span />
              <ButtonText>Read more</ButtonText>
            </Read>
          </DetailsHolder>
        </CardHolder>
        <CardHolder>
          <ImageHolder>
            <Image src="/assets/about1.jpg" className="image" />
          </ImageHolder>
          <DetailsHolder>
            <Icon className="icon">
              <PiSolarPanelThin />
            </Icon>
            <Box>
              <div>
                Solar
                <br />
                Installation
              </div>
            </Box>
            <Read className="read">
              <span />
              <ButtonText>Read more</ButtonText>
            </Read>
          </DetailsHolder>
        </CardHolder>
      </Cards>
    </Container>
  );
};

export default Services;

const Container = styled.div`
  width: 100%;
  /* height: 100vh; */
  /* background: #f8f7f3; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-top: 70px;
  padding-bottom: 100px;
  @media screen and (max-width: 768px) {
    height: auto;
  }
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

const Cards = styled.div`
  display: flex;
  margin-top: 50px;
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
    margin-top: 30px;
    justify-content: center;
  }
`;

const CardHolder = styled.div`
  margin: 0 17px;
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  height: 420px;
  :hover {
    .image {
      transform: scale(1.1);
    }
    .icon {
      background: #1b1b1b;
    }
    .read {
      bottom: -38px;
    }
  }
  @media screen and (max-width: 768px) {
    margin-bottom: 70px;
  }
`;

const ImageHolder = styled.div`
  width: 288px;
  height: 341px;
  border-radius: 10px;

  overflow: hidden;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: all 350ms;
`;

const DetailsHolder = styled.div`
  position: absolute;
  bottom: 0px;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Icon = styled.div`
  width: 75px;
  height: 75px;
  border-radius: 10px;
  background-color: #23769e;
  position: absolute;
  top: -30px;
  font-size: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
  color: white;
  transition: all 350ms;
  z-index: 100;
`;

const Box = styled.div`
  font-weight: 600;
  font-size: 20px;
  width: 220px;
  height: 140px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  position: relative;
  z-index: 10;
  div {
    margin-top: 60px;
    text-align: center;
    font-family: "exo", sans-serif;
  }
`;

const Read = styled.div`
  height: 45px;
  background: #23769e;
  position: absolute;
  width: 120px;
  bottom: -0px;
  right: 0;
  overflow: hidden;
  border-radius: 0 5px 15px 15px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
  transition: all 350ms;
  cursor: pointer;
  span {
    width: 1px;
    height: 1px;
    transition: all 350ms;
    /* position: absolute; */
    margin-top: -30px;
    margin-left: -100px;
    border-radius: 100%;
  }
  :hover {
    span {
      transform: scale(240);
      background: rgba(0, 0, 0, 0.8);
    }
  }
`;

const ButtonText = styled.div`
  position: absolute;
  z-index: 100;
`;
