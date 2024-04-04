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
        "100% web, acesse de onde você estiver, gerencie sua frota.",
    },
    {
      icon: <BiMap className="pie" size={50} />,
      title: "Custo de Frota Completo",
      description:
        "Saiba quanto custa a sua frota, por veículo.",
    },
    {
      icon: <BsTools className="performance" size={50} />,
      title: "Controle de Manutenção",
      description:
        "Tenha avisos de manutenção preventiva.",
    },
    {
      icon: <FaMoneyBillAlt className="products" size={55} />,
      title: "Gestão de Custos",
      description:
        "Relatórios de custo, de recebimentos, de pagamentos, balancetes e muito mais.",
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
          subtitle="Plataforma web completa para gerenciar a sua frota."
          paragraph1="Veiculos Leves ou Pesados, tenha a gestão de manutenções, custos,
          aviso de troca de óleo, financeiro, relatórios e muito mais!"
          paragraph2="Nossos principais recursos:"
          paragraph3={[
            "Dashboard completo informações cruciais.",
            "Agenda financeira",
            "Alerta de O.S Abertas",
            "Cadastro de clientes, fornecedores",
            "Cadastro de produtos, estoque, e movimentação;",
            "Gestão de frota (leve e pesada);",
            "Gestão de documentos dos veiculos e motoristas;",
            "Custo de manutenção por frota detalhado;",
            "Módulo de ordem de serviço completo;",
            "Gestão de manutenções corretivas e preventivas;",
            "Gestão de pneus de sua frota;",
            "Avisos de manutenção;",
            "Gestão financeira, contas a pagar e receber, baixa de titulos;",
            "Lançamento de notas discais para gestão;",
            "Relatórios de custo frota, manutenções, financeiro, balancetes;",
            "Checklist de recebimento e entrega de frota;",
          ]}
        />
      </div>

      {/* Nossos serviços */}
      <AboutRow aService cardInfo={cardInfo} />

      {/* Faça seu orçamento */}
      <Budget title="Gestão de Frotas" />

      <Techs work />

      <Support copyright />
    </Container>
  );
}

export default FleetManagement;
