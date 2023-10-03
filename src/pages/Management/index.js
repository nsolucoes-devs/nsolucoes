import {React, Button} from "react";
import { Container, Spacing} from "./styles";
import AboutUs from "../../components/AboutUs";
import AboutRow from "../../components/AboutRow";
import Support from "../../components/Support";
import Techs from "../../components/Techs";
import Budget from "../../components/Budget";
import { RiTimeLine } from "react-icons/ri";
import { GrDashboard } from "react-icons/gr";
import { TbSettingsAutomation } from "react-icons/tb";
import { BiShareAlt } from "react-icons/bi";


function Management() {

  const cardInfo = [
    {
      id: 1,
      title: "Controle de Estoque",
      type: "development",
      image: "devices",
      text: "Com nosso sistema de Controle de Estoque, você tem a garantia de que seus produtos estarão sempre organizados e disponíveis. Tenha controle total sobre entrada e saída de produtos, evitando desperdícios e prejuízos."
    },
    {
      id: 2,
      title: "Plataformas Webs",
      type: "development",
      image: "devices",
      text: "Descubra como criar uma forte presença online para sua empresa com nossas plataformas webs personalizadas, desenvolvidas para atender às necessidades específicas do seu negócio. Oferecemos soluções completas de design, desenvolvimento e hospedagem."
    },
    {
      id: 3,
      title: "Gestão de Frotas",
      type: "development",
      image: "email",
      text: "Com nossa solução de Gestão de Frotas, você pode ter o controle total de todos os seus veículos, agendar manutenções preventivas, controlar combustível e muito mais. Aumente a eficiência da sua frota e economize dinheiro."
    },
  ]

  const cardIcon = [
    {
      icon: <GrDashboard className="products" size={60} />,
      title: "Eficiência",
      description: "Uma gestão eficiente de vendas permite maximizar o potencial de vendas e gerenciar o processo de vendas de forma mais eficaz."
    },
    {
      icon: <RiTimeLine className="pie" size={75} />,
      title: "Relatórios em Tempo Real",
      description: "Relatórios em tempo real fornecem dados valiosos para a equipe de vendas, permitindo que tomem decisões informadas para melhorar as vendas."
    },
    {
      icon: <TbSettingsAutomation className="performance" size={75} />,
      title: "Automação de Vendas",
      description: "A automação de vendas ajuda a simplificar o processo de vendas, permitindo que as equipes de vendas foquem no atendimento ao cliente."
    },
    {
      icon: <BiShareAlt className="products" size={60} />,
      title: "Integração",
      description: "A integração de diferentes ferramentas e plataformas de vendas permite uma gestão mais eficiente e maior facilidade na tomada de decisões."
    },    
  ]

  return (
    <Container>

      {/* Sobre nós */}
      <div className="margin-about">
        <AboutUs imageleft 
          cardIcon={cardIcon}
          title="Gestão e Vendas"
          url="https://i.imgur.com/5Lv9aKE.jpg"
          subtitle="Este será o subtitulo"
          paragraph1="Na nossa agência, acreditamos que a Gestão e Vendas são áreas cruciais para o sucesso de qualquer negócio, e por isso, oferecemos soluções personalizadas e eficazes para atender às necessidades específicas dos nossos clientes. Com o nosso know-how e experiência, trabalhamos para ajudar a gerenciar a rotina de vendas e proporcionar informações valiosas para tomadas de decisões estratégicas."
          paragraph2="Além disso, nossa equipe é especializada em desenvolver sistemas de gestão que automatizam processos, otimizam a produtividade e reduzem custos operacionais, aumentando assim a eficiência e a rentabilidade da sua empresa. Por meio de soluções inteligentes de gestão, oferecemos um controle completo do seu negócio, desde o gerenciamento de estoque e financeiro até a administração de contratos e vendas."
          paragraph3="Por fim, nos orgulhamos em oferecer aos nossos clientes serviços de consultoria em vendas, que incluem análise de mercado, identificação de oportunidades, treinamento de equipe e implementação de estratégias eficazes de vendas. Com a nossa consultoria, você pode ter a certeza de que estará tomando as melhores decisões para o seu negócio e impulsionando o seu crescimento."
        />
      </div>

      {/* Nossos serviços */}
      <AboutRow aService cardInfo={cardInfo} />

      <div style={{ marginBottom: "50px" }}></div>

      {/* Faça seu orçamento */}
      <Budget title="Gestão e Vendas"/>

      <Techs work/>

      <Support copyright/>

    </Container>
  );
}

export default Management;
