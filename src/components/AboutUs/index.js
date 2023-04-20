import React from "react";
import {
  Container,
  MainRow,
  MainColumn,
  SecundaryColumn,
  SecundaryRow,
  DivSecundaryRow
} from "./styles";
import Title from "../Title";
import {
  TiInfoLargeOutline,
  HiArchiveBox,
  RiPieChartFill,
  IoSpeedometer,
} from "../../styles/Icons";
import StockCard from "../StockCard";

function AboutUs() {
  return (
    <Container>
      <Title icon={<TiInfoLargeOutline size={100} />} title="SOBRE NÓS" />

      <MainRow>
        <StockCard />
        <MainColumn>
          <h1>Um novo site pra sua empresa? Está aqui.</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
            adipisci, voluptate veritatis ex quisquam?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
            corrupti sunt facilis delectus corporis, exercitationem expedita
            adipisci, voluptate veritatis ex quisquam?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
            corrupti sunt facilis delectus corporis, exercitationem expedita
            voluptas fuga quaerat quos facere doloremque, iste fugiat dicta
            adipisci, voluptate veritatis ex quisquam?
          </p>
          <DivSecundaryRow>
            <SecundaryRow>
              <HiArchiveBox className="products" size={35} />
              <SecundaryColumn>
                <strong>Produtos bem Sucedidos.</strong>
                <small>Todos os nossos produtos foram de grande sucesso!</small>
              </SecundaryColumn>
            </SecundaryRow>
            <SecundaryRow>
              <RiPieChartFill className="pie" size={35} />
              <SecundaryColumn>
                <strong>Estratégias de Negócio.</strong>
                <small>Todos os nossos produtos foram de grande sucesso!</small>
              </SecundaryColumn>
            </SecundaryRow>
            <SecundaryRow>
              <IoSpeedometer className="performance" size={35} />
              <SecundaryColumn>
                <strong>Performance e SEO.</strong>
                <small>Todos os nossos produtos foram de grande sucesso!</small>
              </SecundaryColumn>
            </SecundaryRow>
            <SecundaryRow>
              <IoSpeedometer className="performance" size={35} />
              <SecundaryColumn>
                <strong>Performance e SEO.</strong>
                <small>Todos os nossos produtos foram de grande sucesso!</small>
              </SecundaryColumn>
            </SecundaryRow>
          </DivSecundaryRow>
        </MainColumn>
      </MainRow>
    </Container>
  );
}

export default AboutUs;
