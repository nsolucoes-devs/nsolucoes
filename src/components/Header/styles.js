import styled from "styled-components";

export const Container = styled.div`
  width: ${(props) => (props.isOpen ? "100%" : "90%")};
  padding: 10px 24px;
  background: ${(props) => (props.isOpen ? "transparent" : "#fff")};
  border-radius: 0.4rem;
  margin: ${(props) => (props.isOpen ? "0px auto" : "20px auto")};
  position: fixed;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  color: #252525;
  z-index: 9999;
  transition: all 0.5s;
  box-shadow: ${(props) =>
    props.isOpen ? "none" : "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"};

  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  align-items: center;

  @media only screen and (max-width: 768px) {
    width: 95%;
    margin-left: 10px;
    margin-top: 20px;
    justify-content: space-between;
  }

  @media only screen and (min-width: 769px) and (max-width: 1023px) {
    width: 90%;
    justify-content: space-between;
  }

  @media only screen and (min-device-width: 1280px) and (max-device-width: 1920px) and (orientation: landscape) {
    width: 90%;
    justify-content: space-between;
  }

  @media only screen and (min-device-width: 2160px) and (max-device-width: 3840px) and (orientation: landscape) {
    width: 90%;
    justify-content: space-between;

    margin: 26px auto;
  }
`;

export const OptionsRow = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  font-weight: 700;
  font-size: 15px;
  gap: 30px;
  align-items: center;
  width: 100%;
  justify-content: flex-end;

  // @media only screen and (min-device-width: 2160px) and (max-device-width: 3840px) and (orientation: landscape) {
  //   font-size: 42px;
  // }
`;

export const Option = styled.li`
  cursor: pointer;
  position: relative;
  transition: 0.2s;
  padding: 6px;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 1100px) {
    display: none;
  }

  svg {
    font-size: 20px;
  }

  :before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 2.5px;
    width: 0%;
    border-radius: 20px;
    background: var(--accent-color);
    transition: all 0.4s ease;
  }
  :hover:before {
    width: 100%;
  }

  :hover {
    color: var(--accent-color);
  }
`;

export const Logo = styled.img`
  width: 50px;

  @media only screen and (min-width: 769px) and (max-width: 1023px) {
    width: 5rem;
  }

  @media only screen and (min-device-width: 2160px) and (max-device-width: 3840px) and (orientation: landscape) {
    width: 90px;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  /* &:hover .logo-name {
    animation-play-state: running;
    opacity: 1;
    transform: translate(0px);
  } */
`;

export const LogoName = styled.img`
  width: 180px;
  margin-right: 20px;
  /* transition: 0.4s; */
  /* opacity: 0; */
  animation: popIn 1s paused;
  /* transform: translate(-10px); */

  @media only screen and (min-width: 769px) and (max-width: 1023px) {
    width: 10rem;
  }

  @media only screen and (min-device-width: 2160px) and (max-device-width: 3840px) and (orientation: landscape) {
    width: 280px;
  }
`;

export const MobileHeader = styled.nav`
  display: flex;
  justify-content: center;
  padding-top: 14vh;
  width: 100vw;
  height: 100vh;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  opacity: 0;
  animation: fadeIn 0.5s;
  animation-play-state: running;
  animation-fill-mode: both;
  transition: all 0.2s;

  @keyframes fadeIn {
    from {
      opacity: 0;
      height: 0px;
      transform: translateY(
        -100%
      ); /* Adicione esta linha para animar o translateY */
    }
    to {
      opacity: 1;
      height: 100vh;
      transform: translateY(
        0%
      ); /* Adicione esta linha para animar o translateY */
    }
  }

  ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    li {
      text-transform: uppercase;
      font-size: 16pt;
      font-weight: bold;
      cursor: pointer;
      padding: 5px 15px;
      color: black;
      display: flex;
      align-items: center;
      gap: 8px;
      background-image: linear-gradient(
        var(--accent-color),
        var(--accent-color)
      );
      background-size: 0% 3px;
      background-repeat: no-repeat;
      transition: background-size 0.3s;
      margin: 5px 0;
      background-position: 50% calc(100% - 0px);
      :hover {
        background-size: 100% 3px;
      }
    }

    @keyframes pulse {
      0% {
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
      }

      50% {
        -webkit-transform: scale3d(1.05, 1.05, 1.05);
        transform: scale3d(1.05, 1.05, 1.05);
      }

      100% {
        -webkit-transform: scaleX(1);
        transform: scaleX(1);
      }
    }

    .contact {
      background-color: var(--accent-color);
      border-radius: 12px;
      padding: 10px;
      transition: 0.2s;
      background-image: none;
      display: flex;
      align-items: center;
      gap: 8px;
      text-transform: uppercase;
      text-decoration: none;
      color: white;
      font-size: 16pt;
      font-weight: 600;
      margin-top: 3rem;
      margin-bottom: 5rem;
      padding: 1rem;
      animation: pulse 2s infinite;
    }
  }


  @media only screen and (min-width: 769px) and (max-width: 1023px) {
    ul {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;

      li {
        text-transform: uppercase;
        // font-size: 35pt;
        font-weight: 600;
        cursor: pointer;
        padding: 5px 15px;
        color: black;
        display: flex;
        align-items: center;
        gap: 20px;
        background-image: linear-gradient(
          var(--accent-color),
          var(--accent-color)
        );
        background-size: 0% 3px;
        background-repeat: no-repeat;
        transition: background-size 0.3s;
        margin: 5px 0;
        background-position: 50% calc(100% - 0px);
        :hover {
          background-size: 100% 3px;
        }
      }
      .contact {
        background-color: var(--accent-color);
        border-radius: 12px;
        transition: 0.2s;
        background-image: none;
        display: flex;
        align-items: center;
        text-transform: uppercase;
        text-decoration: none;
        color: white;
        font-size: 28pt;
        font-weight: 600;
        margin-top: 3rem;
        padding: 1rem;
      }
    }
  }
`;

export const Menu = styled.div`
  display: none;
  align-self: flex-end;

  @media (max-width: 1100px) {
    display: flex;
    /* margin-left: 2rem; */
  }

  @media only screen and (min-width: 769px) and (max-width: 1023px) {
    // margin-left: 20rem;
  }
`;

export const MiddleButton = styled.div`
  @keyframes pulse {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 var(--accent-color);
    }

    70% {
      transform: scale(1);
      box-shadow: 0 0 0 10px rgba(120, 0, 167, 0.1);
    }

    100% {
      transform: scale(0.9);
      box-shadow: 0 0 0 0 rgba(120, 0, 167, 0);
    }
  }

  width: fit-content;
  padding: 15px 24px;
  border-radius: 70px;
  background-color: var(--accent-color);
  font-weight: 600;
  font-size: 12px;
  color: #fff;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 3px;
  position: relative;
  overflow: hidden;
  text-align: center;
  transition: background-color 0.3s ease-out 0.2s;
  z-index: 1;
  animation: pulse 2s infinite;

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

  @media only screen and (min-width: 769px) and (max-width: 1023px) {
    display: none;
  }

  // @media only screen and (min-device-width: 2160px) and (max-device-width: 3840px) and (orientation: landscape) {
  //   padding: 43px 60px;
  //   font-size: 35px;
  // }
`;
