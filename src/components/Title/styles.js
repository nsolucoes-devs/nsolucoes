import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 40px;
    text-transform: uppercase;
    font-weight: 900;
    position: relative;
    color: #252525;
    overflow: hidden;

    :before {
      content: "";
      position: absolute;
      bottom: 5px;
      left: 0;
      height: 10px;
      width: 100%;
      background: rgba(30, 138, 77, 0.5);
      transition: all 0.4s ease;
      z-index: ;
    }
  }

  @media only screen and (max-width: 768px) {
    h1 {
      font-size: 30px;
      text-align: center;
      margin-inline: 10px;
    }
    
  }

`;
