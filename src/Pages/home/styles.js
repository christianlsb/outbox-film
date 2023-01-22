import styled from "styled-components";
import { themes } from "../../styles/theme";
import { Link } from "react-router-dom";

export const Container = styled.div`
  background-color: ${themes.color.gray_800};
  `;

export const ContainerFilm = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  img {
    width: 300px;
  }
`;

export const Article = styled.article`
  margin-bottom: 16px;
  width: 300px;
`;

export const LinkFilm = styled(Link)`
  cursor: pointer;
  color: ${themes.color.white};
  text-decoration: none;
`;

export const Title = styled.p`
  color: ${themes.color.white};
`;