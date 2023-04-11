import styled from "styled-components";

export const Container = styled.div`
  width: 80%;
  padding: 10px 24px;
  background: var(--main-background);
  border-radius: 0.4rem;
  position: fixed;
  margin: 20px auto;
  left: 0;
  right: 0;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  background-color: rgba(255, 255, 255, 0.70);
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  color: #252525;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const OptionsRow = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  font-weight: 700;
  font-size: 15px;
  gap: 40px;
  align-items: center;
`;

export const Option = styled.li`
  cursor: pointer;
  position: relative;
  transition: 0.2s;
  padding: 6px;
  display: flex;
  flex-direction: row;
  align-items: center;

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
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  cursor: pointer;

  &:hover .logo-name {
    animation-play-state: running;
    opacity: 1;
    transform: translate(0px);
  }
`;

export const LogoName = styled.img`
  width: 140px;
  transition: 0.4s;
  opacity: 0;
  animation: popIn 1s paused;
  transform: translate(-10px);
  margin-bottom: 10px;
`;
