import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 0;

  .stacks {
    width: 120px;
    height: auto;
  }

  .divider {
    width: 90%;
    height: 2px;
    background-color: rgba(0,0,0,0.03);
    margin: 20px 0;
  }

  .scroll-container {
    display: flex;
    flex-direction: row;
    gap: 25px;
    margin-top: 70px;
    overflow-x: auto;
    white-space: nowrap;
    max-width: 60%;
    cursor: pointer;
    gap: 80px;
  }
`;

export const ProductRow = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    padding: 26px;
    justify-content: center;

    @media (max-width: 1100px) {
        flex-direction: column-reverse;

        .laptop {
            max-width: 100% !important;
        }
    }

    .laptop {
        max-width: 40%;
        cursor: pointer;
    }
`;

export const ProductColumn = styled.div`
    width: 25%;
    display: flex;
    flex-direction: column;
    gap: 15px;

    @media (max-width: 1100px) {
        width: 80%;
        text-align: center;
    }

    h1 {
        text-transform: uppercase;
    }

    strong {
        text-transform: uppercase;
    }

    ul {
        list-style: none;
        margin-left: 20px;

        li {
            margin: 10px 0;
        }
    }

`;
