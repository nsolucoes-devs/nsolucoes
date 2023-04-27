import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 70px 0 0 0;
    gap: 60px;
    text-align: center;

    .left {
    margin-left: 10rem;
    align-self: flex-start;
  }

  @media only screen and (max-width: 768px) {
    .left {
      margin-left: 0;
      align-self: center;
    }    
  }

  @media screen and (min-width: 769px) and (max-width: 1023px) {
    .left {
      margin-left: 0;
      align-self: center;
    }  
  }
  
`;

export const CardsRow = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 50px;

    @media only screen and (max-width: 768px) {
      margin-top: 0px;
    }
    
`