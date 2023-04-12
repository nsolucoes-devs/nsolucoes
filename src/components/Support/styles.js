import styled from "styled-components";
import { MapContainer } from "react-leaflet";

export const Container = styled.div`
  background-color: var(--secundary-background);
  width: 100%;
  padding: 80px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
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
      rgba(255,255,255,0.15)
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
  background-color: rgba(255, 255, 255, 0.70);
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
  background-color: rgba(255, 255, 255, 0.70);
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
      rgba(255,255,255,0.15)
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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 10px;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 10px;
  width: 80%;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  gap: 10px;
  align-items: center;
`;
