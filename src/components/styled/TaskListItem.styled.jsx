import { styled } from "styled-components";

export const StyledTaskListItem = styled.li`
  border: 0.1vw solid #bdc3c7;
  height: 3.5vw;
  background-color: ${({ theme }) => theme.colors.bgColor};
  color : ${({ theme }) => theme.colors.textColor};
  border : 0.1vw solid gray;
  border-radius: 0.5vw;
  font-size: 1.3vw;
  font-family : Georgia, serif;
  margin-bottom: 0.5vw;
  margin-right: 3vw;
  padding-left: 1vw;
  display: flex;
  align-items: center;
  justify-content: space-between;

`;