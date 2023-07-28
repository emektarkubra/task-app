import { useContext } from "react";
import { SiteContext } from "../context/SiteContext";
import { StyledSubmitButton } from "./styled/Button.styled";
import { StyledTaskFormContainer } from "./styled/TaskFormContainer.styled";

export default function TaskForm() {
  const { handleChangeInput, handleSubmitTask, task } = useContext(SiteContext);

  return (
    <>
      <StyledTaskFormContainer>
        <form onSubmit={handleSubmitTask}>
          <div className="taskInput text-align">
            <input
              onChange={handleChangeInput}
              type="text"
              id="taskInput"
              name="text"
              value={task.text}

            />
            <StyledSubmitButton className="mb-1">Submit</StyledSubmitButton>
          </div>
          <div className="checkInput mb-1">
            <input
              onChange={handleChangeInput}
              type="checkbox"
              id="checkInput"
              name="priority"
              checked = {task.priority}
            />
            <label htmlFor="checkInput">important</label>
          </div>
        </form>
      </StyledTaskFormContainer>
    </>
  );
}
