import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import App from "./App";
import GlobalStyle from "./styles/globalStyle";
import {themes} from "./styles/theme"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <ThemeProvider theme={themes}>
      <App />
      <GlobalStyle />
    </ThemeProvider>
  </>
);
