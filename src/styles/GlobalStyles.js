import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        background: linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.6) 50%, rgba(144, 238, 144, 0.6) 51%, rgba(144, 238, 144, 0) 100%);
        font-family:  'Quicksand', sans-serif;
        color: #5B5C69;
    }

    :root {
        --accent-color: #1E8A4D;
        --hover-accent-color: #1E8A4D;
        --main-background: #ffffff;
        --secundary-background: #EEEEEE;
    }
`;
