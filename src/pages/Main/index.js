import React from 'react';
import { Container } from './styles';
import MainPage from '../../components/MainPage';
import AboutRow from '../../components/AboutRow';

function Main() {
  return (
    <Container>
      <MainPage />
      <AboutRow />
    </Container>
  );
}

export default Main;