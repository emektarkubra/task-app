import { styled } from "styled-components";

export const StyledSubmitButton = styled.button`
  height: 2vw;
  font-size: 1.2vw;
  background-color: #0652dd;
  color: white;
  border: 1px solid #0652dd;
  border-radius: 0.2vw;
  cursor: pointer;
`;

export const StyledShowButton = styled(StyledSubmitButton)`
  background-color: rgb(25, 135, 84);
  border: 0.1vw solid rgb(25, 135, 84);
  font-size: 1vw;
  margin-left: 41.7vw;
  border-radius: 0.4vw;
`;

export const StyledDoneButton = styled(StyledSubmitButton)`
  font-size: 0.9vw;
  background-color: #0652dd;
  border-bottom-color: #0652dd;
  border-bottom-left-radius: 0.4vw;
  border-bottom-right-radius: 0;
  border-bottom-style: solid;
  border-left-color: #0652dd;
  border-left-style: solid;
  border-left-width: 0.1vw;
  border-right-color: #0652dd;
  border-right-style: solid;
  border-right-width: 0.1vw;
  border-top-color: #0652dd;
  border-top-left-radius: 0.4vw;
  border-top-right-radius: 0;
  border-top-style: solid;
  border-top-width: 0.1vw;
`;

export const StyledEditButton = styled(StyledDoneButton)`
  background-color: #0fbcf9;
  border-bottom-color: #0fbcf9;
  border-left-color: #0fbcf9;
  border-right-color: #0fbcf9;
  border-top-color: #0fbcf9;
  border-radius: 0;
`;

export const StyledDeleteButton = styled(StyledDoneButton)`
  background-color: #dc3545;
  border-bottom-color: #dc3545;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0.4vw;
  border-left-color: #dc3545;
  border-right-color: #dc3545;
  border-top-color: #dc3545;
  border-top-left-radius: 0;
  border-top-right-radius: 0.4vw;
  margin-right: 1vw;
`;
