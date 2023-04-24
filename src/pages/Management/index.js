import React from "react";
import { Container, Spacing, Budget, Button, Footer } from "./styles";
import AboutUs from "../../components/AboutUs";
import AboutRow from "../../components/AboutRow";
import Support from "../../components/Support";
import ScrollContainer from "react-indiana-drag-scroll";
import stack1 from "../../assets/images/stack1.png";
import stack2 from "../../assets/images/stack2.png";
import stack3 from "../../assets/images/stack3.png";
import stack6 from "../../assets/images/stack6.png";
import stack7 from "../../assets/images/stack7.png";
import stack9 from "../../assets/images/stack9.png";
import stack10 from "../../assets/images/stack10.png";
import stack11 from "../../assets/images/stack11.png";
import stack12 from "../../assets/images/stack12.png";
import stack13 from "../../assets/images/stack13.png";
import { BsWhatsapp } from "react-icons/bs";
import Techs from "../../components/Techs";

function Management() {
  const stacks = [
    { name: stack1, size: "100px" },
    { name: stack2, size: "60px" },
    { name: stack9, size: "100px" },
    { name: stack13, size: "200px" },
    { name: stack3, size: "200px" },
    { name: stack6, size: "200px" },
    { name: stack10, size: "200px" },
    { name: stack7, size: "150px" },
    { name: stack11, size: "200px" },
    { name: stack12, size: "150px" },
  ];

  return (
    <Container>
      <Spacing />

      {/* Sobre nós */}
      <AboutUs imageright/>

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

      <Techs />

      <Support copyright/>
    </Container>
  );
}

export default Management;
