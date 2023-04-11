import React from 'react';
import { Container } from './styles';

function Title({title, icon}) {
  return (
    <Container>
        {icon}
        <h1>{title}</h1>
    </Container>
  );
}

export default Title;