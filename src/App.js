import React from "react";
import * as S from "./styles/home";

import Header from "./components/Header";
import Footer from "./components/Footer";
import {SearchBar} from "./components/Search";

function App() {
  return (
    <>
      <S.Container>
        <Header />
        <SearchBar />
        <Footer />
      </S.Container>
    </>
  );
}

export default App;
