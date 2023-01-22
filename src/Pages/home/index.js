import React, { useEffect, useState } from "react";
import * as S from "./styles";
import api from "../../Services/api";
import { SearchBar } from "../../components/Search";
import { Link } from "react-router-dom";

export default function Home() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "86da2cf4cf000ed3bc664a7dd307a24b",
          language: "pt-BR",
          page: 2,
        },
      });
      setFilmes(response.data.results);
    }
    loadFilmes();
  }, []);

  
  return (
    <>
      <S.Container>
        <SearchBar />
        <S.ContainerFilm>
          <div>
            {filmes.map((filme) => {
              return (
                <S.Article key={filme.id}>
                  <S.Title>{filme.title}</S.Title>
                  <img
                    src={`https://image.tmdb.org/t/p/original/${filme.poster_path}`}
                    alt={filme.title}
                  />
                  <S.LinkFilm to={`/film/${filme.id}`}>Acessar</S.LinkFilm>
                </S.Article>
              );
            })}
          </div>
        </S.ContainerFilm>
      </S.Container>
    </>
  );
}
