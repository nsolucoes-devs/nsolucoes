import styled from "styled-components";
import { MapContainer } from "react-leaflet";
import { BsWhatsapp } from "react-icons/bs";

export const Container = styled.div`
  background-color: var(--secundary-background);
  width: 100%;
  padding: 20px 0 0 0;
  padding-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 0;

  .left {
    margin-left: 10rem;
    align-self: flex-start;
  }

  .social-contact {
    font-size: 25px;
    text-transform: uppercase;
    font-weight: 900;
    text-align: center;
    position: relative;
    color: #252525;
    max-width: 95vw;
    margin-top: 7rem;
    margin-bottom: 30px;
  }

  .vertical-divider {
    height: 100%;
    /* align-self: flex-start; */
    width: 2px;
    background-color: rgba(0, 0, 0, 0.1);
  }
  .horizontal-divider {
    height: 2px;
    width: 80%;
    margin: 30px 0;
    background-color: rgba(0, 0, 0, 0.1);
  }

  @media only screen and (max-width: 767px) {
    .left {
      margin-left: 0;
      align-self: center;
    }

    .main-row {
      flex-direction: column;
      text-align: center;
      align-items: center;
      margin-bottom: 0;
    }

    .social-contact {
      margin-bottom: 0px;
    }

    .vertical-divider {
      display: none;
    }

    h1 {
      font-size: 30px;
    }

    h3 {
      font-size: 20px;
      font-weight: 300;
    }
  }

  @media only screen and (min-width: 768px) {
    .support-home {
      width: 80%;
    }
  }
`;

export const Map = styled(MapContainer)`
  width: 50%;
  border-radius: 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const ContactForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: center;
`;

export const FirstRow = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 100px;
`;

export const InputData = styled.div`
  position: relative;
  transition: 0.2s;
  cursor: pointer;
  width: 100%;

  .underline:before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    height: 3px;
    width: 0%;
    background: linear-gradient(
      to right,
      var(-accent-color),
      rgba(255, 255, 255, 0.15)
    );
    transition: all 0.4s ease;
  }

  input:focus ~ .underline:before {
    width: 100%;
    background-color: var(--accent-color);
  }
`;

export const Input = styled.input`
  outline: none;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  color: #252525;
  transition: 0.2s;
  cursor: pointer;
  width: 100%;
  height: 100%;
  font-size: 12px;
  padding: 16px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 0.4rem;
`;

export const TextArea = styled.textarea`
  outline: none;
  border: none;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  color: #252525;
  transition: 0.2s;
  cursor: pointer;
  width: 100%;
  max-width: 100%;
  height: 200px;
  max-height: 400px;
  font-size: 12px;
  padding: 16px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 0.4rem;
`;

export const SubmitButton = styled.button`
  align-self: flex-end;
  position: relative;
  padding: 10px 35px;
  border: 2px solid;
  border-radius: 20px;
  font-weight: 700;
  border-image: linear-gradient(
      45deg,
      var(-accent-color),
      rgba(255, 255, 255, 0.15)
    )
    1;
  background-color: transparent;
  display: inline-block;
  cursor: pointer;
  color: #fff;
  background-color: var(--accent-color);
  transition: all 0.2s ease;
  gap: 5px;

  :hover {
    transform: scale(1.05);
  }
`;

export const ButtonSend = styled.button`
  background-color: white;
  border-color: transparent;
  
  &:hover {
    cursor: pointer;
  }

  .icon-send {
    fill: rgb(30, 138, 77);
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 10px;
  min-height: 400px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 50px;
  width: 100%;
  height: 250px;
  margin-top: 1rem;
  margin-bottom: 2rem;

  @media (max-width: 500px) {
    height: fit-content;
  }

  @media only screen and (min-width: 769px) and (max-width: 1023px) {
    width: 80%;
  }

  .support-home {
    margin-top: 2rem !important;
    margin-bottom: 2rem !important;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;
  height: 100%;

  .support {
    color: #1e8a4d;
  }

  .contact {
    margin-top: 2rem;
  }

  .contact-column {
    margin-top: 2.5rem;
  }

  .address {
    color: #8b0000;
  }

  ul {
    list-style: none;

    li {
      margin-top: 8px;
      display: flex;
      align-items: center;
      gap: 8px;
      max-width: 350px;
    }
  }
  @media only screen and (max-width: 768px) {
    .address-li {
      align-items: center;
      display: block;
    }
  }

  @media only screen and (min-width: 769px) and (max-width: 1023px) {
    ul li {
      width: 125%;
    }
  }

  @media (max-width: 750px) {
    align-items: center !important;
    text-align: center;

    ul {
      margin-bottom: 30px;
    }
  }

  strong {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #252525;
    font-weight: 900 !important;
  }

  h1 {
    color: #252525;
  }

  h3 {
    max-width: 400px;
    font-weight: 300;
    color: black;
  }

  @media only screen and (max-width: 768px) {
    gap: 0px;

    h3 {
      max-width: 400px;
      font-weight: 300;
      color: black;
      margin-left: 1.8rem;
      margin-right: 1.8rem;
    }

    .contact {
      margin-top: 0;
    }
  }
`;

export const SocialRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  align-items: center;

  @media (max-width: 500px) {
    margin-bottom: 10px;
  }

  .linkedin {
    color: #1e8a4d;
    transition: all 0.2s;
    cursor: pointer;

    :hover {
      color: black;
      transform: scale(1.05);
    }
  }

  .instagram {
    color: #1e8a4d;
    cursor: pointer;

    :hover {
      color: black;
      transform: scale(1.05);
    }
  }
`;

export const MessageBtn = styled.div`
  width: 100%;
  margin-top: 20px;
  padding: 20px 25px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.15);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 85%;
  }
`;

export const MessageInput = styled.input`
  width: 70%;
  height: 100%;
  border: none;
  outline: none;
  font-size: 16px;
`;

export const Footer = styled.div`
  display: flex;
  width: 80%;
  align-items: center;
  text-align: center;

  .width-logo {
    width: 30px;
  }

  .logo-name {
    width: 100px;
  }

  small {
    width: 75%;
    font-weight: 600;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;

    .width-logo {
      margin-bottom: 15px;
    }

    small {
      width: 100%;
    }
  }

  @media screen and (min-width: 769px) and (max-width: 1023px) {
    small {
      width: 65%;
      font-weight: 600;
    }
  }
`;

export const WhatsappIcon = styled(BsWhatsapp)`
  position: relative;
  right: 5px;
  cursor: pointer;
  color: #1e8a4d;
  font-size: 1.7rem;
`;

export const SendButton = styled.button`
  position: relative;
  cursor: pointer;
  margin-left: 0;
  width: fit-content;
  padding: 6px 18px;
  border-radius: 70px;
  background-color: var(--accent-color);
  font-weight: 600;
  font-size: 12px;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 3px;
  overflow: hidden;
  text-align: center;
  transition: background-color 0.3s ease-out 0.2s;
  z-index: 1;
  height: 150%;

  &:before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background-color: #18693b;

    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.6s ease-out 0s; 
    z-index: -1;
  }

  &:hover:before {
    width: 500px;
    height: 500px;
  }

  &:hover {
    background-color: #1e8a4d;
  }

  border-right-style: solid;
  border-right-width: 0px;
  border-left-style: solid;
  border-left-width: 0px;
  border-top-width: 0px;
  border-top-style: solid;
  border-bottom-width: 0px;
  border-bottom-style: solid;

`;
