import * as S from "./styles";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../Services/api"

export default function Film() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilme() {
      await api.get(`/movie/${id}`, {
        params: {
          api_key: '86da2cf4cf000ed3bc664a7dd307a24b',
          language: 'pt-BR',
        }
      })
        .then((response) => {
          setFilme(response.data);
          setLoading(false);
        })
        .catch(() => {
          navigate('/', { replace: true });
          return;
        })
    }
    loadFilme()
    return () => {
    }
  }, [])

  return (
    <S.Container>
      <S.Main>
        <S.ContainerImage>
          <S.FilmImage src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={filme.title} />
        </S.ContainerImage>
        <S.ConatinerText>
          <S.Title>{filme.title}</S.Title>
          <S.Description>{filme.overview}</S.Description>
        </S.ConatinerText>
      </S.Main>
    </S.Container>
  );
}
