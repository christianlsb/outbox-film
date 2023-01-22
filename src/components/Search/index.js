import React, { useState } from "react";
import * as S from "./styles";



export function SearchBar({value, onChange}) {
function handleChange(event){
  onChange(event.target.value)
}  

  return (
    <S.SearchContainer>
        <S.Input
          type="text"
          placeholder="Search..."
          value={value}
          onChange={handleChange}
        />
    </S.SearchContainer>
  );
}
