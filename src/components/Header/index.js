import React from "react";
import * as S from "./style";
import Logo from "../../assets/png/logo.png";

export default function Header() {
  return (
    <S.HeaderContainer>
      <S.StyledLogo src={Logo} alt={"logo-film"} />
    </S.HeaderContainer>
  );
}
