import styled from "styled-components";
import pin from "../../assets/images/pin1.png";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const BackgroundVideo = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  z-index: -1;

  .wave {
    height: 100%;
    width: 100%;
    position: absolute;
    z-index: 999;
    right: 53px;
  }

  iframe {
    object-fit: contain;
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
  }
`;

export const MiddleContainer = styled.div`
  width: fit-content;
  height: auto;
  padding: 60px 36px;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 10%;
  border-radius: 20px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background-color: var(--main-background);

  h1 {
    font-size: 3rem;
    color: #1c2045;
  }
`;

export const Pin = styled.img`
  position: absolute;
  bottom: -120px;
  left: -120px;
  width: 250px;
  height: 250px;
  z-index: -1;
  transform: translateY(50%) translateX(-50%);
  background-position: contain;
  animation: pulse 2s infinite;

  @keyframes pulse {
    0% {
      transform: scale(0.9);
    }
    50% {
      transform: scale(1);
    }
    100% {
      transform: scale(0.9);
    }
  }
`;

export const Overlay = styled.div`
  background-color: #000;
  opacity: 0.5;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  transition: all 0.5s;
  background-image: linear-gradient(
    to right,
    rgba(30, 138, 77, 0.8) 40%,
    rgba(0, 0, 0, 0)
  );

  &.fadeIn {
    opacity: 1;
  }

  &.fadeOut {
    opacity: 0.5;
  }
`;

export const Title = styled.h1`
  display: flex;
  flex-direction: column;

  .type-writter {
    margin-top: 15px;
  }

  .underline {
    position: relative;
    width: fit-content;
    margin-bottom: 10px;

    :before {
      content: "";
      position: absolute;
      bottom: 5px;
      left: 0;
      height: 15px;
      width: 100%;
      background: rgba(30, 138, 77, 0.5);
      transition: all 0.4s ease;
      z-index: -1;
    }
  }
`;

export const MiddleButton = styled.div`
  width: fit-content;
  padding: 23px 55px;
  border-radius: 20px;
  margin-top: 40px;
  background-color: rgba(30, 138, 77, 0.8);
  font-weight: 600;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
  box-shadow: 0 44px 84px -24px var(--accent-color);
  position: relative;
  overflow: hidden;
  transition: background-color 0.3s ease-out 0.2s;

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background-color: #1e8a4d;
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.6s ease-out 0s;
    z-index: -1;
  }

  &:hover:before {
    width: 500px;
    height: 500px;
  }

  &:hover {
    background-color: #1e8a4d;
  }
`;
