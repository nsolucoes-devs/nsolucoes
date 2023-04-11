import styled from "styled-components";

export const Container = styled.div`
  min-height: 450px;
  max-width: 350px;
  border-radius: 20px;
  margin: 25px;
  padding: 40px 20px;
  background-color: #f5f5f5;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 100%;
    transition: all 0.3s;
  }

  h2 {
    transition: all 0.2s;
    color: var(--accent-color);
  }

  :hover {
    img {
      transform: translate(-10px, -70px) rotate(-15deg) scale(1.4);
    }

    h2 {
      transform: translateY(-40px);
    }

    p {
      transform: translateY(-30px);
    }
  }

  p {
    text-align: center;
    margin-top: 30px;
    width: 90%;
    transition: all 0.3s;
  }
`;
