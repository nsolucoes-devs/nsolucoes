import React from 'react';
import { Container, GrowthCard } from './styles';
import stock from "../../assets/images/stock-man.jpg"

function StockCard() {
  return (
    <Container>
        <img src={stock} />
        {/* <GrowthCard>
            <small>Taxa de crescimento</small>
        </GrowthCard> */}
    </Container>
  );
}

export default StockCard;