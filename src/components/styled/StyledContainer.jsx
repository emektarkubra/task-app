import { styled } from "styled-components";

export const StyledContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.bgColor};
  width: 60%;
  border-radius: 0.8vw;
  margin: 1vw auto;
  padding: 0 2vw 2vw 2vw;
`;