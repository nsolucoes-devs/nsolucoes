import React, { useState } from "react";
import {
  Container,
  OptionsRow,
  Logo,
  Option,
  LogoWrapper,
  LogoName,
} from "./styles";
import { RiArrowDropDownLine } from "../../styles/Icons";
import logo from "../../assets/images/just-logo.png";
import logo_name from "../../assets/images/logo-name.png";
import Dropdown from "../Dropdown";

function Header() {
  const [showDropdown, setShowDropdown] = useState(false);

  // função para mostrar o dropdown quando o mouse passar sobre o Option
  function handleMouseEnter() {
    setShowDropdown(true);
  }

  // função para esconder o dropdown quando o mouse sair do Option
  function handleMouseLeave() {
    setShowDropdown(false);
  }

  return (
    <Container>
      <LogoWrapper>
        <Logo src={logo} />
        <LogoName className="logo-name" src={logo_name} />
      </LogoWrapper>
      <OptionsRow>
        <Option>
          <span>Home</span>
        </Option>
        <Option onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <span>Serviços</span> <RiArrowDropDownLine />
          <Dropdown
            show={showDropdown}
            items={[
              { name: "Desenvolvimento de software", url: "frelf" },
              { name: "Marketing", url: "frelf" },
              { name: "Desenvolvimento mobile", url: "frelf" },
            ]}
          />
        </Option>
        <Option>
          <span>Conheça</span> <RiArrowDropDownLine />
        </Option>
        <Option>
          <span>Suporte</span> <RiArrowDropDownLine />
        </Option>
        <Option>
          <span>Contato</span> <RiArrowDropDownLine />
        </Option>
      </OptionsRow>
    </Container>
  );
}

export default Header;
