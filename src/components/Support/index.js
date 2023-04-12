import React from "react";
import { Container, Map, ContactForm, FirstRow } from "./styles";
import Title from "../Title";
import { BiSupport } from "../../styles/Icons";
import { TileLayer, Marker, Popup, MapContainer } from "react-leaflet";

function Support() {
  return (
    <Container>
      <Title title="Suporte" icon={<BiSupport size={100} />} />
      <FirstRow>
        <ContactForm>

        </ContactForm>
        <Map center={[-19.740220284990205, -47.932456662666155]} zoom={15}>
          <TileLayer
            url={`https://api.mapbox.com/styles/v1/twilightmoon/cl70w18v6000v15moe6rcn2iy/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoidHdpbGlnaHRtb29uIiwiYSI6ImNsNzB2aWhnMjBpZmYzdm1xcm84Z2VnajcifQ._pGCPrHPXXLexRi73qXlrQ`}
            attribution='Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
          />
          <Marker position={[-19.740220284990205, -47.932456662666155]}>
            <Popup>
              Cartuchos On-line <br />
            </Popup>
          </Marker>
        </Map>
      </FirstRow>
    </Container>
  );
}

export default Support;
