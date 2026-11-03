import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: system-ui, Roboto, sans-serif;
        background: #121212;
        color: #fff
    }

`;