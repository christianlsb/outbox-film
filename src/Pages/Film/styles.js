import styled from "styled-components";
import { themes } from "../../styles/theme";

export const Container = styled.div`
  display: flex;
  background-color: ${themes.color.gray_800};
  height: 90vh;
`;

export const Main = styled.main`
  width: 600px;
  height: 800px;
  display: flex;
  flex-direction: column;
  background-color: ${themes.color.purple_900};
  margin-top: 25px;
  margin-left: auto;
  margin-right: auto;
`;
