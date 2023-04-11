import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 33px;
  left: 0;
  min-width: 250px;
  width: 300px;
  border-radius: 4px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.5s;
  transform: translateX(20px);
  box-shadow: 0 13px 48px 0 rgba(0, 0, 0, 0.15);
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  background-color: rgba(255, 255, 255, 0.85);
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(25px);
  color: #252525;
  border: 1px solid rgba(255, 255, 255, 0.18);

  &.show {
    opacity: 1;
    visibility: visible;
    left: 0;
    transform: translateX(0);
  }
`;

export const ItemLi = styled.li`
  opacity: 0;
  transform: translateX(35%);
  animation-duration: 0.3s;
  animation-fill-mode: both;
  animation-timing-function: ease-out;

  &.animate-in {
    animation-name: slide-in;
    opacity: 1;
  }

  @keyframes slide-in {
    from {
      opacity: 0;
      transform: translateX(35%);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
`;
