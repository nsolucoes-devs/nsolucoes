import React, { useRef, useState, useEffect } from "react";
import {
  BackgroundVideo,
  Container,
  MiddleContainer,
  Overlay,
  Title,
  MiddleButton,
  Pin,
  Wrapper
} from "./styles";
import background from "../../assets/videos/video1.mp4";
import background2 from "../../assets/videos/video2.mp4";
import background3 from "../../assets/videos/video3.mp4";
import background4 from "../../assets/videos/video4.mp4";
import pin from "../../assets/images/pin1.png";
import wave from "../../assets/svg/back.png";
import Typewriter from "typewriter-effect";

function MainPage() {
  const videoRef = useRef(null);
  const [videoIndex, setVideoIndex] = useState(0);
  const [videoList, setVideoList] = useState([
    background,
    background2,
    background3,
    background4,
  ]);

  const setPlayBackRate = () => {
    videoRef.current.playbackRate = 1;
  };

  useEffect(() => {
    // Toca o primeiro vídeo assim que o componente é montado
    videoRef.current.play();
  }, []);

  const handleVideoEnded = () => {
    var overlay = document.querySelector(".overlay");
    overlay.classList.remove("fadeOut");
    overlay.classList.add("fadeIn");

    setTimeout(() => {
      // Altera o índice do vídeo atual e toca o próximo vídeo da lista
      const nextIndex = (videoIndex + 1) % videoList.length;
      setVideoIndex(nextIndex);
      videoRef.current.src = videoList[nextIndex];
      videoRef.current.play();
    }, 100);

    setTimeout(() => {
      overlay.classList.remove("fadeIn");
      overlay.classList.add("fadeOut");
    }, 2000);
  };

  return (
    <Container>
      <Wrapper>
        <MiddleContainer>
          <Title>
            <span >Soluções Inovadoras para</span>
            {/* <span>Inovadoras para </span> */}
            <span className="type-writter">
              <Typewriter
                options={{
                  strings: ["FinTechs", "StartUps", "Empresas", "Negócios Locais"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </Title>
          <div className="button-center">
            <MiddleButton>Saiba Mais</MiddleButton>
          </div>
        </MiddleContainer>
        <Pin src={pin} />
      </Wrapper>

      <BackgroundVideo>
        <img className="wave" src={wave} />
        <Overlay className="overlay" />
 
        <video
          onCanPlay={() => setPlayBackRate()}
          ref={videoRef}
          autoPlay={true}
          playsInline
          muted
          preload="true"
          onEnded={handleVideoEnded}
        >
          <source src={background2} />
        </video>
      </BackgroundVideo>
    </Container>
  );
}

export default MainPage;
