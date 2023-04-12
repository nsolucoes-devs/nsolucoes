import React from "react";
import {
  Container,
  Map,
  ContactForm,
  FirstRow,
  Form,
  Row,
  InputData,
  Input,
  Column,
  SubmitButton,
  TextArea,
} from "./styles";
import Title from "../Title";
import { BiSupport } from "../../styles/Icons";
import { TileLayer, Marker, Popup, MapContainer } from "react-leaflet";
import { motion } from "framer-motion";
import L from "leaflet";
import locationIcon from "../../assets/images/marker.png";

function Support() {
  const MarkerIcon = L.icon({
    iconUrl: locationIcon,
    iconSize: [40, 40],
    iconAnchor: [12, 12],
    popupAnchor: [0, 0],
  });

  return (
    <Container>
      <Title title="Suporte" icon={<BiSupport size={100} />} />
      <FirstRow>
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
      </FirstRow>
    </Container>
  );
}

export default Support;
