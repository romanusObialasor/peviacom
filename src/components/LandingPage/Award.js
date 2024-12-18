import React from "react";
import styled from "styled-components";

const Award = () => {
  return (
    <Container>
      <Head>Our Achievement</Head>
      <AwardWrapper>
        <AwardHolder>
          <Date>2015</Date>
          <Image src="/assets/award1.png" alt="award image" />
          <Title>Certificate Of Partnership</Title>
        </AwardHolder>
        <AwardHolder>
          <Date>2019</Date>
          <Image src="/assets/award2.png" alt="award image" grow />
          <Title>Highest Inverter Sale</Title>
        </AwardHolder>
        <AwardHolder>
          <Date>2017</Date>
          <Image src="/assets/award3.png" alt="award image" />
          <Title>Key Distribution Partner</Title>
        </AwardHolder>
      </AwardWrapper>
      <Background src="/assets/background2.png" />
      <Background1 src="/assets/background2.png" />
    </Container>
  );
};

export default Award;

// const Container = styled.div``;

// const Container = styled.div``;

// const Container = styled.div``;

// const Container = styled.div``;

const Background1 = styled.img`
  position: absolute;
  bottom: -200px;
  right: -300px;
  opacity: 0.2;
`;

const Background = styled.img`
  position: absolute;
  top: -180px;
  left: -200px;
  opacity: 0.2;
`;

const Title = styled.div`
  margin-top: 20px;
  font-size: 18px;
  font-weight: bolder;
  opacity: 0.5;
`;

const Image = styled.img`
  height: ${({ grow }) => (grow ? "270px" : "150px")};
  margin-top: 30px;
`;

const Date = styled.div`
  font-size: 18px;
  opacity: 0.5;
`;

const AwardHolder = styled.div`
  text-align: center;
  margin: 0 70px;
  @media screen and (max-width: 768px) {
    margin-bottom: 70px;
  }
`;

const AwardWrapper = styled.div`
  display: flex;
  margin-top: 40px;
  align-items: flex-end;
  position: relative;
  z-index: 1;
  flex-wrap: wrap;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Head = styled.div`
  font-weight: 700;
  font-size: 30px;
  font-family: "exo", "san-serif";
  z-index: 1;
`;

const Container = styled.div`
  /* height: 350px; */
  background-color: #1b1b1b;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  padding: 50px 0;
  position: relative;
  overflow: hidden;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
