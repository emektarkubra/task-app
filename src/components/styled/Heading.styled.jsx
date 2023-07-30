import { styled } from "styled-components";

export const StyledHeading = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.title};

  & > h1 {
    margin: 0;
    margin-right: 0.5vw;
    font-family: Garamond, serif;
  }

  & > button {
    font-size: 1.4vw;
    background-color: ${({ theme }) => theme.colors.bgColor};
    color: ${({ theme }) => theme.colors.textColor};
    margin-top: 1.2vw;
    border: 0;
    cursor: pointer;
    outline: none;
  }
`;
