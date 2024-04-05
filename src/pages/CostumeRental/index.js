import { Container, Spacing } from "./styles";
import AboutUs from "../../components/AboutUs";
import Support from "../../components/Support";
import Budget from "../../components/Budget";
import Techs from "../../components/Techs";
import { FaMobileAlt } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import { FiLock } from "react-icons/fi";
import { BiTargetLock } from "react-icons/bi";
import CostumeRentalVideo from "../../assets/videos/trajes.mp4";

function CostumeRental() {
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
          imageright
          cardIcon={cardIcon}
          title="PLATAFORMAS DE ALTA ESCALA"
          subtitle="Com vasta experiência, somos especialistas em criar plataformas de alta escala"
          paragraph2="Tudo é feito pensando na usabilidade e na experiência do usuário final. Além disso, oferecemos uma ampla variedade de recursos personalizáveis, que permitem que nossos clientes criem uma plataforma web totalmente adaptada às suas necessidades específicas. Isso inclui desde a criação de layouts personalizados até a integração de recursos como formulários, chats e sistemas de pagamento e até outras plataformas."
          paragraph3="Nossa equipe altamente qualificada está sempre pronta para ajudar nossos clientes em todas as etapas do desenvolvimento da plataforma, desde a concepção até a implementação e manutenção. Nós oferecemos um atendimento personalizado, que visa entender as necessidades de cada cliente e propor soluções sob medida para cada projeto. Se você está procurando uma plataforma web de alto desempenho e que proporcione uma experiência única para os seus usuários, entre em contato conosco e vamos conversar sobre como podemos ajudá-lo.          "
          url={CostumeRentalVideo}
          isVideo
        />
      </div>

      {/* Faça seu orçamento */}
      <Budget title="Locação de Trajes" />

      <Techs work />

      <Support copyright />
    </Container>
  );
}

export default CostumeRental;
