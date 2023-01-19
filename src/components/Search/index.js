import React, { useState } from "react";
import * as S from "./styles";
import { HiSearch } from "react-icons/hi";

export function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Searching for: ${searchTerm}`);
  };

  return (
    <S.SearchContainer>
      <S.FormStyled onSubmit={handleSubmit}>
        <S.Input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={handleChange}
        />
        <S.Button type="submit"><HiSearch/></S.Button>
      </S.FormStyled>
    </S.SearchContainer>
  );
}
