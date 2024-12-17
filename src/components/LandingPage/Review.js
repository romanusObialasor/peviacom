import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TopHeadIcon } from "../SVG/SVGs";
import { IoMdQuote } from "react-icons/io";
import { FaStar } from "react-icons/fa";

const Review = () => {
  const settings = {
    dots: true, // Shows navigation dots
    infinite: true, // Infinite scrolling
    speed: 500, // Transition speed
    slidesToShow: 1, // Number of slides to show
    slidesToScroll: 1, // Number of slides to scroll
    autoplay: true, // Autoplay slides
    autoplaySpeed: 5000, // Speed of autoplay#
    customPaging: (i) => (
      <div
        style={{
          width: "20px",
          height: "4px",
          borderRadius: "10px",
          background: "#1b1b1b",
          cursor: "pointer",
          marginTop: "30px",
        }}
      ></div>
    ),
  };

  return (
    <Container>
      <Head>
        <TopHeadIcon />
        <span>Customer Reviews</span>
      </Head>
      <SubHead>What Our Users Are saying</SubHead>
      <CarouselHolder>
        <SliderHolder {...settings}>
          <Roller>
            <RollerWrapper>
              <Wrapper>
                <QuoteIcon>
                  <IoMdQuote />
                </QuoteIcon>
                <TextReview>
                  Peviacom transformed my home with their reliable solar
                  solutions. The installation process was seamless, and the
                  system has significantly reduced my electricity bills. I love
                  their professionalism and attention to detail. Highly
                  recommended!
                </TextReview>
                <Bottom>
                  <Left>
                    <Image src="/assets/user1.jpeg" alt="userImage" />
                    <DetailHolder>
                      <Name className="name">Romanus Obi</Name>
                      <Location>Lagos, Nigeria</Location>
                    </DetailHolder>
                  </Left>
                  <Right>
                    <Rating>Rating(5/5) </Rating>
                    <StarIcon>
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </StarIcon>
                  </Right>
                </Bottom>
              </Wrapper>
              <Wrapper>
                <QuoteIcon>
                  <IoMdQuote />
                </QuoteIcon>
                <TextReview>
                  The solar inverter package I got from Peviacom has been
                  fantastic. The team was very professional during installation.
                  The only reason I'm giving 4 stars is because delivery took a
                  bit longer than expected. Otherwise, excellent service!
                </TextReview>
                <Bottom>
                  <Left>
                    <Image src="/assets/user3.jpg" alt="userImage" />
                    <DetailHolder>
                      <Name className="name">Rasheed Balogun</Name>
                      <Location>Abuja, Nigeria</Location>
                    </DetailHolder>
                  </Left>
                  <Right>
                    <Rating>Rating(5/5) </Rating>
                    <StarIcon>
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </StarIcon>
                  </Right>
                </Bottom>
              </Wrapper>
            </RollerWrapper>
          </Roller>
          <Roller>
            <RollerWrapper>
              <Wrapper>
                <QuoteIcon>
                  <IoMdQuote />
                </QuoteIcon>
                <TextReview>
                  Peviacom exceeded my expectations! Their solar panels are
                  top-notch, and their customer service is outstanding. Now I
                  enjoy uninterrupted power supply, and it's been a game-changer
                  for my business. Definitely worth every penny!
                </TextReview>
                <Bottom>
                  <Left>
                    <Image src="/assets/user2.jpeg" alt="userImage" />
                    <DetailHolder>
                      <Name className="name">Aisha Bello</Name>
                      <Location>Kano, Nigeria</Location>
                    </DetailHolder>
                  </Left>
                  <Right>
                    <Rating>Rating(5/5) </Rating>
                    <StarIcon>
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </StarIcon>
                  </Right>
                </Bottom>
              </Wrapper>
              <Wrapper>
                <QuoteIcon>
                  <IoMdQuote />
                </QuoteIcon>
                <TextReview>
                  I’m thrilled with Peviacom's solar solutions. Their products
                  are durable, efficient, and eco-friendly. The support team
                  guided me through every step of the process. My family now
                  enjoys consistent power supply, even during outages. Highly
                  recommended!
                </TextReview>
                <Bottom>
                  <Left>
                    <Image src="/assets/user4.jpg" alt="userImage" />
                    <DetailHolder>
                      <Name className="name">Chinedu Okafor</Name>
                      <Location>Enugu, Nigeria</Location>
                    </DetailHolder>
                  </Left>
                  <Right>
                    <Rating>Rating(5/5) </Rating>
                    <StarIcon>
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                    </StarIcon>
                  </Right>
                </Bottom>
              </Wrapper>
            </RollerWrapper>
          </Roller>
        </SliderHolder>
      </CarouselHolder>
    </Container>
  );
};

export default Review;

const QuoteIcon = styled.div`
  font-size: 50px;
  margin-top: 10px;
`;

const TextReview = styled.div`
  font-size: 18px;
  line-height: 1.3;
  letter-spacing: 1px;
  font-weight: 300;
  /* margin-top: 20px; */
`;

const Bottom = styled.div`
  /* margin-top: 100px; */
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Image = styled.img`
  height: 60px;
  width: 60px;
  object-fit: cover;
  border-radius: 40px;
`;

const DetailHolder = styled.div`
  margin-left: 10px;
`;

const Name = styled.div`
  font-size: 22px;
  font-weight: 600;
  color: black;
  font-family: "exo", sans-serif;
  transition: all 300ms;
`;

const Location = styled.div`
  font-style: italic;
  opacity: 0.7;
`;

const Wrapper = styled.div`
  background-color: #f8f8f8;
  flex: 0.5;
  height: 76%;
  margin: 30px;
  padding: 30px;
  border-radius: 5px;
  color: rgba(0, 0, 0, 0.8);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  transition: all 300ms;

  &:hover {
    color: rgba(255, 255, 255, 0.7);
    background-color: #1b1b1b;
    .name {
      color: rgba(255, 255, 255, 1);
    }
  }
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const Right = styled.div`
  text-align: right;
`;

const Rating = styled.div``;

const StarIcon = styled.div`
  margin-top: 5px;
  color: gold;
`;

// const Head = styled.div``

// const Head = styled.div``

// const Head = styled.div``

// const Head = styled.div``

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

const RollerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Roller = styled.div`
  height: 500px;
  width: 100%;
`;

const SliderHolder = styled(Slider)``;

const CarouselHolder = styled.div`
  width: 90%;
  margin-top: 60px;
`;

const Container = styled.div`
  margin-bottom: 150px;
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 160px;
`;
