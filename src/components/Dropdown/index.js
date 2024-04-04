import React from "react";
import { Container, ItemLi } from "./styles";

function Dropdown({ show, items, style }) {

  const onAnimationEnd = (e) => {
    if (!show) {
      e.target.classList.remove("animate-in");
    }
  };

  return (
    <Container className={`dropdown ${show ? "show" : ""}`} style={style} onAnimationEnd={onAnimationEnd}>
      {items.map((item, index) => {
        return (
          <ItemLi key={index} onClick={() => window.location = item.url} style={{ animationDelay: `${index * 50}ms` }} className={`dropdown-item ${show ? "animate-in" : ""}`}>
            {item.name}
          </ItemLi>
        );
      })}
    </Container>
  );
}

export default Dropdown;
