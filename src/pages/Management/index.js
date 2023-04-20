import React from "react";
import { Container, Spacing, Budget, Button, Footer } from "./styles";
import AboutUs from "../../components/AboutUs";
import AboutRow from "../../components/AboutRow";
import ScrollContainer from "react-indiana-drag-scroll";
import stack1 from "../../assets/images/stack1.png";
import stack2 from "../../assets/images/stack2.png";
import stack3 from "../../assets/images/stack3.png";
import stack4 from "../../assets/images/stack4.png";
import stack5 from "../../assets/images/stack5.png";
import stack6 from "../../assets/images/stack6.png";
import stack7 from "../../assets/images/stack7.png";
import stack8 from "../../assets/images/stack8.png";
import stack9 from "../../assets/images/stack9.png";
import { BsWhatsapp } from "react-icons/bs";

function Management() {
  const stacks = [
    { name: stack8, size: "100px" },
    { name: stack1, size: "60px" },
    { name: stack3, size: "100px" },
    { name: stack6, size: "100px" },
    { name: stack7, size: "100px" },
    { name: stack9, size: "60px" },
  ];

  return (
    <Container>
      <Spacing />
      {/* Sobre nós */}
      <AboutUs />
      {/* Nossos serviços */}
      <AboutRow />
      <div style={{ marginBottom: "50px" }}></div>
      <Budget>
        <div
          className="main-buget"
          style={{
            display: "flex",
            alignItems: "center;",
            justifyContent: "space-around",
            marginTop: "70px",
          }}
        >
          <div className="informations">
            <BsWhatsapp size={30} style={{ fill: "#fff" }}></BsWhatsapp>
            <h1>Faça agora seu orçamento!</h1>
          </div>
          <Button>Clique aqui</Button>
        </div>
      </Budget>
      <ScrollContainer className="scroll-container">
        {stacks.map((stack) => (
          <div
            key={stacks[stack.name]}
            style={{
              scrollBehavior: "smooth",
              marginBottom: "50px",
            }}
          >
            <img
              src={stack.name}
              className="stacks"
              alt={stack.name}
              style={{
                pointerEvents: "none",
                userSelect: "none",
                width: stack.size,
              }}
            />
          </div>
        ))}
      </ScrollContainer>

      <Footer>
        <div className="horizontal-divider" />
        <small>© 2023. Todos os direitos reservados por N Soluções.</small>
      </Footer>
    </Container>
  );
}

export default Management;
