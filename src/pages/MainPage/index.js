import React, { useRef, useState, useEffect } from "react";
import {
  BackgroundVideo,
  Container,
  MiddleContainer,
  Overlay,
  Title,
  MiddleButton
} from "./styles";
import background from "../../assets/videos/video3.mp4";
import background2 from "../../assets/videos/video4.mp4";
import background3 from "../../assets/videos/video5.mp4";
import background4 from "../../assets/videos/video6.mp4";
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
    videoRef.current.playbackRate = 0.5;
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
      <MiddleContainer>
        <Title>
          <span className="underline">Transformando</span>
          <span>Negócios com programação e</span>
          <span className="type-writter">
            <Typewriter
              options={{
                strings: ["Inteligência", "Cuidado", "Responsabilidade"],
                autoStart: true,
                loop: true,
              }}
            />
          </span>
        </Title>
        <MiddleButton>
            Saiba Mais!
        </MiddleButton>
      </MiddleContainer>
      <BackgroundVideo>
        <img className="wave" src={wave} />
        <Overlay className="overlay" />

        <video
          onCanPlay={() => setPlayBackRate()}
          ref={videoRef}
          autoPlay={true}
          playsInline
          muted
          preload
          onEnded={handleVideoEnded}
        >
          <source src={videoList[videoIndex]} />
        </video>
      </BackgroundVideo>
    </Container>
  );
}

export default MainPage;
