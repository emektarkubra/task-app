import { styled } from "styled-components";

export const StyledSubmitButton = styled.button`
  height: 2vw;
  font-size: 1.2vw;
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  border: 0.1vw solid ${({ theme }) => theme.colors.blue};
  outline: 0;
  border-radius: 0.4vw;
  cursor: pointer;
`;

export const StyledShowImportantTasksButton = styled(StyledSubmitButton)`
  background-color: ${({ theme }) => theme.colors.lightGray};
  border: 0.1vw solid ${({ theme }) => theme.colors.lightGray};
  width: 11.5vw;
  font-size: 1vw;
  margin-left: 41.4vw;
  margin-bottom: 1vw;
`;
export const StyledShowAllTasksButton = styled(StyledShowImportantTasksButton)`
  background-color: ${({ theme }) => theme.colors.red};
  border: 0.1vw solid ${({ theme }) => theme.colors.red};
`;

export const StyledDoneButton = styled(StyledSubmitButton)`
  font-size: 1.3vw;
  color: ${({ theme }) => theme.colors.blue};
  background-color: ${({ theme }) => theme.colors.bgColor};
  border: 0;
  border-right: 0.1vw solid ${({ theme }) => theme.colors.gray};
  &:hover {
    color: ${({ theme }) => theme.colors.blue};
  }
  border-radius: 0;
`;

export const StyledEditButton = styled(StyledDoneButton)`
  font-size: 1.5vw;
  color: ${({ theme }) => theme.colors.green};
  &:hover {
    color: ${({ theme }) => theme.colors.green};
  }
`;

export const StyledDeleteButton = styled(StyledDoneButton)`
  font-size: 1.4vw;

  color: ${({ theme }) => theme.colors.red};
  margin-right: 1vw;
  border: 0;

  &:hover {
    color: ${({ theme }) => theme.colors.red};
  }
`;

export const StyledDeleteAllTasksButton = styled(StyledSubmitButton)`
  background-color: ${({ theme }) => theme.colors.red};
  border: 0.1vw solid ${({ theme }) => theme.colors.red};
  margin: 1vw 25vw;
  width: 7vw;
`;
