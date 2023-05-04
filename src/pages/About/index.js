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
          title="Quem somos"
          url="https://mundoconectado.com.br/uploads/2022/05/25/25658/cacto.jpg"
          subtitle="Uma equipe criativa que constrói soluções eficientes e inovadoras"
          paragraph1="Nós somos uma agência digital apaixonada por tecnologia e inovação. Acreditamos que a criatividade é a chave para construir soluções eficientes e inovadoras que atendam às necessidades específicas dos nossos clientes. Somos uma equipe altamente qualificada e comprometida em gerar resultados incríveis para nossos parceiros de negócios."
          paragraph2="Combinamos design, desenvolvimento e marketing digital para criar experiências digitais excepcionais que elevam a marca dos nossos clientes ao próximo nível. Utilizamos as melhores práticas e tecnologias modernas para garantir que nossas soluções sejam escaláveis, seguras e confiáveis."
          paragraph3="Nosso objetivo é criar soluções personalizadas e eficientes que atendam às necessidades únicas de cada cliente. Trabalhamos em estreita colaboração com nossos parceiros de negócios para entender seus objetivos e desafios e, em seguida, desenvolvemos soluções criativas e inovadoras que os ajudam a alcançar seus objetivos. Somos apaixonados por tecnologia e estamos sempre em busca de novas maneiras de impulsionar negócios e transformar ideias em realidade."
        />
      </div>

      <Budget title="meu negócio!"/>

      <Techs work/>

      <Support copyright />

    </Container>
  );
}

export default About;
