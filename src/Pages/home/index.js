import React, { useEffect, useState } from "react";
import * as S from "./styles";
import api from "../../Services/api";
import { SearchBar } from "../../components/Search";

export default function Home() {
  const [filmes, setFilmes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "86da2cf4cf000ed3bc664a7dd307a24b",
          language: "pt-BR",
          page: 1,
        },
      });
      setFilmes(response.data.results);
    }
    loadFilmes();
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <h2>Carregando filmes...</h2>
      </div>
    );
  }

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
                  <S.Link to={`/filme/${filme.id}`}>Acessar</S.Link>
                </S.Article>
              );
            })}
          </div>
        </S.ContainerFilm>
      </S.Container>
    </>
  );
}
