import { useContext } from "react";
import { SiteContext } from "../context//SiteContext.jsx";
import Badge from "./Badge";
import { StyledTaskListItem } from "./styled";
import {
  StyledDeleteButton,
  StyledDoneButton,
  StyledEditButton,
} from "./styled/Button.styled";
import { FaRegEdit, FaRegTrashAlt } from "react-icons/fa";
import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";

export default function TaskListItem({ item }) {
  const { handleDeleteTask, handleEditTask, handleDoneTask } =
    useContext(SiteContext);

  return (
    <>
      <StyledTaskListItem $isDone={item.isDone}>
        <div>
          {item.priority ? <Badge /> : null}
          {item.text}
        </div>
        <div className="button-group">
          <StyledDoneButton
            className="doneButton"
            onClick={() => handleDoneTask(item)}>
            {item.isDone ? (
              <ImCheckboxChecked className="check-box" />
            ) : (
              <ImCheckboxUnchecked />
            )}
          </StyledDoneButton>
          <StyledEditButton onClick={() => handleEditTask(item)}>
            <FaRegEdit />
          </StyledEditButton>
          <StyledDeleteButton onClick={() => handleDeleteTask(item)}>
            <FaRegTrashAlt />
          </StyledDeleteButton>
        </div>
      </StyledTaskListItem>
    </>
  );
}
