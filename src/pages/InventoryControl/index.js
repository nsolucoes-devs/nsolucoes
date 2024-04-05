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
  const cardIcon = [
    {
      icon: <AiOutlineUnorderedList className="products" size={40} />,
      title: "Gestão de Comissões",
      description: "Tenha relatórios de comissão dos seus vendedores, chega de perder tempo calculando fechamentos.",
    },
    {
      icon: <BiBarChartSquare className="pie" size={40} />,
      title: "Seus Relatórios",
      description:
        "Tenha relatórios em tempo real. Analise vendas, estoque, comissões e muito mais. Permitindo a tomada de decisão.",
    },
    {
      icon: <AiOutlineDashboard className="performance" size={50} />,
      title: "Automação de Processos",
      description:
        "Tem várias lojas e precisa de controle? Temos a solução completa pra você!",
    },
    {
      icon: <BiLinkAlt className="products" size={50} />,
      title: "Ecommerce Integrado",
      description:
        "Tenha sua loja também na internet, disponibilize seu estoque online, tudo integrado ao sistema",
    },
  ];

  return (
    <Container>
      {/* Sobre nós */}
      <div className="margin-about">
        <AboutUs
          cardIcon={cardIcon}
          title="Controle de Estoque"
          url={EstoqueVideo}
          isVideo
          imageright
          subtitle="Plataforma web completa para gestão da loja e estoque"
          paragraph1={[
            "Gestão do seu estoque, entrada, saida, perda, garantia",
            "Módulo de venda completo, comprovante de venda na hora",
            "Cadastro de produtos completo e facil de atualizar",
            "Cadastro de Fornecedores completo, com relatórios",
            "Gestão de clientes, gestão de todas as vendas",
            "Gerencie várias lojas e estoque com um sistema unificado",
            "Comissão dos vendedores de forma rápida, e em tempo real",
            "Relatórios de estoque por categoria, produto, período",
            "Relatórios de vendas, comissões, balancetes e muito mais",
          ]}
          paragraph2="Inclua no seu sistema o nosso ecommerce, tendo total integração da sua loja virtual com a loja física, gerenciando pedidos, estoque e muito mais!"
          paragraph3="Precisa de ajuste? Plataforma totalmente adaptável, possibilitando desenvolver e ajustar recursos para adequação a necessidade específica do seu negócio."
          paragraph4="Plataforma 100% sem a necessidade de instalação nos computadores, servidor em nuvem totalmente seguro e rápido, pdv acessível no celular facilitando a venda dos seus vendedores, além da mobilidade."
          boldenGreen
        />
      </div>  

      {/* Faça seu orçamento */}
      <Budget title="Controle de Estoque" />

      <Techs work />

      <Support copyright />
    </Container>
  );
}

export default InventoryControl;
