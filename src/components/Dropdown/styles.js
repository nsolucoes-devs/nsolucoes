import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 33px;
  left: 0;
  min-width: 200px;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  opacity: 0;
  visibility: hidden;
  transition: all 0.5s;
  transform: translateX(20px);
  box-shadow: 0 13px 48px 0 rgba(0, 0, 0, 0.15);
  background-color: var(--main-background);
  color: #252525;
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 8px;
  gap: 2px;

  &.show {
    opacity: 1;
    visibility: visible;
    left: 0;
    transform: translateX(0);
  }

  @media only screen and (max-width: 768px) {
    &.show {
    opacity: 1;
    visibility: visible;
    left: 4rem;
    transform: translateX(0);
  }

  }

`;

export const ItemLi = styled.li`
  opacity: 0;
  transform: translateX(35%);
  animation-duration: 0.3s;
  animation-fill-mode: both;
  animation-timing-function: ease-out;
  padding: 8px;

  transition: 0.2s all;

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

  :hover {
    background-color: rgb(30, 138, 77, 0.2);
  }
  
`;
