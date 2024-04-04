import { React, Button } from "react";
import { Container, Spacing } from "./styles";
import AboutUs from "../../components/AboutUs";
import AboutRow from "../../components/AboutRow";
import Support from "../../components/Support";
import Techs from "../../components/Techs";
import Budget from "../../components/Budget";
import GestaoEVendasVideo from "../../assets/videos/pdv.mp4";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaStore } from "react-icons/fa";
import { HiDocumentReport } from "react-icons/hi";
import { MdManageSearch } from "react-icons/md";

function Management() {
  const cardInfo = [
    {
      id: 1,
      title: "Controle de Estoque",
      type: "development",
      image: "devices",
      text: "Com nosso sistema de Controle de Estoque, você tem a garantia de que seus produtos estarão sempre organizados e disponíveis. Tenha controle total sobre entrada e saída de produtos, evitando desperdícios e prejuízos.",
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
      icon: <BsGraphUpArrow className="products" size={160} />,
      title: "Eficiência",
      description:
        "Uma gestão eficiente de vendas permite maximizar o potencial de vendas e gerenciar o processo de vendas de forma mais eficaz.",
    },
    {
      icon: <HiDocumentReport className="pie" size={200} />,
      title: "Relatórios em Tempo Real",
      description:
        "Relatórios em tempo real fornecem dados valiosos para a equipe de vendas, permitindo que tomem decisões informadas para melhorar as vendas.",
    },
    {
      icon: <FaStore className="performance" size={200} />,
      title: "Ecommerce Integrado",
      description:
        "Tenha sua loja também na internet, disponibilize seu estoque online, tudo integrado ao sistema, facilitando suas vendas e controle.",
    },
    {
      icon: <MdManageSearch className="products" size={200} />,
      title: "Gestão de Comissões",
      description:
        "Tenha relatórios em tempo real da comissão dos seus vendedores, chega de perder tempo calculando fechamentos na mão.",
    },
  ];

  return (
    <Container>
      {/* Sobre nós */}
      <div className="margin-about">
        <AboutUs
          imageleft
          cardIcon={cardIcon}
          title="Nstock - Gestão e vendas"
          url={GestaoEVendasVideo}
          isVideo
          subtitle="Plataforma completa de Gestão e Vendas"
          paragraph1={[
            "Plataforma Web, sem necessidade instalar nada",
            "PDV rápido e completo, comprovante de venda na hora",
            "Tenha total gestão do seu estoque, entrada, saida, perda, garantia",
            "Comissão dos vendedores de forma rápida, e em tempo real",
            "Gestão de clientes, gestão de todas as vendas realizadas para ele",
            "Cadastro de produtos completo, rápido, e facil de atualizar",
            "Cadastro de Fornecedores completo, rápido, e facil de atualizar",
            "Multi Lojas, gerencie várias lojas e estoque com um sistema unificado",
            "Cadastro de usuários completo, permitindo definir permissões de acesso",
            "Relatorios diários, por período, vendas por loja, comissões e muito mais",
            "Dashboard completo, tenha os dados de forma rápida na sua tela",
          ]}
          // "
          // <ul>
          //   <li>
          //     <span>Plataforma Web, sem necessidade instalar nada.</span>
          //   </li>
          //   <li>
          //     <span>PDV rápido e completo, comprovante de venda na hora.</span>
          //   </li>
          //   <li>
          //     <span>Tenha total gestão do seu estoque, entrada, saida, perda, garantia.</span>
          //   </li>
          //   <li>
          //     <span>Comissão dos vendedores de forma rápida, e em tempo real.</span>
          //   </li>
          //   <li>
          //     <span>Gestão de clientes, gestão de todas as vendas realizadas para ele.</span>
          //   </li>
          //   <li>
          //     <span>Cadastro de produtos completo, rápido, e facil de atualizar.</span>
          //   </li>
          //   <li>
          //     <span>Cadastro de Fornecedores completo, rápido, e facil de atualizar.</span>
          //   </li>
          //   <li>
          //     <span>Multi Lojas, gerencie várias lojas e estoque com um sistema unificado.</span>
          //   </li>
          //   <li>
          //     <span>Cadastro de usuários completo, permitindo definir permissões de acesso.</span>
          //   </li>
          //   <li>
          //     <span>Relatorios diários, por período, vendas por loja, comissões e muito mais.</span>
          //   </li>
          //   <li>
          //     <span>Dashboard completo, tenha os dados de forma rápida na sua tela.</span>
          //   </li>
          // </ul>"
          paragraph2="Inclua no seu sistema o nosso ecommerce, tendo total integração da sua loja virtual com a loja física, gerenciando pedidos, estoque e muito mais!"
          paragraph3="Precisa de ajuste? Plataforma totalmente adaptável, possibilitando desenvolver e ajustar recursos para adequação a necessidade específica do seu negócio."
          paragraph4="Plataforma 100% sem a necessidade de instalação nos computadores, servidor em nuvem totalmente seguro e rápido, pdv acessível no celular facilitando a venda dos seus vendedores, além da mobilidade."
          boldenGreen
        />
      </div>

      {/* Nossos serviços */}

      {/* Faça seu orçamento */}
      <Budget title="Gestão e Vendas" />

      <Techs work />

      <Support copyright />
    </Container>
  );
}

export default Management;
