import styled from "styled-components";
import back from "../../assets/svg/back.png";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  @media only screen and (max-width: 768px) {
    height: 70vh;
    margin-bottom: -6rem;
  }

  @media only screen and (min-width: 769px) and (max-width: 1023px) {
    height: 100vh;
    margin-bottom: -30rem;
  }

`;

export const BackgroundVideo = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%;
  z-index: -1;

  .wave {
    height: 100vh;
    width: 100%;
    position: absolute;
    z-index: 999;
    right: 53px;
  }

  video {
    object-fit: cover;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    right: 0;
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }

  @media only screen and (min-width: 769px) and (max-width: 1023px) {
    display: none;
  }

`;

export const MiddleContainer = styled.div`
  width: 100%;
  padding: 60px 36px;
  border-radius: 20px;
  background-color: rgba(255, 255, 255, 0.65);
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  display: flex;

  h1 {
    font-size: 3rem;
    color: #1c2045;
  }

  /* @media (max-width: 700px) {
    width: 90%;

    h1 {
      font-size: 2rem;
    }
  } */

  @media only screen and (min-width: 360px) and (max-width: 760px) {

    

    h1 {
      font-size: 1rem;
      color: white;
    }
  }

  @media only screen and (min-width: 0px) and (max-width: 768px) {
    padding: 50px 8px;
    background-color: #1e8a4d;
    margin-top: 0;
    margin-bottom: 0;
    width: 100%;
    
    h1 {
      font-size: 1.5rem;
      color: white;
    }

    .button-center {
      /* z-index: 99;
      margin-left: -5.5rem;
      margin-right: 0rem; */
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1023px) {
    padding: 60px 25px;
    background-color: #1e8a4d;
    margin-top: 0;
    margin-bottom: 0;
    width: 100%;
    display: grid;
    justify-items: center;
    
    h1 {
      font-size: 2.7rem;
      color: white;
    }

    .button-center {
      margin-left: -15rem;
      margin-right: 3rem;
    }
  }

`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: fit-content;
  position: relative;
  width: fit-content;
  height: auto;
  top: 50%;
  transform: translateY(-50%);
  margin-left: 10%;

  @media only screen and (max-width: 768px) {
    display: flex;
    -webkit-box-pack: center;
    /* justify-content: center; */
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    width: 90%;
    height: auto;
    top: 50%;
    transform: translateY(-50%);
    margin-left: auto;
    margin-right: auto;
    flex-direction: column;
  }

  @media screen and (min-width: 769px) and (max-width: 1023px) {
    display: flex;
    -webkit-box-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    align-items: center;
    position: relative;
    width: 80%;
    height: auto;
    top: 30%;
    transform: translateY(-50%);
    margin-left: 5rem;
    margin-right: 5rem;
    flex-direction: column;
  }
`;

export const Pin = styled.img`
  position: absolute;
  bottom: -120px;
  left: -120px;
  width: 250px;
  height: 250px;
  z-index: -1;

  /* @media (max-width: 600px) {
    display: none;
  } */
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
  padding: 20px 40px;
  border-radius: 70px;
  margin-left: -12rem;
  margin-top: 80px;
  background-color: var(--accent-color);
  font-weight: 600;
  font-size: 16px;
  color: #fff;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 3px;
  position: relative;
  overflow: hidden;
  transition: background-color 0.3s ease-out 0.2s;
  z-index: 1;

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background-color: #18693b;
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

  @media only screen and (max-width: 768px) {
    display: none;
  }

  @media screen and (min-width: 769px) and (max-width: 1023px) {
    display: none;
  }
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -2rem;
`;

export const Button = styled.div`
  
    @media only screen and (min-width: 1024px) {
      display: none;
    }  

    @media only screen and (max-width: 768px) {
      width: fit-content;
      padding: 20px 40px;
      border-radius: 70px;
      background-color: white;
      font-weight: 600;
      font-size: 16px;
      color: var(--accent-color);
      cursor: pointer;
      box-shadow: 0 20px 84px -15px var(--accent-color);
      -webkit-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.30);
      -moz-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.30);
      box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.30);
      text-transform: uppercase;
      letter-spacing: 3px;
      position: relative;
      overflow: hidden;
      transition: background-color 0.3s ease-out 0.2s;
      z-index: 10;
      
      &:hover {
        background-color: #1e8a4d;
        color: white;
      }

      &:before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      width: 0;
      height: 0;
      background-color: #18693b;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      transition: all 0.6s ease-out 0s;
      z-index: -1;
    }

    &:hover:before {
      width: 500px;
      height: 500px;
    }

  }

  @media screen and (min-width: 769px) and (max-width: 1023px) {
    width: fit-content;
      padding: 20px 40px;
      border-radius: 70px;
      background-color: white;
      font-weight: 600;
      font-size: 16px;
      color: var(--accent-color);
      cursor: pointer;
      box-shadow: 0 20px 84px -15px var(--accent-color);
      -webkit-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.30);
      -moz-box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.30);
      box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.30);
      text-transform: uppercase;
      letter-spacing: 3px;
      position: relative;
      overflow: hidden;
      transition: background-color 0.3s ease-out 0.2s;
      z-index: 10;
      
      &:hover {
        background-color: #1e8a4d;
        color: white;
      }

      &:before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      width: 0;
      height: 0;
      background-color: #18693b;
      border-radius: 50%;
      transform: translate(-50%, -50%);
      transition: all 0.6s ease-out 0s;
      z-index: -1;
    }

    &:hover:before {
      width: 500px;
      height: 500px;
    }
  }
`;
