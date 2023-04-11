import React from 'react';
import { Container } from './styles';
import Card from '../Card';

function AboutRow() {
  return (
    <Container>
        <Card title="Desenvolvimento Web" />
        <Card />
        <Card />
        <Card />
    </Container>
  );
}

export default AboutRow;