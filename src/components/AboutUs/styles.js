import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--secundary-background);
`;

export const MainRow = styled.div`
  display: flex;
  flex-direction: row;
  padding: 100px 0;
  gap: 150px;
`;

export const MainColumn = styled.div`
  display: flex;
  flex-direction: column;

  h1 {
    font-weight: 600;
    font-size: 2.5rem;
    max-width: 600px;
    margin-bottom: 50px;
  }

  p {
    word-wrap: break-word;
    max-width: 600px;
    white-space: pre-wrap;
    word-break: break-word; /* Adicione esta linha */
    margin-bottom: 1rem;
  }
`;

export const SecundaryColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;

`

export const SecundaryRow = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 15px;
    margin-top: 15px;
    background-color: var(--main-background);
    width: fit-content;
    padding: 16px;
    border-radius: 20px;
    box-shadow: rgba(17, 12, 46, 0.08) 0px 48px 100px 0px;
    transition: all .2s;

    .products {
        color: #4F48C6;
    }

    .pie {
        color: #17C672;
    }

    .performance {
        color: #CD3256;
    }

    :hover {
        transform: scale(1.03);
        cursor: pointer;
    }
`
