import styled from "styled-components";
import { themes } from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  background-color: ${themes.color.gray_800};
  height: 90vh;
`;

export const Main = styled.main`
  width: 600px;
  height: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${themes.color.purple_900};
  margin-top: 25px;
  margin-left: auto;
  margin-right: auto;
`;

export const ContainerImage = styled.div`
  width: 100%;
  height: 70%;
`
export const FilmImage = styled.img`
  width: 100%;
  height: 100%;
`
export const ConatinerText = styled.div`
  width: 100%;
  height: 30%;
  padding: 15px 0 0 15px;
`
export const Title = styled.h2`
  color: ${themes.color.white};
  font-size: ${themes.fontSize.lg};
`

export const Description = styled.p`
  width: 100%;
  color: ${themes.color.white};
  font-size: ${themes.fontSize.sm};
  margin-top: 5px;
`

