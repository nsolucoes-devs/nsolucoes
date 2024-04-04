import React from "react";
import { Container, Spacing, } from "./styles";
import AboutUs from "../../components/AboutUs";
import AboutRow from "../../components/AboutRow";
import Support from '../../components/Support';
import Budget from "../../components/Budget";
import Techs from "../../components/Techs";
import { AiOutlineBulb, AiFillEye } from "react-icons/ai";
import { BsPencilSquare, BsSpeedometer2 } from "react-icons/bs";


function UIUxDesign() {

  const cardInfo = [
    {
      id: 1,
      title: "Android e IOS",
      type: "development",
      image: "devices",
      text: "Descubra como alcançar ainda mais pessoas com o seu negócio através de aplicativos Android e iOS. Aprenda sobre as possibilidades de desenvolvimento de aplicativos para dispositivos móveis e como isso pode alavancar suas vendas e visibilidade no mercado. "
    },
    {
      id: 2,
      title: "MarketPlaces",
      url: "/apps/mobile",
      type: "development",
      image: "responsive",
      text: "Amplie sua visibilidade e aumente as vendas com nosso marketplace personalizado para a sua marca. Tenha uma vitrine online completa e atraente, que oferece uma experiência de compra segura e conveniente para os seus clientes."
    },
    {
      id: 3,
      title: "Ecommerces",
      type: "development",
      image: "responsive",
      text: "Descubra como potencializar suas vendas e alcançar mais clientes com nosso guia completo sobre E-commerce. Aproveite a oportunidade de começar agora mesmo e impulsione seu negócio para o sucesso!"
    },
  ]

  const cardIcon = [
    {
      icon: <AiOutlineBulb className="products" size={55} />,
      title: "Design intuitivo",
      description: "A facilidade de uso é fundamental em um design intuitivo, permitindo que os usuários encontrem rapidamente o que precisam."
    },
    {
      icon: <BsPencilSquare className="pie" size={55} />,
      title: "Atraente",
      description: "Um design atraente e visualmente agradável pode capturar a atenção do usuário e tornar a experiência mais agradável."
    },
    {
      icon: <AiFillEye className="performance" size={55} />,
      title: "Acessível",
      description: "O design acessível é pensado para proporcionar uma experiência positiva para todos, independentemente de suas habilidades físicas ou cognitivas."
    },
    {
      icon: <BsSpeedometer2  className="products" size={55} />,
      title: "Consistente",
      description: "A consistência é vital em um design, garantindo que o usuário possa navegar facilmente e encontrar o que está procurando."
    },    
  ]

  return (
    <Container>

      {/* Sobre nós */}
      <div className="margin-about">
        <AboutUs imageleft 
          cardIcon={cardIcon}
          title="UI e UX Design"
          url="https://i.imgur.com/5Lv9aKE.jpg"
          subtitle="Como a nossa equipe trabalha para criar sites incríveis"
          paragraph1="Na nossa agência, o design é levado a sério, e não seria diferente com o UI e UX Design dos seus projetos. Cuidamos de cada detalhe para garantir que a experiência do usuário seja a melhor possível. Desde a escolha das cores e tipografias, até a arquitetura da informação e a usabilidade do site, tudo é pensado para transmitir a mensagem desejada e facilitar a navegação do usuário."
          paragraph2="Nossos designers têm expertise em criar interfaces intuitivas e agradáveis, além de estarem sempre atualizados nas últimas tendências e melhores práticas de design. Combinando arte e ciência, nossas soluções de UI e UX Design garantem a satisfação do usuário e o sucesso do seu projeto."
          paragraph3="Com uma equipe altamente qualificada e experiente em design de interface e experiência do usuário, nossos serviços de UI e UX Design vão além da criação de uma simples página. Nós nos esforçamos para criar uma experiência única e agradável para o usuário final, considerando fatores como usabilidade, acessibilidade e interatividade. Além disso, oferecemos suporte e consultoria durante todo o processo de design, garantindo que suas necessidades sejam atendidas e que sua visão se torne realidade."
        />
      </div>

      {/* Nossos serviços */}
      <AboutRow aService cardInfo={cardInfo} />
      
      <Budget title="UI e UX Design" />

      <Techs work/>

      <Support copyright/>
      
    </Container>
  );
}

export default UIUxDesign;
