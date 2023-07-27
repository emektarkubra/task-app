import { styled } from "styled-components";

export const StyledTaskFormContainer = styled.div`
  padding: 1vw;

  & > form {
    font-size: 15px;

    & > div > input[type="text"] {
      width: 30vw;
      height: 2vw;
      font-size: 1.2vw;
      margin-right: 0.5vw;
      padding-left: 0.5vw;
      border: 1px solid black;
      border-radius: 0.2vw;
      outline: none;
    }
    & > div > input[type="checkbox"] {
      margin-left: 9.3vw;
    }
  }
`;
