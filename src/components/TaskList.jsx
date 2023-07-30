import { useContext } from "react";
import { SiteContext } from "../context//SiteContext.jsx";
import { StyledTaskList } from "./styled";
import {
  StyledShowImportantTasksButton,
  StyledShowAllTasksButton,
  StyledDeleteAllTasksButton,
} from "./styled/Button.styled";
import TaskListItem from "./TaskListItem";

export default function TaskList() {
  const {
    filteredTaskList,
    handleShowPrimaryTasks,
    handleDeleteAllTasks,
    visibility,
  } = useContext(SiteContext);

  return JSON.parse(localStorage.getItem("taskList")).length === 0 ? null : (
    <>
      <StyledTaskList>
        {visibility ? (
          <StyledShowAllTasksButton onClick={handleShowPrimaryTasks}>
            Show All Tasks
          </StyledShowAllTasksButton>
        ) : (
          <StyledShowImportantTasksButton onClick={handleShowPrimaryTasks}>
            Show important tasks..
          </StyledShowImportantTasksButton>
        )}

        <ul>
          {filteredTaskList.map((item, index) => (
            <TaskListItem key={index} item={item} />
          ))}
        </ul>

        <StyledDeleteAllTasksButton onClick={handleDeleteAllTasks}>
          Delete All
        </StyledDeleteAllTasksButton>
      </StyledTaskList>
    </>
  );
}
