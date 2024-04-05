import React from "react";
import { Container } from "./styles";
import AboutUs from "../../components/AboutUs";
import Support from "../../components/Support";
import Budget from "../../components/Budget";
import Techs from "../../components/Techs";
import { BsFillGearFill } from "react-icons/bs";
import { FaChartBar } from "react-icons/fa";
import EcommereceVideo from "../../assets/videos/ecommerce.mp4";
import { MdEscalator } from "react-icons/md";
import { FaAws } from "react-icons/fa";

function Ecommerce() {
  const cardIcon = [
    {
      icon: <MdEscalator className="products" size={35} />,
      description: "Plataforma escalável para milhares de acessos",
    },
    {
      icon: <FaAws className="pie" size={35} />,
      description: "Segurança e estabalidade da AWS",
    },
    {
      icon: <BsFillGearFill className="performance" size={50} />,
      description: "Integre com qualquer plataforma que desejar",
    },
    {
      icon: <FaChartBar className="products" size={60} />,
      description: "Desenvolvimento sob medida a sua necessidade.",
    },
  ];

  return (
    <Container>
      {/* Sobre nós */}
      <div className="margin-about">
        <AboutUs
          imageright
          cardIcon={cardIcon}
          title="E-commerce"
          url={EcommereceVideo}
          isVideo
          subtitle="Descubra como um e-commerce pode aumentar suas vendas e ampliar sua presença no mercado"
          paragraph1="Crie sua plataforma de vendas online totalmente sob medida!
          Compecção do projeto, layout, recursos, treinamento e implantação, nosso time te apoia em todas
          as etapas do processo."
          paragraph2="Sua plataforma desenvolvida sob medida, a larga escala, garantindo sucesso
          em suas vendas online."
          paragraph3={[
            "Plataforma com acessos em larga escala",
            "Segurança e desempenho para milhares de acessos",
            "Integração com as principais plataformas de pagamento",
            "Integração com correios e transportadoras",
            "Tenha emissão de notas ficais integrado, e disponivel",
            "Tenha OrderBump, Upsell, Abandono de carrinho",
            "Integre com outras plataformas (ML,Yamp, Tiny e muito mais)",
            "Integre ao whatsapp para atualizar o status dos pedidos",
          ]}
        />
      </div>

      {/* Faça seu orçamento */}
      <Budget title="E-commerce" />

      <Techs work />

      <Support copyright />
    </Container>
  );
}

export default Ecommerce;
