import React from "react";
import { Container, Spacing } from "./styles";
import AboutUs from "../../components/AboutUs";
import AboutRow from "../../components/AboutRow";
import Support from "../../components/Support";
import Budget from "../../components/Budget";
import Techs from "../../components/Techs";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { BiBarChartSquare } from "react-icons/bi";
import { AiOutlineDashboard } from "react-icons/ai";
import { BiLinkAlt } from "react-icons/bi";
import EstoqueVideo from "../../assets/videos/estoque.mp4";

function InventoryControl() {
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
      title: "Gestão de Frotas",
      type: "development",
      image: "email",
      text: "Com nossa solução de Gestão de Frotas, você pode ter o controle total de todos os seus veículos, agendar manutenções preventivas, controlar combustível e muito mais. Aumente a eficiência da sua frota e economize dinheiro.",
    },
  ];

  const cardIcon = [
    {
      icon: <AiOutlineUnorderedList className="products" size={40} />,
      title: "Organização",
      description:
        "Tenha controle completo sobre o seu estoque, evitando perdas e falta de produtos.",
    },
    {
      icon: <BiBarChartSquare className="pie" size={40} />,
      title: "Relatórios em Tempo Real",
      description:
        "Visualize informações atualizadas sobre seu estoque a qualquer momento.",
    },
    {
      icon: <AiOutlineDashboard className="performance" size={50} />,
      title: "Automação de Processos",
      description:
        "Ganhe tempo com a automatização de tarefas repetitivas, como o cadastro de produtos.",
    },
    {
      icon: <BiLinkAlt className="products" size={50} />,
      title: "Integração",
      description:
        "Integre o controle de estoque com outros sistemas da sua empresa, como o sistema de vendas.",
    },
  ];

  return (
    <Container>
      {/* Sobre nós */}
      <div className="margin-about">
        <AboutUs
          imageleft
          cardIcon={cardIcon}
          title="Controle de Estoque"
          url={EstoqueVideo}
          subtitle="Tenha controle total do seu estoque com a nossa plataforma"
          paragraph1="No mundo dos negócios, gerenciar o estoque pode ser uma tarefa desafiadora. É necessário saber exatamente o que temos disponível, o que está em falta e o que precisa ser reposto, além de garantir que as informações estejam sempre atualizadas. Felizmente, a nossa plataforma de Controle de Estoque pode ajudá-lo a manter tudo sob controle de maneira fácil e eficiente."
          paragraph2="Com a nossa plataforma, você pode monitorar seus estoques em tempo real, garantindo que nunca fique sem produtos. Você pode ajustar automaticamente os níveis de estoque com base em suas necessidades e receber alertas quando um produto estiver acabando. Além disso, nossa plataforma permite que você veja relatórios de vendas, para que possa tomar decisões informadas sobre quais produtos devem ser mantidos em estoque e quais não."
          paragraph3="Nossa plataforma também oferece recursos de automação de vendas, o que significa que você pode otimizar a gestão do seu estoque para melhorar a eficiência do seu negócio. E com a integração de nossa plataforma, você pode integrá-la facilmente com outras ferramentas, como o seu sistema de vendas, para garantir que seus dados estejam sempre atualizados e em sincronia."
        />
      </div>

      {/* Nossos serviços */}
      <AboutRow aService cardInfo={cardInfo} />

      <div style={{ marginBottom: "50px" }}></div>

      {/* Faça seu orçamento */}
      <Budget title="Controle de Estoque" />

      <Techs work />

      <Support copyright />
    </Container>
  );
}

export default InventoryControl;
