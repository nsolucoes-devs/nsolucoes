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
  MiddleButton,
} from "./styles";
import { RiArrowDropDownLine } from "../../styles/Icons";
import logo_name from "../../assets/images/logo1.png";
import Dropdown from "../Dropdown";
import { Turn as Hamburger } from "hamburger-react";

function Header() {
  const options = [
    {
      label: "Plataformas",
      items: [
        { name: "Plataformas Web", url: "/software/web" },
        { name: "Gestão e Vendas", url: "/software/gestaoevendas" },
        { name: "Controle de Estoque", url: "/software/inventory" },
        { name: "Gestão de Frotas", url: "/software/fleet" },
        // { name: "Locação de Trajes", url: "/software/fleet" },
      ],
    },
    {
      label: "Sites",
      items: [
        { name: "Sites e Portais", url: "/web/sites" },
        { name: "Ecommerces", url: "/web/ecommerce" },
        { name: "Dropshipping", url: "/web/dropshipping" },
      ],
    },
    {
      label: "Outsourcing",
      items: [{ name: "Terceirizações de Squad", url: "/outsourcing/squads" }],
    },
  ];

  const [activeDropdown, setActiveDropdown] = useState(null);
  const [open, setOpen] = useState(false);

  // função para mostrar o dropdown quando clicar no Option
  function handleClick(index) {
    setActiveDropdown((currentDropdown) =>
      currentDropdown === index ? null : index
    );
  }

  // função para esconder o dropdown quando o mouse sair do Option
  // function handleMouseLeave() {
  //   setActiveDropdown(null);
  // }

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  const handleSendClick = () => {
    const url = `https://api.whatsapp.com/send/?phone=5534991601226&text=Estou+no+site+da+N+Solu%C3%A7%C3%B5es+e+gostaria+de+agendar+uma+reuni%C3%A3o.&type=phone_number&app_absent=0`;
    window.open(url);
  };

  console.log(activeDropdown);

  return (
    <>
      {open && (
        <MobileHeader>
          <ul>
            <li onClick={() => (window.location.href = "/")}>Home</li>
            <li onClick={() => (window.location.href = "/about")}>Nós</li>
            <li onClick={() => (window.location.href = "/apps/mobile")}>Apps</li>
            {options.map((option, index) => (
              <li
                key={index}
                onClick={() => handleClick(index)}
                style={{ display: "flex", flexDirection: "column" }}
                // onMouseLeave={handleMouseLeave}
              >
                <div>
                  <span style={{ fontWeight: "bold" }}>{option.label}</span>{" "}
                  <RiArrowDropDownLine />
                </div>
                <Dropdown
                  show={activeDropdown === index}
                  items={option.items}
                  style={{
                    position: "static",
                    background: "transparent",
                    border: "none",
                    boxShadow: "none",
                    display: activeDropdown === index ? "flex" : "none",
                  }}
                />
              </li>
            ))}
            <li onClick={() => (window.location.href = "/contact")}>Contato</li>
            <a className="contact" onClick={handleSendClick}>
              Agendar Reunião
            </a>
          </ul>
        </MobileHeader>
      )}
      <Container isOpen={open}>
        <LogoWrapper onClick={() => (window.location.href = "/")}>
          <LogoName className="logo-name" src={logo_name} />
        </LogoWrapper>
        <OptionsRow>
          <Option>
            <span onClick={() => (window.location.href = "/")}>Home</span>
          </Option>
          <Option>
            <span onClick={() => (window.location.href = "/about")}>Nós</span>
          </Option>
          <Option>
            <span onClick={() => (window.location.href = "/apps/mobile")}>
              Apps
            </span>
          </Option>
          {options.map((option, index) => (
            <Option
              key={index}
              onClick={() => handleClick(index)}
              // onMouseLeave={handleMouseLeave}
            >
              <span>{option.label}</span> <RiArrowDropDownLine />
              <Dropdown show={activeDropdown === index} items={option.items} />
            </Option>
          ))}
          <Option>
            <span onClick={() => (window.location.href = "/contact")}>
              Contato
            </span>
          </Option>
          <MiddleButton className="mobile-button" onClick={handleSendClick}>
            Agendar Reunião
          </MiddleButton>
          <Menu>
            <Hamburger toggled={open} toggle={setOpen} />
          </Menu>
        </OptionsRow>
      </Container>
    </>
  );
}

export default Header;
