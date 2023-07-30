import { styled } from "styled-components";

export const StyledTaskFormContainer = styled.div`
  padding: 1vw;

  & > form {
    font-size: 1.5vw;

    & > div > input[type="text"] {
      background-color: ${({ theme }) => theme.colors.bgColor};
      color: ${({ theme }) => theme.colors.title};
      width: 30vw;
      height: 2vw;
      font-size: 1.2vw;
      font-family: Georgia, serif;
      margin-right: 0.5vw;
      padding-left: 0.5vw;
      border: 0;
      border-bottom: 0.1vw solid ${({ theme }) => theme.colors.title};
      outline: none;
    }
    & > div > input[type="checkbox"] {
      margin-left: 9.3vw;
    }
    & > div > label {
      color: ${({ theme }) => theme.colors.textColor};
    }
  }
`;