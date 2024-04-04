import { React, useState } from 'react';
import { Container, ButtonBudget, Button } from './styles';
import { BsWhatsapp } from "react-icons/bs";

function Budget(props) {

  const handleButtonClick = () => {
    const message = `Estou no site da N Soluções, gostaria de orçamento para ${props.title}.`;
    const phoneNumber = '5534991601226';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <Container>
        <ButtonBudget> 
            <div className="main-budget">
              <h1>Faça agora seu orçamento!</h1>
                <Button onClick={handleButtonClick}>
                  <div className='button-manegement'>
                    <BsWhatsapp size={30} />
                    <h4>Clique aqui</h4>
                  </div>
                </Button>
            </div>
        </ButtonBudget>
    </Container>
  );
}

export default Budget;