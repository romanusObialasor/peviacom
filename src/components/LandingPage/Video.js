import React from "react";
import styled from "styled-components";

const Video = () => {
  return (
    <Container>
      <Wrapper>
        <VideoWrapper controls autoplay loop muted poster="/assets/about3.jpg">
          <source src="/assets/inverter.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </VideoWrapper>
      </Wrapper>
    </Container>
  );
};

export default Video;

// const Container = styled.div``

// const Container = styled.div``

const VideoWrapper = styled.video`
  background-color: #1b1b1b;
  width: 90%;
  height: 94vh;
  border-radius: 10px;
`;

const Wrapper = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  /* height: 100vh; */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 0;
`;
