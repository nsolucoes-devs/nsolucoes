import styled from 'styled-components';

export const Container = styled.div`
  /* margin-top: 4rem; */
  width: 100%;
  height: 100%;
`;

export const ButtonBudget = styled.div`
  height: 200px;
  width: 100%;
  background-color: #1e8a4d;

  .main-budget {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100%;
    padding: 16px;
  }

  .main-budget h1 {
    color: #fff;
  }

  .button-manegement {
    display: flex;
    align-items: center;
  }

  /* .button-manegement svg {
    margin-right: 8px;
  } */

  @media only screen and (max-width: 768px) {

    .main-budget {
      display: grid;
      height: 100%;
      text-align: center;
      justify-items: center;
    }

    h1 {
      font-size: 25px;
      padding-top: 2rem;
    }
  }

`;

export const Button = styled.div`
  width: fit-content;
  padding: 10px 75px;
  margin-bottom: 30px;
  border-radius: 70px;
  background-color: #fff;
  font-weight: 600;
  font-size: 16px;
  color: #27272e;
  cursor: pointer;
  box-shadow: 0 20px 84px -15px var(--accent-color);
  -webkit-box-shadow: 10px 10px 29px 0px rgba(0, 0, 0, 0.37);
  -moz-box-shadow: 10px 10px 29px 0px rgba(0, 0, 0, 0.37);
  box-shadow: 10px 10px 29px 0px rgba(0, 0, 0, 0.37);
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
    background-color: #27272e;
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
    color: #fff;
  }

  @media only screen and (min-device-width: 1280px) and (max-device-width: 1920px) and (orientation: landscape) {
    letter-spacing: 5px;
  }

  h4 {
    margin-left: 5px;
  }

`;