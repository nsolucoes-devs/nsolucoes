import React from 'react';
import { Container, GrowthCard, Blob } from './styles';

function StockCard(props) {
  if(!props.isVideo) {
    return(
      <Container image={props.image} />
    )
  }
  return (
    <Container>
      <video>
        <source src={props.source} type='video/mp4' />
      </video>
    </Container>
  );
}

export default StockCard;