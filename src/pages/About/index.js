import React from "react";
import { Container, Spacing, } from "./styles";
import AboutUs from "../../components/AboutUs";
import Support from "../../components/Support";
import Budget from '../../components/Budget';
import Techs from "../../components/Techs";
import { HiArchiveBox } from "react-icons/hi2";
import { RiPieChartFill } from "react-icons/ri";
import { IoSpeedometer } from "react-icons/io5";

function About() {

  const cardIcon = [
    {
      icon: <HiArchiveBox className="products" size={35} />,
      title: "teste",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      icon: <RiPieChartFill className="pie" size={35} />,
      title: "teste 2",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      icon: <IoSpeedometer className="performance" size={35} />,
      title: "teste 3",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },
    {
      icon: <HiArchiveBox className="products" size={35} />,
      title: "teste 4",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
    },    
  ]

  return (
    <Container>

      {/* Sobre nós */}
      <div className="margin-about">
        <AboutUs imageleft 
          cardIcon={cardIcon}
          title="Teste Título"
          url="https://mundoconectado.com.br/uploads/2022/05/25/25658/cacto.jpg"
          subtitle="Este será o subtitulo"
          paragraph1="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          paragraph2="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,"
          paragraph3="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
        />
      </div>

      <Budget />

      <Techs work/>

      <Support copyright />

    </Container>
  );
}

export default About;
