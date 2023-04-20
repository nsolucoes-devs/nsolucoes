import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    .scroll-container {
        display: flex;
        flex-direction: row;
        gap: 25px;
        margin-top: 70px;
        overflow-x: auto;
        white-space: nowrap;
        width: 100%;
        cursor: pointer;
        gap: 80px;
        justify-content: center;
    }

    .stacks {
        width: 120px;
        height: auto;
    }
`;

export const Spacing = styled.div`
  margin-top: 150px;
`;

export const Budget = styled.div`
  height: 200px;
  width: 100%;
  background-color: #1e8a4d;

  .main-buget h1 {
    color: #fff;
  }
`;

export const Button = styled.div`
  width: fit-content;
  padding: 20px 75px;
  border-radius: 70px;
  background-color: #fff;
  font-weight: 600;
  font-size: 16px;
  color: black;
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
    color: #fff;
  }
`;
