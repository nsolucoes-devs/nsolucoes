import styled from "styled-components";
import { MapContainer } from "react-leaflet";

export const Container = styled.div`
  background-color: var(--secundary-background);
  width: 100%;
  padding: 80px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Map = styled(MapContainer)`
  width: 50%;
  min-height: 700px;
  border-radius: 12px;
  margin: 40px 0;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const ContactForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

export const FirstRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;
