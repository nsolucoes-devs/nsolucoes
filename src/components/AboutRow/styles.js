import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    padding: 70px 0 0 0;
    gap: 50px;

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
    padding-left: 0rem;
    padding-right: 0rem;

    a {
      text-decoration: none;
      color: rgb(91, 92, 105);
    }

    @media only screen and (max-width: 768px) {
      margin-top: 0px;
      padding-left: 0rem;
      padding-right: 0rem;
    }
    
    @media only screen and (min-device-width: 1441px) and (max-device-width: 1920px) and (orientation: landscape) {
      padding-left: 12rem;
      padding-right: 12rem;
    }
`