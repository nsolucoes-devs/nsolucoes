import React from "react";
import { Container } from "./styles";
import AboutUs from "../../components/AboutUs";
import Support from "../../components/Support";
import Budget from "../../components/Budget";
import Techs from "../../components/Techs";
import { BsTools } from "react-icons/bs";
import { FaDollarSign, FaMobileAlt, FaMoneyBill, FaMoneyBillAlt } from "react-icons/fa";
import FrotasVideo from "../../assets/videos/frotas.mp4";

function FleetManagement() {
  const cardIcon = [
    {
      icon: <FaMobileAlt className="products" size={55} />,
      title: "Acesse de Onde Estiver",
      description:
        "100% web, acesse de onde você estiver, gerencie sua frota.",
    },
    {
      icon: <FaDollarSign className="pie" size={30} />,
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
      icon: <FaMoneyBillAlt className="products" size={85} />,
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
          subtitle="Plataforma web completa para gerenciar a sua frota"
          paragraph1="Veículos Leves ou Pesados, tenha a gestão de manutenções, custos,
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

      {/* Faça seu orçamento */}
      <Budget title="Gestão de Frotas" />

      <Techs work />

      <Support copyright />
    </Container>
  );
}

export default FleetManagement;
