import { React, useState, useEffect } from "react";
import {
  Container,
  Row,
  Column,
  MessageBtn,
  MessageInput,
  SocialRow,
  Footer,
} from "./styles";
import {
  MdEmail,
  AiFillPhone,
  FaMapMarkerAlt,
  BsLinkedin,
  AiFillInstagram,
} from "../../styles/Icons";
import L from "leaflet";
import locationIcon from "../../assets/images/marker.png";
import { BsWhatsapp } from "react-icons/bs";
import logo from "../../assets/images/just-logo.png";
import logo_name from "../../assets/images/logo-name.png";
import { LogoWrapper, Logo, LogoName } from "../Header/styles";
import { AiOutlineSend } from "react-icons/ai";

function Support(props) {
  const MarkerIcon = L.icon({
    iconUrl: locationIcon,
    iconSize: [40, 40],
    iconAnchor: [12, 12],
    popupAnchor: [0, 0],
  });

  const [year, setYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const interval = setInterval(() => {
      setYear(new Date().getFullYear());
    }, 1000 * 60 * 60 * 24 * 365); // atualiza a cada ano

    return () => clearInterval(interval);
  }, []);

  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleMessageChange = (event) => {
    const { value } = event.target;
    setMessage(value);
    setIsSending(value.length > 0);
  };

  const handleWhatsAppClick = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://wa.me/5534991601226/?text=${encodedMessage}`,
      "_blank"
    );
    setMessage("");
    setIsSending(false);
  };

  return (
    <Container>
      {props.supportHome && (
        <>
          {/* <div className="margin-support">
            <Title title="FALE CONOSCO" icon={<BiSupport size={100} />} />
          </div> */}
          {/* <div className="left margin-support">
            <Title title="FALE CONOSCO" />
          </div> */}
          <Row className="main-row support-home">
            <Column>
              <Column className="contact">
                <h1>Vamos conversar!</h1>
                <h3>
                  Fale com um de nossos especialistas agora mesmo, vamos tornar
                  sua ideia em realidade!
                </h3>
                {/* <h3> Fale agora mesmo com um de nossos especialistas em desenvolvimento, vamos conhecer mais da sua ideia. </h3> */}
                <MessageBtn>
                  <MessageInput
                    placeholder="Envie sua mensagem!"
                    value={message}
                    onChange={handleMessageChange}
                  />
                  {isSending ? (
                    <button className="send" onClick={handleWhatsAppClick}>
                      Enviar
                      <AiOutlineSend />
                    </button>
                  ) : (
                    <BsWhatsapp
                      className="support"
                      size={35}
                      onClick={handleWhatsAppClick}
                    />
                  )}
                  {/* <BsWhatsapp className="support" size={35} /> */}
                </MessageBtn>
              </Column>
            </Column>
            <div className="vertical-divider" />
            <Column>
              <Column className="contact">
                {/* <strong>Suporte</strong> */}
                <ul>
                  <li>
                    <MdEmail className="support" />
                    contato@nsolucoes.digital
                  </li>
                </ul>
                <ul>
                  <li>
                    <AiFillPhone className="support" /> (34) 3338-9349{" "}
                    <BsWhatsapp className="support" /> (34) 99160-1226
                  </li>
                </ul>
                <ul>
                  <li className="address-li">
                    <FaMapMarkerAlt className="address" />
                    Rua Irmão Afonso, 326 - São Sebastião,
                  </li>
                  <li className="address-li">Uberaba - MG, 38060-360</li>
                </ul>
              </Column>
              <Column className="icon-social">
                {/* <strong> Siga nossas redes </strong> */}
                <SocialRow>
                  <a
                    href="https://www.linkedin.com/company/nsolucoes-digital/people/"
                    target="_blank"
                  >
                    <BsLinkedin className="linkedin" size={30} />
                  </a>
                  <a
                    href="https://www.instagram.com/nsolucoesagenciadigital/"
                    target="_blank"
                  >
                    <AiFillInstagram className="instagram" size={38} />
                  </a>
                </SocialRow>
              </Column>
            </Column>
          </Row>
        </>
      )}

      {props.supportReserva && (
        <>
          <div className="social-contact">
            <h1>FALE CONOSCO</h1>
            {/* <Title title="" icon={<BiSupport size={100} />} /> */}
          </div>
          <SocialRow>
            <a
              href="https://www.linkedin.com/company/nsolucoes-digital/people/"
              target="_blank"
            >
              <BsLinkedin className="linkedin" size={30} />
            </a>
            <a
              href="https://www.instagram.com/nsolucoesagenciadigital/"
              target="_blank"
            >
              <AiFillInstagram className="instagram" size={38} />
            </a>
          </SocialRow>
          <Row className="main-row">
            <Column>
              <h1>Entre em contato!</h1>
              <h3>
                Fusce varius, dolor tempor interdum tristique, dui urna bib
                endum magna, ut ullamcorper purus
              </h3>
              <MessageBtn>
                <MessageInput placeholder="Envie sua mensagem!" />
                <BsWhatsapp className="whatsapp" size={30} />
              </MessageBtn>
            </Column>
            <div className="vertical-divider" />
            <Column>
              <Column>
                <strong>Suporte</strong>
                <ul>
                  <li>
                    <MdEmail className="support" />
                    suporte@nsolucoes.digital
                  </li>
                  <li>
                    <AiFillPhone className="support" /> (34) 9 98942-7824
                  </li>
                </ul>
              </Column>
              <Column>
                <strong>
                  <FaMapMarkerAlt className="address" /> Endereço
                </strong>
                <ul>
                  <li>
                    R. Irmão Afonso, 326 - São Sebastiao, Uberaba - MG,
                    38060-360
                  </li>
                </ul>
              </Column>
            </Column>
          </Row>
        </>
      )}

      {props.supportContact && (
        <>
          <div className="social-contact">
            <h1>Vamos conversar!</h1>
            {/* <Title title="" icon={<BiSupport size={100} />} /> */}
          </div>
          <Row className="main-row">
            <Column>
              <Column className="contact-column">
                <h3>
                  Fale com um de nossos especialistas agora mesmo, vamos tornar
                  sua ideia em realidade!
                </h3>
                <MessageBtn>
                  <MessageInput placeholder="Envie sua mensagem!" />
                  <BsWhatsapp className="support" size={35} />
                </MessageBtn>
              </Column>
            </Column>
            <div className="vertical-divider" />
            <Column>
              <Column className="contact">
                {/* <strong>Suporte</strong> */}
                <ul>
                  <li>
                    <MdEmail className="support" />
                    contato@nsolucoes.digital
                  </li>
                </ul>
                <ul>
                  <li>
                    <AiFillPhone className="support" /> (34) 3338-9349{" "}
                    <BsWhatsapp className="support" /> (34) 99160-1226
                  </li>
                </ul>
                <ul>
                  <li className="address-li">
                    <FaMapMarkerAlt className="address" />
                    Rua Irmão Afonso, 326 - São Sebastião,
                  </li>
                  <li className="address-li">Uberaba - MG, 38060-360</li>
                </ul>
              </Column>
              <Column className="icon-social">
                {/* <strong> Siga nossas redes </strong> */}
                <SocialRow>
                  <a
                    href="https://www.linkedin.com/company/nsolucoes-digital/people/"
                    target="_blank"
                  >
                    <BsLinkedin className="linkedin" size={30} />
                  </a>
                  <a
                    href="https://www.instagram.com/nsolucoesagenciadigital/"
                    target="_blank"
                  >
                    <AiFillInstagram className="instagram" size={38} />
                  </a>
                </SocialRow>
              </Column>
            </Column>
          </Row>
        </>
      )}

      {props.copyright && (
        <>
          <div className="horizontal-divider" />

          <Footer>
            <LogoWrapper onClick={() => (window.location.href = "/")}>
              <Logo className="width-logo" src={logo} />
              <LogoName className="logo-name" src={logo_name} />
            </LogoWrapper>
            <small>© {year}. N Soluções, todos os direitos reservados.</small>
          </Footer>
        </>
      )}

      {/* <FirstRow>
      <ContactForm>
        <Form>
          <Row>
            <InputData
              as={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Input
                type="text"
                name="username"
                placeholder="O seu nome completo"
                required
              ></Input>
              <div className="underline"></div>
            </InputData>
            <InputData
              as={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <Input
                type="email"
                name="email"
                placeholder="O seu endereço de email"
                required
              ></Input>
              <div className="underline"></div>
            </InputData>
          </Row>
          <Column>
            <InputData
              as={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              name="subject"
              className="full-fill"
            >
              <Input type="text" placeholder="Assunto" required></Input>
              <div className="underline"></div>
            </InputData>

            <Row style={{ width: "100%" }}>
              <InputData
                as={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <Input
                  type="text"
                  name="username"
                  placeholder="Empresa"
                  required
                ></Input>
                <div className="underline"></div>
              </InputData>
              <InputData
                as={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <Input
                  type="email"
                  name="email"
                  placeholder="O ramo da empresa"
                  required
                ></Input>
                <div className="underline"></div>
              </InputData>
            </Row>

            <InputData
              as={motion.div}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="full-fill"
            >
              <TextArea
                name="message"
                placeholder="Digite sua mensagem"
                required
              ></TextArea>
              <div className="underline"></div>
            </InputData>
            <SubmitButton type="submit">
              <span>ENVIAR</span>
            </SubmitButton>
          </Column>
        </Form>
      </ContactForm>
      <Map center={[-19.7502354, -47.943909]} zoom={15}>
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/twilightmoon/cl70w18v6000v15moe6rcn2iy/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidHdpbGlnaHRtb29uIiwiYSI6ImNsNzB2aWhnMjBpZmYzdm1xcm84Z2VnajcifQ._pGCPrHPXXLexRi73qXlrQ`}
          attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
        />
        <Marker icon={MarkerIcon} position={[-19.7502354, -47.943909]}>
          <Popup>
            N SOLUÇÕES <br />
          </Popup>
        </Marker>
      </Map>
    </FirstRow> */}
    </Container>
  );
}

export default Support;
