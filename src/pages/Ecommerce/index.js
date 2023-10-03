import React from 'react';
import { Container } from "./styles";
import AboutUs from "../../components/AboutUs";
import AboutRow from "../../components/AboutRow";
import Support from "../../components/Support";
import Budget from '../../components/Budget';
import Techs from '../../components/Techs';
import { ImLock } from 'react-icons/im';
import { BsFillGearFill } from 'react-icons/bs';
import { FaChartBar, FaMobileAlt } from 'react-icons/fa';

function Ecommerce() {

  const cardInfo = [
    {
      id: 1,
      title: "Sites e Portais",
      url: "/software/web",
      type: "development",
      image: "devices",
      text: "Tenha uma presença online profissional e impactante com nossos sites e portais personalizados. Conte com um design moderno, tecnologia atualizada e excelente usabilidade para atrair mais clientes e aumentar as vendas."
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
      title: "Ui/Ux Design",
      url: "/apps/uiux",
      type: "development",
      image: "email",
      text: "Atraia, encante e fidelize seus clientes com um design de interface intuitivo, agradável e eficiente. Nós oferecemos soluções completas de design para garantir a melhor experiência do usuário em seu site ou aplicativo."
    },
  ]

  const cardIcon = [
    {
      icon: <ImLock className="products" size={35} />,
      title: "Segurança",
      description: "Proteção dos dados do cliente através de protocolos de segurança."
    },
    {
      icon: <FaMobileAlt className="pie" size={35} />,
      title: "Mobilidade",
      description: "Acesso ao e-commerce através de dispositivos móveis, como smartphones e tablets."
    },
    {
      icon: <BsFillGearFill className="performance" size={50} />,
      title: "Personalização ",
      description: "Possibilidade de customizar a experiência de compra do cliente com base em suas preferências."
    },
    {
      icon: <FaChartBar className="products" size={60} />,
      title: "Escalabilidade",
      description: "Capacidade do e-commerce em suportar altos volumes de tráfego e vendas sem comprometer a qualidade."
    },    
  ]

  return (
    <Container>

      {/* Sobre nós */}
      <div className="margin-about">
        <AboutUs imageleft 
          cardIcon={cardIcon}
          title="E-commerce"
          url="https://i.imgur.com/5Lv9aKE.jpg"
          subtitle="Descubra como um e-commerce pode aumentar suas vendas e ampliar sua presença no mercado"
          paragraph1="E-commerce é a abreviação de comércio eletrônico. Basicamente, ele se refere a qualquer tipo de transação comercial que ocorra na internet, incluindo a compra e venda de produtos e serviços. Em um e-commerce, os produtos são apresentados em um site ou aplicativo, onde os clientes podem navegar, escolher o que desejam comprar, efetuar o pagamento e receber os produtos em casa."
          paragraph2="O e-commerce se tornou cada vez mais popular ao longo dos anos, graças à conveniência, facilidade e segurança que oferece aos consumidores. Trabalhamos com uma equipe qualificada e preparada para criar o e-commerce que você precisa para o mercado de trabalho. Buscamos sempre melhorar para oferecer aos nossos clientes a melhor experiência possível. Com uma ampla variedade de produtos e preços competitivos, nosso site oferece uma plataforma fácil e segura para compras online."
          paragraph3="Nós nos preocupamos muito com a satisfação dos nossos clientes, por isso, estamos sempre prontos para ajudar em qualquer dúvida ou problema que possa surgir. Trabalhamos com as melhores tecnologias disponíveis no mercado para garantir a segurança das transações e proteger as informações dos nossos clientes. Nosso objetivo é oferecer a melhor experiência de compra online possível, combinando praticidade, segurança e eficiência."
        />
      </div>

      {/* Nossos serviços */}
      <AboutRow aService cardInfo={cardInfo} />

      <div style={{ marginBottom: "50px" }}></div>

      {/* Faça seu orçamento */}
      <Budget title="E-commerce" />

      <Techs work/>

      <Support copyright/>

    </Container>
  );
}

export default Ecommerce;