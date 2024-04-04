import React from "react";
import { Container } from "./styles";
import AboutUs from "../../components/AboutUs";
import AboutRow from "../../components/AboutRow";
import Support from "../../components/Support";
import Budget from "../../components/Budget";
import Techs from "../../components/Techs";
import { ImLock } from "react-icons/im";
import { BsFillGearFill } from "react-icons/bs";
import { FaChartBar, FaMobileAlt } from "react-icons/fa";
import EcommereceVideo from "../../assets/videos/ecommerce.mp4";

function Ecommerce() {
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
      title: "MarketPlaces",
      url: "/apps/mobile",
      type: "development",
      image: "responsive",
      text: "Amplie sua visibilidade e aumente as vendas com nosso marketplace personalizado para a sua marca. Tenha uma vitrine online completa e atraente, que oferece uma experiência de compra segura e conveniente para os seus clientes.",
    },
    {
      id: 3,
      title: "Ui/Ux Design",
      url: "/apps/uiux",
      type: "development",
      image: "email",
      text: "Atraia, encante e fidelize seus clientes com um design de interface intuitivo, agradável e eficiente. Nós oferecemos soluções completas de design para garantir a melhor experiência do usuário em seu site ou aplicativo.",
    },
  ];

  const cardIcon = [
    {
      icon: <ImLock className="products" size={35} />,
      description:
        "Plataforma escalável para milhares de acessos",
    },
    {
      icon: <FaMobileAlt className="pie" size={35} />,
      description:
        "Segurança e estabalidade da AWS",
    },
    {
      icon: <BsFillGearFill className="performance" size={50} />,
      description:
        "Integre com qualquer plataforma que desejar",
    },
    {
      icon: <FaChartBar className="products" size={60} />,
      description:
        "Desenvolvimento sob medida a sua necessidade.",
    },
  ];

  return (
    <Container>
      {/* Sobre nós */}
      <div className="margin-about">
        <AboutUs
          imageleft
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
            "Integre com outras plataformas (ML,Yamp, Tiny e muito mais).",
            "Integre ao whatsapp para atualizar o status dos pedidos.",
          ]}
        />
      </div>

      {/* Nossos serviços */}
      <AboutRow aService cardInfo={cardInfo} />

      {/* Faça seu orçamento */}
      <Budget title="E-commerce" />

      <Techs work />

      <Support copyright />
    </Container>
  );
}

export default Ecommerce;
