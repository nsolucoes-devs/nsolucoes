import React from 'react';
import { Container, GrowthCard, Blob } from './styles';

function StockCard(props) {
  return (
    <Container image={props.image} />
  );
}

export default StockCard;