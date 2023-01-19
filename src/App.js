import React from "react";
import * as S from "./styles/home"

import Header from "./components/Header";
import Footer from "./components/Footer";


function App() {
  return (
    <> 
      <S.Container>
            <Header/>
            <Footer/>
      </S.Container>
    </>
  );
}

export default App;
