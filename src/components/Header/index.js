import React from 'react';
import * as S from "./styles"
import LogoImg from "../../assets/png/logo.png"

export default function Header() {
 return (
   <S.HeaderContainer>
        <S.Logo src={LogoImg} alt={"logo"}/>
   </S.HeaderContainer>
 );
}