import styled from "styled-components";
import { themes } from "../../styles/theme";
import { LazyLoadImage } from "react-lazy-load-image-component";

export const HeaderContainer = styled.header`
    display: flex;
    width: 100%;
    height: 60px;
    background-color: ${themes.color.white};
    border-bottom: 1px solid ${themes.color.black};
`

export const StyledLogo = styled(LazyLoadImage)`
    cursor: pointer;
`