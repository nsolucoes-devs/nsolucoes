import { React, useState } from "react";
import { Container, Spacing } from "./styles";
import AboutUs from "../../components/AboutUs";
import AboutRow from "../../components/AboutRow";
import Support from "../../components/Support";
import Budget from "../../components/Budget";
import Techs from "../../components/Techs";
import AppVideo from "../../assets/videos/app.mp4";
import { FaHandPointer, FaPuzzlePiece, FaCloud, FaLock } from "react-icons/fa";

function MobileApps() {
  const cardInfo = [
    {
      id: 1,
      title: "Plataformas Webs",
      type: "development",
      image: "devices",
      text: "Descubra como criar uma forte presença online para sua empresa com nossas plataformas webs personalizadas, desenvolvidas para atender às necessidades específicas do seu negócio. Oferecemos soluções completas de design, desenvolvimento e hospedagem.",
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
      title: "Ui/Ux Design",
      url: "/apps/uiux",
      type: "development",
      image: "email",
      text: "Atraia, encante e fidelize seus clientes com um design de interface intuitivo, agradável e eficiente. Nós oferecemos soluções completas de design para garantir a melhor experiência do usuário em seu site ou aplicativo.",
    },
  ];

  const cardIcon = useState([
    {
      id: 1,
      icon: <FaHandPointer className="products" size={90} />,
      title: "Intuitivo",
      description:
        "Um aplicativo com interface fácil de usar e que permita a realização das tarefas com rapidez e facilidade.",
    },
    {
      id: 2,
      icon: <FaPuzzlePiece className="pie" size={90} />,
      title: "Personalizado",
      description:
        "O aplicativo é desenvolvido de acordo com as necessidades e objetivos do cliente.",
    },
    {
      id: 3,
      icon: <FaCloud className="performance" size={90} />,
      title: "Conectado",
      description:
        "Integração com redes sociais e outras plataformas para melhorar a interação com o usuário.",
    },
    {
      id: 4,
      icon: <FaLock className="products" size={80} />,
      title: "Seguro",
      description:
        "Proteção das informações do usuário e das transações realizadas pelo aplicativo.",
    },
  ]);

  return (
    <Container>
      {/* Sobre nós */}
      <div className="margin-about">
        <AboutUs
          imageleft
          cardIcon={cardIcon[0]}
          title="Android e IOS"
          subtitle="Transforme sua ideia em um aplicativo de sucesso com nossos serviços de desenvolvimento mobile"
          paragraph1="Os aplicativos mobile estão sendo cada vez mais utilizados e estão mudando a maneira como as pessoas interagem com seus dispositivos móveis. Nós acreditamos que um bom aplicativo mobile deve ser fácil de usar, intuitivo e seguro."
          paragraph2="Por isso, trabalhamos desenvolvendo com as melhores tecnologias disponíveis no mercado para criar aplicativos que atendam às necessidades dos nossos clientes. Nosso foco está em criar aplicativos responsivos que sejam compatíveis com todos os dispositivos móveis e sistemas operacionais."
          paragraph3="Trabalhamos com diversas plataformas de desenvolvimento de aplicativos, como Android, iOS, React Native, entre outras. Nosso objetivo é fornecer ao cliente a melhor solução possível para o seu projeto."
          url={AppVideo}
          isVideo
        />
      </div>

      {/* Nossos serviços */}

      {/* Faça seu orçamento */}
      <Budget title="Android e IOS" />

      <Techs work />

      <Support copyright />
    </Container>
  );
}

export default MobileApps;
