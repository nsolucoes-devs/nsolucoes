import React from "react";
import { Container, Spacing } from "./styles";
import AboutUs from "../../components/AboutUs";
import Support from "../../components/Support";
import Budget from "../../components/Budget";
import Techs from "../../components/Techs";
import { FaMobileAlt } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import { FiLock } from "react-icons/fi";
import { BiTargetLock } from "react-icons/bi";
import PlataformasWebVideo from "../../assets/videos/plataformasweb.mp4";
import "react-multi-carousel/lib/styles.css";

function WebPlataform() {
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
      title: "Gestão e Vendas",
      type: "development",
      image: "responsive",
      text: "Aumente a eficiência e a rentabilidade do seu negócio com nossas soluções de gestão e vendas, que permitem um controle total sobre suas operações. Nossos sistemas oferecem recursos como controle de estoque, gerenciamento financeiro e integração com plataformas de venda online.",
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
      icon: <FaMobileAlt className="products" size={35} />,
      title: "Responsividade",
      description:
        "Responsiva para sempre se adaptar a diferentes tamanhos de tela e dispositivos.",
    },
    {
      icon: <AiFillThunderbolt className="pie" size={55} />,
      title: "Performance",
      description:
        "Ter um desempenho rápido e eficiente para garantir uma experiência de usuário satisfatória.",
    },
    {
      icon: <FiLock className="performance" size={55} />,
      title: "Segurança",
      description:
        "Protegendo tanto os dados dos usuários quanto do próprio site contra possíveis ameaças.",
    },
    {
      icon: <BiTargetLock className="products" size={65} />,
      title: "Usabilidade",
      description:
        " a plataforma web deve ser fácil de usar e permitir que os usuários encontrem o que precisam com facilidade.",
    },
  ];

  return (
    <Container>
      {/* Sobre nós */}
      <div className="margin-about">
        <AboutUs
          imageleft
          cardIcon={cardIcon}
          title="PLATAFORMAS DE ALTA ESCALA"
          subtitle="Com vasta experiência, somos especialistas em criar plataformas de alta escala."
          paragraph1="Tudo é feito pensando na usabilidade e na experiência do usuário final. Além disso, oferecemos uma ampla variedade de recursos personalizáveis, que permitem que nossos clientes criem uma plataforma web totalmente adaptada às suas necessidades específicas."
          paragraph2="Da criação de layouts personalizados até a integração de recursos como formulários, chats e sistemas de pagamento e até outras plataformas."
          paragraph3={[
            "Visual Arrojado com recursos de UI e UX",
            "Segurança e alto desempenho nos acessos",
            "Desenvolvimento ágil e de larga escala",
            "Equipe de especialistas atuando no seu projeto",
          ]}
          paragraph4="Se você está procurando uma plataforma web de alto desempenho e que proporcione uma experiência única para os seus usuários, entre em contato conosco e vamos conversar sobre como podemos ajudá-lo. "
          url={PlataformasWebVideo}
          isVideo
        />
      </div>

      {/* Faça seu orçamento */}
      <Budget title="Plataformas Web" />

      <Techs work />

      <Support copyright />
    </Container>
  );
}

export default WebPlataform;
