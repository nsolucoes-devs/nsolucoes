import React from "react";
import { Container, Spacing } from "./styles";
import AboutUs from "../../components/AboutUs";
import AboutRow from "../../components/AboutRow";
import Support from "../../components/Support";
import Budget from "../../components/Budget";
import Techs from "../../components/Techs";
import { FaLock, FaShoppingCart, FaChartBar, FaCog } from "react-icons/fa";

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
      description:
        "Amplie a oferta de produtos com diferentes fornecedores em uma única plataforma.",
    },
    {
      icon: <FaChartBar className="pie" size={45} />,
      title: "Escalabilidade",
      description:
        "Aumente suas vendas sem limitações geográficas ou de estoque.",
    },
    {
      icon: <FaCog className="performance" size={45} />,
      title: "Flexibilidade",
      description:
        "Personalize sua loja virtual com sua marca e escolha as funcionalidades que melhor atendem suas necessidades.",
    },
    {
      icon: <FaLock className="products" size={35} />,
      title: "Segurança",
      description:
        "Garanta a segurança das transações com certificados e tecnologias de criptografia.",
    },
  ];

  return (
    <Container>
      {/* Sobre nós */}
      <div className="margin-about">
        <AboutUs
          imageleft
          cardIcon={cardIcon}
          title="Marketplaces"
          url="https://mundoconectado.com.br/uploads/2022/05/25/25658/cacto.jpg"
          subtitle="Conheça nossas soluções para criação de marketplaces e impulsione suas vendas online"
          paragraph1="Os marketplaces são plataformas de comércio eletrônico que permitem que diversas empresas e vendedores individuais vendam seus produtos em um único lugar. Eles oferecem aos clientes uma ampla variedade de produtos, preços competitivos e uma experiência de compra conveniente. Temos vasta experiência no desenvolvimento de marketplaces."
          paragraph2="Acreditamos que a chave para o sucesso de um marketplace é a criação de uma plataforma eficiente, com uma boa experiência de usuário e uma interface intuitiva. Para isso, trabalhamos com tecnologias avançadas e oferecemos uma variedade de recursos personalizados para garantir que o seu marketplace atenda às necessidades específicas do seu negócio. Nosso objetivo é criar um alto desempenho que ofereça um ambiente seguro e confiável para compradores e vendedores. Investimos em recursos avançados de segurança para proteger tanto os dados pessoais quanto financeiros de seus clientes."
          paragraph3="Além disso, nos concentramos em fornecer uma excelente experiência de compra para os usuários. Nossa equipe de design cria layouts atrativos, intuitivos e fáceis de usar, além de oferecer recursos como carrinho de compras, pagamento seguro, acompanhamento de pedidos e chat para atendimento ao cliente. Se você deseja criar um marketplace de sucesso, nossa equipe de desenvolvedores e designers está pronta para trabalhar com você em todas as etapas do processo."
        />
      </div>

      {/* Nossos serviços */}
      <AboutRow aService cardInfo={cardInfo} />

      <div style={{ marginBottom: "50px" }}></div>

      {/* Faça seu orçamento */}
      <Budget title="Marketplaces" />

      <Techs work />

      <Support copyright />
    </Container>
  );
}

export default Marketplace;
