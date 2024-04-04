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
      title: "Gestão de entradas",
      description: "Saídas, perdas e trocas de forma fácil e rápida.",
    },
    {
      icon: <BiBarChartSquare className="pie" size={40} />,
      title: "Relatórios em Tempo Real",
      description:
        "Relatórios de estoque, de vendas, balancetes, comissões e muito mais.",
    },
    {
      icon: <AiOutlineDashboard className="performance" size={50} />,
      title: "Automação de Processos",
      description:
        "Tem várias lojas e precisa de controle? Temos a solução completa pra você!",
    },
    {
      icon: <BiLinkAlt className="products" size={50} />,
      title: "Integração",
      description:
        "Modulo de vendas completo acessível pelo celular, facilite suas vendas.",
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
          isVideo
          subtitle="Plataforma web completa para gestão da loja e estoque."
          paragraph1="Tenha total gestão do seu estoque, entrada, saida, perda, garantia.
          Módulo de venda completo, comprovante de venda na hora.
          Cadastro de produtos completo, rápido, e facil de atualizar.
          Cadastro de Fornecedores completo, rápido, e facil de atualizar.
          Gestão de clientes, gestão de todas as vendas realizadas para ele.
          Multi Lojas, gerencie várias lojas e estoque com um sistema unificado.
          Comissão dos vendedores de forma rápida, e em tempo real.
          Relatórios de estoque por categoria, por produto, por período;
          Relatórios de vendas, comissões, balancetes e muito mais."
          paragraph2="Inclua no seu sistema o nosso ecommerce, tendo total integração da sua loja virtual com a loja física, gerenciando pedidos, estoque e muito mais!"
          paragraph3="Precisa de ajuste? Plataforma totalmente adaptável, possibilitando desenvolver e ajustar recursos para adequação a necessidade específica do seu negócio."
          paragraph4="Plataforma 100% sem a necessidade de instalação nos computadores, servidor em nuvem totalmente seguro e rápido, pdv acessível no celular facilitando a venda dos seus vendedores, além da mobilidade."
        />
      </div>

      {/* Nossos serviços */}
      <AboutRow aService cardInfo={cardInfo} />

      {/* Faça seu orçamento */}
      <Budget title="Controle de Estoque" />

      <Techs work />

      <Support copyright />
    </Container>
  );
}

export default InventoryControl;
