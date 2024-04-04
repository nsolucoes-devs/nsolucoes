import React from "react";
import { Container, Spacing } from "./styles";
import AboutUs from "../../components/AboutUs";
import AboutRow from "../../components/AboutRow";
import Support from "../../components/Support";
import Budget from "../../components/Budget";
import Techs from "../../components/Techs";
import { FaLock, FaShoppingCart, FaChartBar, FaCog } from "react-icons/fa";
import MarketplaceVideo from "../../assets/videos/marketplace.mp4";

function Marketplace() {
  const cardInfo = [
    {
      id: 1,
      title: "Sites e Portais",
      url: "/software/web",
      type: "development",
      image: "devices",
      text: "Tenha uma presença online profissional e impactante com nossos sites e portais personalizados. Conte com um design moderno, tecnologia atualizada e excelente usabilidade para atrair mais clientes e aumentar as vendas.",
    },
    {
      id: 2,
      title: "Ecommerces",
      type: "development",
      image: "responsive",
      text: "Descubra como potencializar suas vendas e alcançar mais clientes com nosso guia completo sobre E-commerce. Aproveite a oportunidade de começar agora mesmo e impulsione seu negócio para o sucesso!",
    },
    {
      id: 3,
      title: "Plataformas Webs",
      type: "development",
      image: "devices",
      text: "Descubra como criar uma forte presença online para sua empresa com nossas plataformas webs personalizadas, desenvolvidas para atender às necessidades específicas do seu negócio. Oferecemos soluções completas de design, desenvolvimento e hospedagem.",
    },
  ];

  const cardIcon = [
    {
      icon: <FaShoppingCart className="products" size={45} />,
      title: "Variedade",
      description: "Integre com qualquer plataforma que desejar",
    },
    {
      icon: <FaChartBar className="pie" size={45} />,
      title: "Escalabilidade",
      description: "Plataforma escalável para milhares de acessos",
    },
    {
      icon: <FaCog className="performance" size={45} />,
      title: "Flexibilidade",
      description: "Desenvolvimento sob medida a sua necessidade.",
    },
    {
      icon: <FaLock className="products" size={35} />,
      title: "Segurança",
      description: "Segurança e estabalidade da AWS",
    },
  ];

  return (
    <Container>
      {/* Sobre nós */}
      <div className="margin-about">
        <AboutUs
          imageleft
          cardIcon={cardIcon}
          title="Dropshipping"
          url={MarketplaceVideo}
          isVideo
          subtitle="Crie sua plataforma de dropshipping completa, tenha uma equipe de tecnologia
          apoiando o seu negócio, de forma escalável, com tecnologia e desempenho
          para atingir vendas em todo brasil, e até internacionais"
          paragraph1={[
            "Plataforma com acessos em larga escala;",
            "Segurança e desempenho para milhares de acessos;",
            "Integração com as principais plataformas de pagamento;",
            "Integração com sua logistica, com correios e transportadoras;",
            "Tenha emissão de notas ficais integrado, e disponivel;",
            "Gerencie seus afiliados, comissões e pagamentos;",
            "Tenha OrderBump, Upsell, Abandono de carrinho;",
            "Integre com outras plataformas (ML,Yamp, Tiny e muito mais).",
          ]}
        />
      </div>

      {/* Nossos serviços */}
      <AboutRow aService cardInfo={cardInfo} />

      {/* Faça seu orçamento */}
      <Budget title="Marketplaces" />

      <Techs work />

      <Support copyright />
    </Container>
  );
}

export default Marketplace;
