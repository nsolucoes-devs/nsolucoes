import React from "react";
import { Container } from "./styles";
import MainPage from "../../components/MainPage";
import AboutRow from "../../components/AboutRow";
import AboutUs from "../../components/AboutUs";
import Techs from "../../components/Techs";
import Support from "../../components/Support";
import { HiArchiveBox } from "react-icons/hi2";
import { RiPieChartFill } from "react-icons/ri";
import { IoSpeedometer } from "react-icons/io5";

function Main() {

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

      <MainPage />

      <AboutRow services/>

      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
        <path
          fill="#f5f5f5"
          fill-opacity="1"
          d="M0,160L80,181.3C160,203,320,245,480,224C640,203,800,117,960,101.3C1120,85,1280,139,1360,165.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
        ></path>
      </svg>

      <AboutUs home
        cardIcon={cardIcon}
        title="Quem somos"
        url="https://mundoconectado.com.br/uploads/2022/05/25/25658/cacto.jpg"
        subtitle="Este será o subtitulo"
        paragraph1="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        paragraph2="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature,"
        paragraph3="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
      />

      <Techs caseWork />

      <Techs titleWork />

      <Support supportHome copyright/>

    </Container>
  );
}

export default Main;
