import React from "react";
import styled, { keyframes } from "styled-components";
import { IoMdCall } from "react-icons/io";
import { IoPlay } from "react-icons/io5";

// the default button

export function DefaultButton({ text, show, clicker }) {
  return (
    <Action onClick={clicker}>
      <Animate className="animate" top />
      {show ? (
        <span>
          <IoMdCall />
        </span>
      ) : (
        ""
      )}

      <p> {text}</p>
      <Animate className="animate" bottom />
    </Action>
  );
}

const Action = styled.div`
  background: #2b2b2b;
  margin: 10px 0;
  line-height: 0;
  cursor: pointer;
  border-radius: 10px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  /* width: fit-content; */
  height: 60px;
  width: 180px;
  text-decoration: unset;
  span {
    margin-right: 10px;
    z-index: 1;
  }
  p {
    line-height: 0;
    padding: 0;
    margin: 0;
    z-index: 1;
  }

  &:hover {
    .animate {
      transform: scale(60);
      opacity: 1;
    }
  }
`;

const Animate = styled.div`
  position: absolute;
  top: ${({ top }) => (top ? "0" : "unset")};
  bottom: ${({ bottom }) => (bottom ? "0" : "unset")};
  left: 0;
  right: 0;
  height: 1px;
  opacity: 0;
  transition: all 250ms ease-in-out;
  background-color: #23769e;
`;

// the video button

const pulse = keyframes`
  from{
    padding: 16px;
    opacity: 1
  }

  to{
    padding: 40px;
    opacity: 0;

  }
`;

export function VideoButton() {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <Wrapper
      onClick={() => {
        scrollToSection("video");
      }}
    >
      <Circle>
        <IoPlay />
      </Circle>
      <p>watch video</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-family: Roboto;
  display: flex;
  align-items: center;
  margin-left: 40px;
  cursor: pointer;
  @media screen and (max-width: 425px) {
    margin-left: 0;
    margin-top: 20px;
  }
`;

const Circle = styled.div`
  background: white;
  padding: 20px;
  text-align: center;
  border-radius: 100px;
  line-height: 0;
  margin-right: 10px;
  position: relative;
  /* filter: blur(10px); */
  display: flex;
  align-items: center;
  justify-content: center;
  color: #23769e;

  &::before {
    content: "";
    position: absolute;
    background-color: #23769e;
    opacity: 0.2;
    padding: 32px;
    border-radius: 100px;
    z-index: -1;
    filter: blur(3px);
    /* top: 0; */
    /* left: 0;
    right: 0;
    bottom: 0; */
  }

  &::after {
    content: "";
    position: absolute;
    border-radius: 100px;
    z-index: 1;
    border: 1px solid #23769e;
    animation: 1.5s ${pulse} ease-out 100ms infinite;
  }
`;

// const TopAnimation = styled.div``

// const TopAnimation = styled.div``

// const TopAnimation = styled.div``

// const TopAnimation = styled.div``

// const TopAnimation = styled.div``

// const TopAnimation = styled.div``
