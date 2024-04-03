import React, { useRef, useEffect  } from 'react';
import { Container, GrowthCard, Blob, WindowEffectWrapper, Circle, Video } from './styles';

function StockCard(props) {
  const videoRef = useRef();
  const circleRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const circle = circleRef.current;

    const handleResize = () => {
      video.style.width = `${circle.offsetWidth}px`;
      video.style.height = `${circle.offsetHeight}px`;
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (   
    <WindowEffectWrapper>
      <Circle ref={circleRef}>
        <Video ref={videoRef} autoPlay muted loop>
          <source src={props.source} type="video/mp4" />
          Seu navegador não suporta a tag de vídeo.
        </Video>
      </Circle>
    </WindowEffectWrapper>
  );
}

export default StockCard;