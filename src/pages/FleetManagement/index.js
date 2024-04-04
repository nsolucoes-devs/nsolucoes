import React from "react";
import { Container, Spacing } from "./styles";
import AboutUs from "../../components/AboutUs";
import AboutRow from "../../components/AboutRow";
import Support from "../../components/Support";
import Budget from "../../components/Budget";
import Techs from "../../components/Techs";
import { HiArchiveBox } from "react-icons/hi2";
import { RiPieChartFill } from "react-icons/ri";
import { IoSpeedometer } from "react-icons/io5";
import { MdLocationOn } from "react-icons/md";
import { BiMap } from "react-icons/bi";
import { BsTools } from "react-icons/bs";
import { FaMoneyBillAlt } from "react-icons/fa";
import { MdManageSearch } from "react-icons/md";
import FrotasVideo from "../../assets/videos/frotas.mp4";

function FleetManagement() {
  const cardInfo = [
    {
      id: 1,
      title: "Gestão e Vendas",
      type: "development",
      image: "responsive",
      text: "Aumente a eficiência e a rentabilidade do seu negócio com nossas soluções de gestão e vendas, que permitem um controle total sobre suas operações. Nossos sistemas oferecem recursos como controle de estoque, gerenciamento financeiro e integração com plataformas de venda online.",
    },
    {
      id: 2,
      title: "Plataformas Webs",
      type: "development",
      image: "devices",
      text: "Descubra como criar uma forte presença online para sua empresa com nossas plataformas webs personalizadas, desenvolvidas para atender às necessidades específicas do seu negócio. Oferecemos soluções completas de design, desenvolvimento e hospedagem.",
    },
    {
      id: 3,
      title: "Controle de Estoque",
      type: "development",
      image: "devices",
      text: "Com nosso sistema de Controle de Estoque, você tem a garantia de que seus produtos estarão sempre organizados e disponíveis. Tenha controle total sobre entrada e saída de produtos, evitando desperdícios e prejuízos.",
    },
  ];

  const cardIcon = [
    {
      icon: <MdLocationOn className="products" size={35} />,
      title: "Monitoramento em Tempo Real",
      description:
        "Acompanhe a localização e o status da sua frota em tempo real.",
    },
    {
      icon: <BiMap className="pie" size={50} />,
      title: "Otimização de Rotas",
      description:
        "Reduza o tempo e os custos de deslocamento com o planejamento de rotas mais eficientes.",
    },
    {
      icon: <BsTools className="performance" size={50} />,
      title: "Controle de Manutenção",
      description:
        "Programe e acompanhe a manutenção preventiva da sua frota, evitando problemas e gastos excessivos.",
    },
    {
      icon: <FaMoneyBillAlt className="products" size={55} />,
      title: "Gestão de Custos",
      description:
        "Tenha controle total dos gastos relacionados à sua frota, desde combustível até despesas com manutenção.",
    },
  ];

  return (
    <Container>
      {/* Sobre nós */}
      <div className="margin-about">
        <AboutUs
          imageleft
          cardIcon={cardIcon}
          title="Gestão de Frotas"
          url={FrotasVideo}
          isVideo
          subtitle="Maior eficiência e controle para sua empresa"
          paragraph1="A gestão de frotas é essencial para empresas que possuem veículos em suas atividades. Com nossa solução, você tem maior eficiência e controle sobre sua frota, otimizando custos e aumentando a produtividade."
          paragraph2="Com a nossa plataforma de gestão de frotas, você pode gerenciar todos os aspectos da sua frota, desde a manutenção dos veículos até o controle de combustível e quilometragem. Além disso, você pode monitorar o comportamento dos motoristas e receber alertas em caso de ocorrências, como excesso de velocidade ou paradas não autorizadas."
          paragraph3="Nossa solução também oferece relatórios em tempo real, permitindo que você tenha informações precisas sobre a frota a qualquer momento. Com isso, você pode identificar oportunidades de melhoria e tomar decisões mais assertivas. Além disso, a automação de processos permite que você ganhe tempo e reduza custos, eliminando tarefas manuais e repetitivas. E a integração com outros sistemas da sua empresa, como o de gestão financeira, permite que você tenha uma visão completa e integrada do seu negócio."
        />
      </div>

      {/* Nossos serviços */}
      <AboutRow aService cardInfo={cardInfo} />

      <div style={{ marginBottom: "50px" }}></div>

      {/* Faça seu orçamento */}
      <Budget title="Gestão de Frotas" />

      <Techs work />

      <Support copyright />
    </Container>
  );
}

export default FleetManagement;
