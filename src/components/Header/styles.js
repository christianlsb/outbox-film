import { Link } from "react-router-dom";
import styled from "styled-components";
import { themes } from "../../styles/theme";

export const HeaderContainer = styled.div`
  display: flex;
  height: 10vh;
  width: 100%;
  background-color: ${themes.color.white};
`;
export const LinkLogo = styled(Link)`
  text-decoration: none;
`;


export const Logo = styled.img`
  width: 60px;
  height: 60px;
  margin-top: 5px
`;
