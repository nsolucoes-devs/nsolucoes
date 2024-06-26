import styled, { keyframes } from "styled-components";

const move = keyframes`
  0% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }

  50% {
    border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%;
  }

  100% {
    border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
  }
`;

export const Container = styled.div`
  max-width: 550px;
  max-height: 550px;
  width: 550px;
  height: 550px;
  transform: rotate(0deg);
  cursor: pointer;
  box-shadow: 0 20px 5px 5px rgba(0, 0, 0, 0.2);
  animation: ${move} 10s ease-in-out infinite;
  // background: url(${props => props.image});
  // background-position: center;
  // background-size: cover;

  transition: all .2s;

  :hover {
    transform: scale(1.07);
  }

  @media only screen and (max-width: 768px) {
    max-width: 20rem;
    max-height: 24rem;
    width: 20rem;
    height: 24rem;   
  }

  .background-video {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1; /* Para colocar o vídeo atrás de outros elementos */
  }
  
  .background-video video {
    min-width: 100%;
    min-height: 100%;
  }
`;

export const Blob = styled.div`
  width: 100%;
  height: 100%;
  box-shadow: rgba(17, 12, 46, 0.35) 0px 48px 100px 0px;
  transform: rotate(-9deg);
  transition: all 0.2s;
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
`;

export const WindowEffectWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Circle = styled.div`
  // width: 200px; /* Defina o tamanho do círculo conforme necessário */
  // height: 200px; /* Defina o tamanho do círculo conforme necessário */
  border-radius: 50%;
  overflow: hidden; /* Garante que o vídeo não ultrapasse os limites do círculo */
  position: relative;
  max-width: 600px;
  max-height: 550px;
  width: 800px;
  height: 550px;
  transform: rotate(0deg);
  cursor: pointer;
  box-shadow: 0 20px 5px 5px rgba(0, 0, 0, 0.2);
  animation: ${move} 10s ease-in-out infinite;
  // background: url(${props => props.image});
  // background-position: center;
  // background-size: cover;
  flex: 1;

  transition: all .2s;

  :hover {
    transform: scale(1.07);
  }

  @media only screen and (max-width: 768px) {
    max-width: 20rem;
    max-height: 24rem;
    width: 20rem;
    height: 24rem;   
  }
`;

export const Video = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 100%;
  min-height: 100%;
  object-fit: cover;
`;