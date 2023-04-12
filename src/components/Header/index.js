import React, { useState, useEffect } from "react";
import {
  Container,
  OptionsRow,
  Logo,
  Option,
  LogoWrapper,
  LogoName,
  Menu,
  MobileHeader,
} from "./styles";
import { RiArrowDropDownLine } from "../../styles/Icons";
import logo from "../../assets/images/just-logo.png";
import logo_name from "../../assets/images/logo-name.png";
import Dropdown from "../Dropdown";
import {
  AiOutlineInfoCircle,
  GiTicket,
  IoMapSharp,
  AiFillPhone,
} from "../../styles/Icons";
import { Turn as Hamburger } from "hamburger-react";

function Header() {
  const [showDropdown, setShowDropdown] = useState(false);
  const [open, setOpen] = useState(false);

  // função para mostrar o dropdown quando o mouse passar sobre o Option
  function handleMouseEnter() {
    setShowDropdown(true);
  }

  // função para esconder o dropdown quando o mouse sair do Option
  function handleMouseLeave() {
    setShowDropdown(false);
  }

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  return (
    <>
      {open && (
        <MobileHeader>
          <ul>
            <li>Home</li>
            <li>Serviços</li>
            <li>Conheça</li>
            <a className="contact" href="tel:+5534996484068">
              <AiFillPhone /> Contato
            </a>
          </ul>
        </MobileHeader>
      )}
      <Container isOpen={open}>
        <LogoWrapper>
          <Logo src={logo} />
          <LogoName className="logo-name" src={logo_name} />
        </LogoWrapper>
        <OptionsRow>
          <Option>
            <span>Home</span>
          </Option>
          <Option
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
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
            <span>Conheça</span>
          </Option>
          <Option>
            <span>Contato</span>
          </Option>
          <Menu>
            <Hamburger toggled={open} toggle={setOpen} />
          </Menu>
        </OptionsRow>
      </Container>
    </>
  );
}

export default Header;
