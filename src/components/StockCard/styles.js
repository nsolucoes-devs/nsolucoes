import styled from "styled-components";

export const Container = styled.div`
  max-width: 400px;
  max-height: 600px;
  transform: rotate(0deg);
  cursor: pointer;

  :hover {
    img {
        transform: rotate(0deg);
    }

    ::before {
        transform: rotate(0deg);
    }
  }

  img {
    width: 100%;
    height: 100%;
    border-radius: 20px;
    box-shadow: rgba(17, 12, 46, 0.35) 0px 48px 100px 0px;
    transform: rotate(-9deg);
    transition: all .2s;
}

  &::before {
    content: "";
    position: absolute;
    top: 0;
    width: 90%;
    height: 100%;
    background-color: black;
    border-radius: 20px;
    z-index: -1;
    transform: rotate(3deg); 
    transition: all .2s;
  }
`;

export const GrowthCard = styled.div`
position: absolute;
    top: 50%;
    width: 250px;
    height: auto;
    padding: 16px;
    background-color: #fff;
    left: -180px;
    border-radius: 20px;

    small {
        font-weight: 700;
    }
`