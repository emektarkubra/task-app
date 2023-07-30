import { styled } from "styled-components";

export const StyledBadge = styled.span`
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.bgColor};
  border-radius: 0.5vw;
  font-size: 1vw;
  padding-bottom: 0.32vw;
  padding-left: 0.8vw;
  padding-right: 0.8vw;
  padding-top: 0.32vw;
  margin-right: 0.5vw;
  text-align: center;
`;
