import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 45px;
    text-transform: uppercase;
    font-weight: 900;
    text-align: center;
    position: relative;

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
